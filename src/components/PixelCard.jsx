// PixelCard.jsx — React Bits-style pixel ripple effect.
//
// HOW IT WORKS:
//   • A grid of tiny squares covers the entire card (behind content).
//   • Each pixel's delay = its Euclidean distance from the card center.
//   • onMouseEnter → pixels appear() in a center-out radial wave.
//   • onMouseLeave → pixels disappear() (shrink back).
//   • uses requestAnimationFrame; cancels cleanly on unmount / fast hover.
//
// Adapted from: https://reactbits.dev/components/pixel-card

import { useRef, useEffect, useCallback } from 'react';

// ── Tuning ─────────────────────────────────────────────────────
const GAP   = 5;   // px between pixel grid points
const SPEED = 35;  // shimmer speed scale (matches React Bits default)
// ───────────────────────────────────────────────────────────────

const DEFAULT_COLORS = [
  'rgba(139,  92, 246, 0.9)',
  'rgba(167, 139, 250, 0.7)',
  'rgba(196, 181, 253, 0.5)',
  'rgba( 91,  45, 142, 0.8)',
  'rgba( 45,  27,  78, 0.9)',
  'rgba( 93, 124, 253, 0.6)',
];

// ── Pixel class (faithful to React Bits) ──────────────────────
class Pixel {
  constructor({ ctx, x, y, color, speed, delay, reverseDelay, reducedMotion }) {
    this.ctx          = ctx;
    this.x            = x;
    this.y            = y;
    this.color        = color;
    this.speed        = this.rand(0.1, 0.9) * speed;
    this.size         = 0;
    this.sizeStep     = Math.random() * 0.6;           // was 0.4
    this.minSize      = 0.5;
    this.maxSizeInt   = 2;                              // max rendered size (px)
    this.maxSize      = this.rand(this.minSize, this.maxSizeInt);
    this.delay        = reducedMotion ? 0 : delay;
    this.reverseDelay = reducedMotion ? 0 : reverseDelay;
    this.counter      = 0;
    this.reverseCounter = 0;
    this.counterStep  = Math.random() * 4 + 2;         // was 0–4, now 2–6
    this.isIdle       = false;
    this.isReverse    = false;
    this.isShimmer    = false;
  }

  rand(min, max) { return Math.random() * (max - min) + min; }

  draw() {
    const off = this.maxSizeInt * 0.5 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      Math.round(this.x + off),
      Math.round(this.y + off),
      Math.ceil(this.size),
      Math.ceil(this.size)
    );
  }

  // Grow pixel, respecting the distance-based delay
  appear() {
    this.isIdle = false;
    this.reverseCounter = 0; // reset for next disappear
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      if (this.size > 0) this.draw(); // keep drawing if already visible
      return;
    }
    if (this.size >= this.maxSize) { this.isShimmer = true; }
    if (this.isShimmer) { this.shimmer(); } else { this.size += this.sizeStep; }
    this.draw();
  }

  // Shrink pixel back to nothing with an inverse wave (edges vanish first)
  disappear() {
    this.isIdle = false;
    this.isShimmer = false;
    this.counter   = 0; // reset for next appear
    
    // Multiply counterStep by 2.5 so the reverse delay wave moves MUCH faster
    if (this.reverseCounter <= this.reverseDelay) {
      this.reverseCounter += this.counterStep * 2.5; 
      if (this.size > 0) this.draw();
      return;
    }
    
    if (this.size <= 0) { 
      this.size = 0;
      this.isIdle = true; 
      return; 
    }
    
    // Pixel shrinks twice as fast (was 0.15)
    this.size -= 0.3;
    this.draw();
  }

  // Gentle oscillation once pixel reached max size
  shimmer() {
    if (this.size >= this.maxSize)  { this.isReverse = true;  }
    if (this.size <= this.minSize)  { this.isReverse = false; }
    this.size += this.isReverse ? -this.speed : this.speed;
  }
}
// ──────────────────────────────────────────────────────────────

export default function PixelCard({ children, className = '', colors = DEFAULT_COLORS }) {
  const wrapperRef = useRef(null);
  const canvasRef  = useRef(null);
  const pixelsRef  = useRef([]);
  const rafRef     = useRef(null);

  // Build the full pixel grid for the current card size
  const initPixels = useCallback(() => {
    const canvas  = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    // wrapper now fills the entire GlowCard (negative margin CSS),
    // so offsetWidth/Height gives us the correct full-card dimensions.
    const CW = wrapper.offsetWidth;
    const CH = wrapper.offsetHeight;
    canvas.width  = CW;
    canvas.height = CH;

    const ctx      = canvas.getContext('2d');
    const reduced  = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const newPixels = [];
    const maxDistance = Math.sqrt(Math.pow(CW/2, 2) + Math.pow(CH/2, 2));

    for (let x = 0; x < CW; x += GAP) {
      for (let y = 0; y < CH; y += GAP) {
        const dx       = x - CW / 2;
        const dy       = y - CH / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const color    = colors[Math.floor(Math.random() * colors.length)];
        newPixels.push(new Pixel({
          ctx, x, y, color,
          speed  : SPEED * 0.001,
          delay  : distance,
          reverseDelay: maxDistance - distance, // inverted so outside vanishes first
          reducedMotion: reduced,
        }));
      }
    }
    pixelsRef.current = newPixels;
  }, [colors]);

  // RAF loop — calls appear() or disappear() on every pixel each frame
  const doAnimate = useCallback((type) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let stillRunning = false;
    for (const px of pixelsRef.current) {
      if (type === 'appear') {
        px.appear();
        if (!px.isIdle) stillRunning = true;
      } else {
        px.disappear();
        if (!px.isIdle) stillRunning = true;
      }
    }

    if (stillRunning) {
      rafRef.current = requestAnimationFrame(() => doAnimate(type));
    }
  }, []);

  const handleAnimation = useCallback((type) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    
    // Only re-init if the browser was resized or it's empty, so we don't
    // unexpectedly destroy existing pixels mid-animation!
    const wrapper = wrapperRef.current;
    const canvas  = canvasRef.current;
    if (wrapper && canvas && type === 'appear') {
      if (canvas.width !== wrapper.offsetWidth || canvas.height !== wrapper.offsetHeight || pixelsRef.current.length === 0) {
        initPixels();
      }
    }

    doAnimate(type);
  }, [initPixels, doAnimate]);

  // Init on mount; clean up RAF on unmount
  useEffect(() => {
    initPixels();
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [initPixels]);

  return (
    <div
      ref={wrapperRef}
      className={`pixel-card-wrapper ${className}`}
      onMouseEnter={() => handleAnimation('appear')}
      onMouseLeave={() => handleAnimation('disappear')}
    >
      {/* Canvas sits BEHIND the content */}
      <canvas ref={canvasRef} className="pixel-card-canvas" aria-hidden="true" />

      {/* Content sits ABOVE the canvas */}
      <div className="pixel-card-content">
        {children}
      </div>
    </div>
  );
}
