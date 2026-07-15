// Hero.jsx — Full-viewport cybersecurity hero tile with ASCII art,
// decrypt animations, rotating status line, CTAs, and scroll indicator.
//
// ── animateIn prop ──────────────────────────────────────────────────────────
// When animateIn flips true (fired by App.jsx after the ripple completes),
// the Hero and all its children receive the 'animate-in' class which triggers
// CSS entrance animations:
//
//   .hero             opacity 0→1          500ms
//   .hero-ascii       scale reveal         350ms  cubic-bezier(0.22,1,0.36,1)
//   .hero-status      fade in              500ms  no delay
//   .hero-subtitle    fade-up              700ms  delay 300ms
//   .hero-tagline     fade-up              700ms  delay 500ms
//   .hero-actions     fade-up              700ms  delay 800ms
//   .hero-scroll-indicator fade-up         700ms  delay 1200ms
//
// AsciiDecrypt is controlled by `startDecrypt` which becomes true after one
// rAF following animateIn, ensuring the scale animation begins painting first.
//
// NOTE: PixelGrid has been removed from this component. It is now rendered at
// App level as a fixed canvas so the ripple is visible through the Loader fade.

import { useState, useEffect } from 'react';
import AsciiDecrypt from './AsciiDecrypt';
import DecryptText  from './DecryptText';
import PixelGrid    from './PixelGrid';

// ── ASCII art for "Adriel Bobby" ──────────────────────────────────────────────
const ASCII_ART = [
  '    ___       __     _      __   ____        __    __         ',
  '   /   | ____/ /____(_)__  / /  / __ )____  / /_  / /_  __  __',
  '  / /| |/ __  / ___/ / _ \\/ /  / __  / __ \\/ __ \\/ __ \\/ / / /',
  ' / ___ / /_/ / /  / /  __/ /  / /_/ / /_/ / /_/ / /_/ / /_/ / ',
  '/_/  |_\\__,_/_/  /_/\\___/_/  /_____/\\____/_.___/_.___/\\__, /  ',
  '                                                     /____/   '
];

// ── Status messages that rotate every 3 s ────────────────────────────────────
const STATUS_MESSAGES = [
  'scanning open ports…',
  'hardening attack surface…',
  'deploying honeypots…',
];

export default function Hero({ animateIn = false }) {
  // ── Rotating status line ──────────────────────────────────────────────────
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStatusIdx(prev => (prev + 1) % STATUS_MESSAGES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // ── AsciiDecrypt timing ───────────────────────────────────────────────────
  // Delay the scramble start by one rAF after animateIn so the CSS scale
  // animation gets a chance to paint its initial frame first.
  const [startDecrypt, setStartDecrypt] = useState(false);

  useEffect(() => {
    if (!animateIn) return;
    const rafId = requestAnimationFrame(() => setStartDecrypt(true));
    return () => cancelAnimationFrame(rafId);
  }, [animateIn]);

  // Shorthand: add 'animate-in' when the prop is true
  const ai = animateIn ? ' animate-in' : '';

  return (
    <section id="hero" className={`hero${ai}`}>

      <PixelGrid />

      {/* Hidden heading for SEO + screen readers */}
      <h1 className="sr-only">Adriel Bobby</h1>

      <div className="hero-content">

        {/* ── ASCII art block (scale reveal + decrypt on animateIn) ─────────── */}
        <div className={`hero-ascii${ai}`}>
          <AsciiDecrypt
            lines={ASCII_ART}
            speed={25}
            glitchDuration={150}
            animate={startDecrypt}
          />
        </div>

        {/* ── Status line ── */}
        <p
          className={`hero-status${ai}`}
          key={statusIdx}
        >
          <span className="hero-status-label">status:</span>{' '}
          {STATUS_MESSAGES[statusIdx]}
        </p>

        {/* ── Subtitle — fade-up, delay 300ms ── */}
        <p className={`hero-subtitle${ai}`}>
          <DecryptText
            text="Computer Science Engineer"
            speed={17}
            startDelay={0}
            animate={startDecrypt}
          />
        </p>

        {/* ── Tagline — fade-up, delay 500ms ── */}
        <p className={`hero-tagline${ai}`}>
          <DecryptText
            text="Breaking into cybersecurity one packet at a time."
            speed={15}
            startDelay={0}
            animate={startDecrypt}
          />
        </p>

        {/* ── CTA buttons — fade-up, delay 800ms ── */}
        <div className={`hero-actions${ai}`}>
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a
            href="/Resume_v3.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Resume
          </a>
        </div>
      </div>

      {/* ── Scroll indicator — fade-up, delay 1200ms ── */}
      <div className={`hero-scroll-indicator${ai}`}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <DecryptText
            text="SCROLL"
            speed={20}
            startDelay={0}
            animate={startDecrypt}
            className="scroll-label"
            style={{ marginRight: '-0.25em' }}
          />
        </div>
        <svg
          className="scroll-arrow-dashed"
          width="24"
          height="50"
          viewBox="0 0 24 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line className="arrow-tail" x1="12" y1="0" x2="12" y2="52"
            stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 4" />
          <path className="arrow-head" d="M6 46 L12 52 L18 46"
            stroke="var(--color-primary)" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
