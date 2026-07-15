// App.jsx — Root component. Orchestrates the full loading sequence.
//
// ── State machine ────────────────────────────────────────────────────────────
//
//   loading:   true  → Loader is mounted (fullscreen terminal overlay)
//   ripple:    false → passed to PixelGrid; flips true when Loader calls onDone
//   heroReady: false → passed to Hero as animateIn; flips true on ripple complete
//
// ── Timing sequence (all times relative to page load at T=0) ────────────────
//
//   T+0       Page loads. loading=true, ripple=false, heroReady=false.
//   T+300     Terminal begins typing (START_DELAY inside Loader).
//   T+1850    Typing complete (31 chars × 50ms).
//   T+2150    onDone fires from Loader:
//               • ripple=true  → PixelGrid wave starts from canvas center
//               • Loader overlay begins CSS fade-out (opacity 1→0 over 400ms)
//               • 400ms timer starts to unmount Loader
//   T+2550    Loader unmounts (fade complete, timing matches CSS transition).
//   T+3150    Wave covers full screen diagonal (RIPPLE_DURATION = 1000ms).
//               • onRippleComplete fires → heroReady=true
//               • Hero begins fading in (opacity 0→1, 500ms)
//               • Hero children stagger in with delays up to 1200ms
//   T+4350    Scroll indicator fully visible (last element, 1200ms delay).
//
// ── Z-index layering ─────────────────────────────────────────────────────────
//
//   PixelGrid canvas  →  position:fixed, z-index:0   (always behind everything)
//   Page content      →  normal flow                  (above fixed z-index:0)
//   Loader overlay    →  position:fixed, z-index:9999 (topmost)
//
// As Loader fades out (opacity 1→0), the PixelGrid ripple is revealed beneath.

import { useState, useCallback } from 'react';

import Loader   from './components/Loader';

import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import Education      from './components/Education';
import Certifications from './components/Certifications';
import Experience     from './components/Experience';
import Projects       from './components/Projects';
import Hackathons     from './components/Hackathons';
import Leadership     from './components/Leadership';
import Contact        from './components/Contact';
import Footer         from './components/Footer';

export default function App() {
  const [loading,   setLoading]   = useState(true);
  const [heroReady, setHeroReady] = useState(false);

  // Called by Loader when typing + post-typing wait are complete.
  // Starts the 400ms countdown to unmount the overlay and triggers hero entrance.
  const handleDone = useCallback(() => {
    setHeroReady(true);
    setTimeout(() => setLoading(false), 400);         // → Loader unmounts after fade
  }, []);

  return (
    <>
      {/* ── Loader: fullscreen terminal overlay, unmounts after fade ──────────── */}
      {loading && <Loader onDone={handleDone} />}

      {/* ── Normal page content ───────────────────────────────────────────────── */}
      <header>
        {/* Navbar floats above everything at z-index:100 */}
        <Navbar />
      </header>

      <main>
        {/* Hero receives animateIn so it can coordinate its entrance animations.
            PixelGrid is no longer rendered inside Hero — it's the App-level canvas above. */}
        <Hero animateIn={heroReady} />
        <About />
        <Education />
        <Certifications />
        <Experience />
        <Projects />
        <Hackathons />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
