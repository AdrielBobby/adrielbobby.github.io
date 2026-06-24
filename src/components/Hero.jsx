// Hero.jsx — Full-viewport cybersecurity hero tile with ASCII art,
// decrypt animations, rotating status line, CTAs, and scroll indicator.

import { useState, useEffect } from 'react';
import AsciiDecrypt from './AsciiDecrypt';
import DecryptText from './DecryptText';
import PixelGrid from './PixelGrid';

// ── ASCII art for "Adriel Bobby" ────────────────────────────────────
// Block-letter banner (fits ≈ 70 cols at font-size 0.55rem on desktop).
const ASCII_ART = [
  '    ___       __     _      __   ____        __    __         ',
  '   /   | ____/ /____(_)__  / /  / __ )____  / /_  / /_  __  __',
  '  / /| |/ __  / ___/ / _ \\/ /  / __  / __ \\/ __ \\/ __ \\/ / / /',
  ' / ___ / /_/ / /  / /  __/ /  / /_/ / /_/ / /_/ / /_/ / /_/ / ',
  '/_/  |_\\__,_/_/  /_/\\___/_/  /_____/\\____/_.___/_.___/\\__, /  ',
  '                                                     /____/   '
];

// ── Status messages that rotate every 3 s ───────────────────────────
const STATUS_MESSAGES = [
  'scanning open ports…',
  'hardening attack surface…',
  'deploying honeypots…',
];

// ── Stagger timing constants (kept for DecryptText startDelay) ──────
// These match the CSS transition-delay values in index.css so both
// the CSS fade-up and the decrypt text animations stay in sync.
const STAGGER_DELAY = 0.8; // starts just after ASCII art completes
const CHILD_GAP = 0.4;     // generous gap for dramatic effect

export default function Hero({ animateIn = false }) {
  // ── Rotating status line ──────────────────────────────────────────
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStatusIdx(prev => (prev + 1) % STATUS_MESSAGES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // Delay ASCII animation by one rAF after animateIn fires.
  // Ensures loader is fully removed from DOM before ASCII scramble starts
  // — prevents loader dissolve and ASCII scramble competing for main thread.
  const [asciiReady, setAsciiReady] = useState(false);
  useEffect(() => {
    if (!animateIn) return;
    // Start scramble immediately on mount (which now happens after loader cursor centers)
    const id = requestAnimationFrame(() => setAsciiReady(true));
    return () => cancelAnimationFrame(id);
  }, [animateIn]);

  return (
    <section id="hero" className={`hero${animateIn ? ' hero-animate-in' : ''}`}>

      <PixelGrid />

      {/* Hidden heading for SEO + screen readers */}
      <h1 className="sr-only">Adriel Bobby</h1>

      <div className="hero-content">

        {/* ── ASCII art block (decrypt + glitch handled internally) ── */}
        <div className="hero-ascii">
          <AsciiDecrypt lines={ASCII_ART} speed={25} glitchDuration={150} animate={asciiReady} />
        </div>

        {/* ── Status line — CSS opacity transition, no JS animation lib ── */}
        <p
          className="hero-status"
          key={statusIdx}
          style={{
            opacity: animateIn ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          <span className="hero-status-label">status:</span>{' '}
          {STATUS_MESSAGES[statusIdx]}
        </p>

        {/* ── Subtitle (hero-fade-item index 1) ── */}
        <p className="hero-subtitle hero-fade-item">
          <DecryptText
            text="Computer Science Engineer"
            speed={17}
            startDelay={STAGGER_DELAY * 1000}
            animate={animateIn}
          />
        </p>

        {/* ── Tagline (hero-fade-item index 2) ── */}
        <p className="hero-tagline hero-fade-item">
          <DecryptText
            text="Breaking into cybersecurity one packet at a time."
            speed={15}
            startDelay={(STAGGER_DELAY + CHILD_GAP) * 1000}
            animate={animateIn}
          />
        </p>

        {/* ── CTA buttons (hero-fade-item index 3) ── */}
        <div className="hero-actions hero-fade-item">
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

      {/* ── Scroll indicator (hero-fade-item index 4) ── */}
      <div className="hero-scroll-indicator hero-fade-item">
        {/* Use inline paddingLeft to perfectly balance the 0.25em letter-spacing on the right.
            Wrapping in a div ensures HMR instantly updates the UI regardless of CSS cache. */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <DecryptText
            text="SCROLL"
            speed={20}
            startDelay={(STAGGER_DELAY + 3 * CHILD_GAP) * 1000}
            animate={animateIn}
            className="scroll-label"
            style={{ marginRight: '-0.25em' }} /* Mathematically offsets the trailing 0.25em letter-spacing */
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
          <line className="arrow-tail" x1="12" y1="0" x2="12" y2="52" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 4" />
          <path className="arrow-head" d="M6 46 L12 52 L18 46" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
