// Navbar.jsx — Floating pill navbar with dynamic-island hover expansion,
// kv_ blinking cursor brand, and liquid glass backdrop.
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-pill" aria-label="Main navigation">

      <div className="navbar-header">
        {/* ── Brand: kv_ with blinking cursor ── */}
        <a href="#hero" className="navbar-brand" onClick={() => setIsOpen(false)}>
          kv<span className="cursor-blink">_</span>
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
      <div className={`navbar-links ${isOpen ? 'open' : ''}`} role="list">
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#certifications" onClick={() => setIsOpen(false)}>Certifications</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#hackathons" onClick={() => setIsOpen(false)}>Hackathons</a>
        <a href="#leadership" onClick={() => setIsOpen(false)}>Leadership</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>

    </nav>
  );
}
