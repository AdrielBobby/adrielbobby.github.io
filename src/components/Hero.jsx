// Hero.jsx — Full-viewport cybersecurity hero tile with ASCII art,
// decrypt animations, rotating status line, CTAs, and scroll indicator.

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AsciiDecrypt from './AsciiDecrypt';
import DecryptText from './DecryptText';

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

// ── Framer Motion variants ──────────────────────────────────────────
// ASCII decrypts on its own (~1.2 s); the rest staggers in after that.
const STAGGER_DELAY = 1.3; // seconds after mount for first child
const CHILD_GAP = 0.15;    // seconds between each child

const fadeUp = (i) => ({
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: STAGGER_DELAY + i * CHILD_GAP, duration: 0.5, ease: 'easeOut' },
  },
});

export default function Hero() {
  // ── Rotating status line ──────────────────────────────────────────
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStatusIdx(prev => (prev + 1) % STATUS_MESSAGES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="hero">

      {/* Hidden heading for SEO + screen readers */}
      <h1 className="sr-only">Adriel Bobby</h1>

      <div className="hero-content">

        {/* ── ASCII art block (decrypt + glitch handled internally) ── */}
        <AsciiDecrypt lines={ASCII_ART} speed={25} glitchDuration={150} />

        {/* ── Status line ── */}
        <motion.p
          className="hero-status"
          key={statusIdx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="hero-status-label">status:</span>{' '}
          {STATUS_MESSAGES[statusIdx]}
        </motion.p>

        {/* ── Subtitle ── */}
        <motion.p
          className="hero-subtitle"
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
        >
          <DecryptText text="Computer Science Engineer" speed={35} />
        </motion.p>

        {/* ── Tagline ── */}
        <motion.p
          className="hero-tagline"
          variants={fadeUp(1)}
          initial="hidden"
          animate="visible"
        >
          <DecryptText text="Breaking into cybersecurity one packet at a time." speed={30} />
        </motion.p>

        {/* ── CTA buttons ── */}
        <motion.div
          className="hero-actions"
          variants={fadeUp(2)}
          initial="hidden"
          animate="visible"
        >
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Resume
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator pinned to bottom ── */}
      <motion.div
        className="hero-scroll-indicator"
        variants={fadeUp(3)}
        initial="hidden"
        animate="visible"
      >
        <DecryptText text="SCROLL" speed={35} startDelay={1750} className="scroll-label" />
        <svg 
          className="scroll-arrow-dashed" 
          width="24" 
          height="60" 
          viewBox="0 0 24 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <line className="arrow-tail" x1="12" y1="0" x2="12" y2="52" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 4" />
          <path className="arrow-head" d="M6 46 L12 52 L18 46" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
