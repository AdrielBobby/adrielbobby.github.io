// Navbar.jsx — Floating pill navbar with dynamic-island hover expansion,
// kv_ blinking cursor brand, and liquid glass backdrop.

export default function Navbar() {
  return (
    <nav className="navbar-pill" aria-label="Main navigation">

      {/* ── Brand: kv_ with blinking cursor ── */}
      <a href="#hero" className="navbar-brand">
        kv<span className="cursor-blink">_</span>
      </a>

      {/* ── Nav links ── */}
      <div className="navbar-links" role="list">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#hackathons">Hackathons</a>
        <a href="#leadership">Leadership</a>
        <a href="#contact">Contact</a>
      </div>

    </nav>
  );
}
