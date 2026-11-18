import { useEffect, useRef, useState } from 'react';
import './cursor.css';

// Tuning: how the symbol trail looks.
const SPACING = 4; // px of pointer travel between spawns
const PER_STEP = 2; // symbols per spawn
const JITTER = 16; // px of random scatter around the path
const LAG = 2; // px the trail starts behind the pointer (more when moving left, less when moving right)
const SIZE_MIN = 10;
const SIZE_RANGE = 9;
const START_ALPHA = 0.9;
const DECAY = 0.96; // alpha multiplier per 60 fps frame
const MAX = 900; // live symbols
const CHARS = ['.', ',', ':', '-', '+', '*'];
// The [ ] brackets wrap whatever link or button is under the pointer.
const PAD = 7; // px of air between the thing and each bracket
const NAV_PAD = 3; // snugger in the nav pill, where the links sit close together
const MIN_W = 30;
const MIN_H = 26;
const BIG_W = 640; // wider or taller than this (a whole card or banner): keep small brackets at the pointer
const BIG_H = 360;

// Where the native cursor stays (and the trail pauses), and what counts as a link.
const TYPING = 'input, textarea, [contenteditable], .ct-body, .kv-body';
const LINKS = 'a, button, [role="tab"], [role="button"], summary';

const GREEN_ON_DARK = '#4fb08a';
const GREEN_ON_LIGHT = '#337058';
const INK = '#0f1211';

// The colour for a point on the page: green on dark scenes, deep green on pale
// ones, and graphite on the opening's green page (green on green would vanish).
function colourAt(el) {
  const stage = el.closest('.opening-stage');
  // the green kv tile (an SVG polygon) sits on the dark opening page at first
  if (stage && el.tagName === 'polygon') return INK;
  if (stage) {
    const m = getComputedStyle(stage).backgroundColor.match(/\d+(\.\d+)?/g);
    if (m) {
      const [r, g, b] = m.map(Number);
      const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      return lum < 0.3 ? GREEN_ON_DARK : lum < 0.75 ? INK : GREEN_ON_LIGHT;
    }
  }
  const contact = el.closest('.contact');
  if (contact) {
    const lets = contact.querySelector('.contact-lets');
    return lets && parseFloat(getComputedStyle(lets).opacity) > 0.5 ? GREEN_ON_LIGHT : GREEN_ON_DARK;
  }
  const themed = el.closest('[data-nav-theme]');
  return themed && themed.dataset.navTheme === 'light' ? GREEN_ON_LIGHT : GREEN_ON_DARK;
}

// A blinking terminal caret that turns into [ ] over links, leaving a trail of
// the site's own symbols (. , : - + *) as the mouse moves. Mouse and trackpad
// only: touch screens and reduced motion keep the normal cursor.
export default function Cursor() {
  const [enabled] = useState(
    () => window.matchMedia('(hover: hover) and (pointer: fine)').matches
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const canvasRef = useRef(null);
  const caretRef = useRef(null);

  useEffect(() => {
    if (!enabled) return undefined;
    const canvas = canvasRef.current;
    const caret = caretRef.current;
    const ctx = canvas.getContext('2d');
    const root = document.documentElement;
    root.classList.add('has-cursor');

    let W = 0, H = 0, dpr = 1;
    const size = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    };
    size();

    let parts = [];
    let frame = 0;
    let px = -1, py = -1; // last pointer position
    let lx = -1, ly = -1; // where the trail last spawned
    let colour = GREEN_ON_DARK;
    let typing = false;
    let movingTimer = 0;
    let lastTheme = 0;

    const tick = () => {
      frame = 0;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      parts = parts.filter((p) => p.a > 0.03);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy; p.a *= DECAY;
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.col;
        ctx.font = `${p.s.toFixed(1)}px "JetBrains Mono", monospace`;
        ctx.fillText(p.c, p.x, p.y);
      }
      ctx.globalAlpha = 1;
      if (parts.length) frame = requestAnimationFrame(tick);
    };
    const wake = () => { if (!frame) frame = requestAnimationFrame(tick); };

    const restyle = (el) => {
      colour = colourAt(el);
      caret.style.setProperty('--cur', colour);
    };

    // What the pointer is over: a typing area, a link (the brackets wrap it) or plain page.
    let linkEl = null;
    let morphTimer = 0;
    const place = () => {
      if (px < 0) return;
      if (linkEl && !linkEl.isConnected) linkEl = null;
      if (!linkEl) {
        caret.style.transform = `translate3d(${px}px, ${py}px, 0)`;
        return;
      }
      // a link broken over two lines: use the line the pointer is on
      // Some things are boxed by a part of them: a skill tile by its icon (not the caption), the
      // axolotl by its speech bubble; links in the nav pill get a snugger fit.
      let t = linkEl;
      let pad = PAD;
      if (t.matches('.sk-tile')) t = t.querySelector('.sk-tile-face') || t;
      else if (t.closest('.axo-peek')) {
        const bubble = document.querySelector('.axo-bubble-inner');
        if (bubble && bubble.getBoundingClientRect().width > 20) t = bubble; // (it is scaled to nothing until it pops out)
      }
      else if (t.closest('.nav')) pad = NAV_PAD;
      const rects = [...t.getClientRects()];
      const r = rects.find((q) => px >= q.left && px <= q.right && py >= q.top && py <= q.bottom) || t.getBoundingClientRect();
      let x, y, w, h;
      if (r.width > BIG_W || r.height > BIG_H) { // a card-sized link: small brackets around the pointer
        w = MIN_W + 14; h = MIN_H; x = px - w / 2; y = py - h / 2;
      } else {
        w = Math.max(r.width + pad * 2, MIN_W); h = Math.max(r.height + pad * 2, MIN_H);
        x = r.left + r.width / 2 - w / 2; y = r.top + r.height / 2 - h / 2;
      }
      caret.style.setProperty('--w', `${w.toFixed(1)}px`);
      caret.style.setProperty('--h', `${h.toFixed(1)}px`);
      caret.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    };
    // While a link slides sideways under a still pointer (the Projects strip), the brackets stand down
    // and the plain caret shows; they come back once it stops. Normal vertical scrolling keeps them on.
    let hold = false;
    let holdTimer = 0;
    let linkLeft = null; // the hovered link's left edge, to notice sideways movement
    const hover = (el) => {
      typing = Boolean(el.closest(TYPING));
      const next = typing || hold ? null : el.closest(LINKS);
      if (next !== linkEl) {
        linkLeft = next ? next.getBoundingClientRect().left : null;
        // morph between the caret and the brackets (and between links), but not while simply following the pointer
        caret.classList.add('is-morph');
        window.clearTimeout(morphTimer);
        morphTimer = window.setTimeout(() => caret.classList.remove('is-morph'), 220);
      }
      linkEl = next;
      caret.classList.toggle('is-on', !typing);
      caret.classList.toggle('is-link', Boolean(next));
    };

    const onMove = (e) => {
      const el = e.target instanceof Element ? e.target : document.body;
      px = e.clientX; py = e.clientY;
      hover(el);
      place();
      caret.classList.add('is-moving');
      window.clearTimeout(movingTimer);
      movingTimer = window.setTimeout(() => caret.classList.remove('is-moving'), 140);
      const now = performance.now();
      if (now - lastTheme > 60) { lastTheme = now; restyle(el); }
      if (lx < 0 || typing) { lx = px; ly = py; return; } // no streak across a gap
      const dx = px - lx, dy = py - ly;
      const d = Math.hypot(dx, dy);
      const n = Math.floor(d / SPACING);
      if (!n) return;
      const ux = dx / d, uy = dy / d; // direction of travel
      for (let i = 1; i <= n; i++) {
        const t = i / n;
        for (let k = 0; k < PER_STEP; k++) {
          let jx = (Math.random() - 0.5) * JITTER;
          let jy = (Math.random() - 0.5) * JITTER;
          // The scatter never lands ahead of the pointer, whichever way it moves.
          const ahead = jx * ux + jy * uy;
          if (ahead > 0) { jx -= 2 * ahead * ux; jy -= 2 * ahead * uy; }
          // and starts a little behind it, clear of the caret block itself
          // (the block sits 4px left and 5px right of the pointer, so the gap differs by direction)
          const lag = LAG - 3 * ux;
          jx -= ux * lag; jy -= uy * lag;
          parts.push({
            x: lx + dx * t + jx,
            y: ly + dy * t + jy,
            vx: (Math.random() - 0.5) * 0.5,
            vy: -0.15 - Math.random() * 0.45,
            c: CHARS[Math.floor(Math.random() * CHARS.length)],
            s: SIZE_MIN + Math.random() * SIZE_RANGE,
            a: START_ALPHA,
            col: colour,
          });
        }
      }
      lx += dx * ((n * SPACING) / d); ly += dy * ((n * SPACING) / d);
      if (parts.length > MAX) parts.splice(0, parts.length - MAX);
      wake();
    };
    const onLeave = () => { caret.classList.remove('is-on', 'is-link'); linkEl = null; lx = -1; };
    // The page can scroll under a still pointer: keep the colour right.
    let scrollTimer = 0;
    const onScroll = () => {
      if (scrollTimer || px < 0) return;
      scrollTimer = window.setTimeout(() => {
        scrollTimer = 0;
        const el = document.elementFromPoint(px, py);
        if (el) { restyle(el); hover(el); place(); }
      }, 100);
    };
    // The page can also move a link under a still pointer: keep the brackets on it.
    let placeFrame = 0;
    const release = () => {
      hold = false;
      const el = document.elementFromPoint(px, py);
      if (el) { hover(el); place(); }
    };
    const onScrollPlace = () => {
      if (placeFrame || (!linkEl && !hold)) return;
      placeFrame = requestAnimationFrame(() => {
        placeFrame = 0;
        if (linkEl) {
          const left = linkEl.getBoundingClientRect().left;
          if (linkLeft !== null && Math.abs(left - linkLeft) > 1) {
            hold = true;
            linkEl = null;
            caret.classList.remove('is-link', 'is-morph');
          }
          linkLeft = left;
        }
        if (hold) { window.clearTimeout(holdTimer); holdTimer = window.setTimeout(release, 180); }
        place();
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scroll', onScrollPlace, { passive: true });
    window.addEventListener('resize', size);
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', onScrollPlace);
      window.removeEventListener('resize', size);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.clearTimeout(movingTimer);
      window.clearTimeout(scrollTimer);
      window.clearTimeout(morphTimer);
      window.clearTimeout(holdTimer);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(placeFrame);
      root.classList.remove('has-cursor');
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <canvas ref={canvasRef} className="cursor-canvas" aria-hidden="true" />
      <div ref={caretRef} className="cursor-caret" aria-hidden="true" />
    </>
  );
}
