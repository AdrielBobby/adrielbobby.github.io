// Navbar.jsx — Floating pill navbar with dynamic-island hover expansion,
// kv_ blinking cursor brand, and liquid glass backdrop.
import { useState, useRef, useCallback } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Refs for the magic-line indicator
  const linksRef = useRef(null);
  const indicatorRef = useRef(null);

  // Move the indicator to whichever link the cursor just entered.
  // Using offsetLeft/offsetWidth instead of getBoundingClientRect because
  // offsetLeft is always relative to offsetParent (.navbar-links, position:relative),
  // so the navbar's translateX(-50%) transform has zero effect on accuracy.
  const handleLinkEnter = useCallback((e) => {
    const indicator = indicatorRef.current;
    if (!indicator) return;
    const link = e.currentTarget;
    indicator.style.left  = `${link.offsetLeft}px`;
    indicator.style.width = `${link.offsetWidth}px`;
    indicator.style.opacity = '1';
  }, []);

  // Fade the indicator out when the cursor leaves the links area
  const handleLinksLeave = useCallback(() => {
    if (indicatorRef.current) indicatorRef.current.style.opacity = '0';
  }, []);

  return (
    <nav className="navbar-pill" aria-label="Main navigation">

      <div className="navbar-header">
        {/* ── Brand: kv_ with blinking cursor ── */}
        <a href="#hero" className="navbar-brand" onClick={() => setIsOpen(false)}>
          <span className="brand-kv">kv</span><span className="cursor-blink">_</span>
        </a>

        {/* ── Mobile Hamburger Toggle ── */}
        <button 
          className="navbar-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* ── Nav links ── */}
      <div
        ref={linksRef}
        className={`navbar-links ${isOpen ? 'open' : ''}`}
        role="list"
        onMouseLeave={handleLinksLeave}
      >
        {/* Single shared "magic line" indicator — slides between links */}
        <span className="navbar-indicator" ref={indicatorRef} aria-hidden="true" />

        {[
          ['#about',           'About'],
          ['#certifications',  'Certifications'],
          ['#projects',        'Projects'],
          ['#hackathons',      'Hackathons'],
          ['#leadership',      'Leadership'],
          ['#contact',         'Contact'],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            onMouseEnter={handleLinkEnter}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </a>
        ))}
      </div>

    </nav>
  );
}
