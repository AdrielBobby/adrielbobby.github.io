import { useEffect, useRef } from 'react';
import { subscribeScroll } from '../../lib/scroll.js';
import { usePhone } from '../../lib/phone.js';
import { setNavTheme } from '../../components/navTheme.js';
import { createOpening } from './opening.js';
import { createHandoff } from './handoff.js';
import { drawStaticPortrait } from './staticPortrait.js';
import './opening.css';

// How the track's scroll is shared out (fractions of the whole track):
// the logo is finished at FACE, then the handoff into Who I am runs Z0 to Z1.
// On a phone there is no handoff: the logo is finished at PHONE_FACE, near the end of a shorter track.
const FACE = 0.62;
const PHONE_FACE = 0.92;
const Z0 = 0.66;
const Z1 = 0.94;
const HEADLINE = 'I build things end to end, then try to break them.';
const clamp = (t) => Math.max(0, Math.min(1, t));
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function AboutText({ children }) {
  return (
    <>
      <div>
        <p className="about-tag">02 / Who I am</p>
        <h2 id="about-title" className="about-head" aria-label={HEADLINE}>
          {HEADLINE.split(' ').map((word, i) => (
            <span key={i} aria-hidden="true">
              <span className="about-word"><span className="about-word-inner">{word}</span></span>{' '}
            </span>
          ))}
        </h2>
        <p className="about-role">Cybersecurity and software student who builds things end to end.</p>
        <dl className="about-stats">
          <div className="about-stat"><dt>Projects built</dt><dd>10+</dd></div>
          <div className="about-stat"><dt>Awards won</dt><dd>3</dd></div>
        </dl>
      </div>
      {children}
    </>
  );
}

// The opening and Who I am share one tall track with a sticky stage: the kv
// tile becomes the face logo, the logo breaks into symbols, and the symbols
// settle into the portrait while the Who I am text enters.
// On a phone the track ends with the finished logo, and Who I am is a plain
// stacked section after it, with the portrait drawn once.
export default function Opening() {
  const phone = usePhone();
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const svgRef = useRef(null);
  const skipRef = useRef(null);
  const cueRef = useRef(null);
  const sceneRef = useRef(null);
  const particlesRef = useRef(null);
  const halftoneRef = useRef(null);
  const portraitRef = useRef(null);
  const staticRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const skip = skipRef.current;
    const cue = cueRef.current;
    const scene = sceneRef.current;
    const drawing = createOpening(svgRef.current);
    const handoff = phone ? null : createHandoff({
      svg: svgRef.current,
      stage,
      particles: particlesRef.current,
      halftone: halftoneRef.current,
      portrait: portraitRef.current,
      tag: scene.querySelector('.about-tag'),
      words: [...scene.querySelectorAll('.about-word-inner')],
      role: scene.querySelector('.about-role'),
      stats: [...scene.querySelectorAll('.about-stat')],
    });
    const reduce = reduceMotion();
    track.classList.toggle('is-still', reduce); // one screen: the settled scene

    // The logo only needs redrawing while p is moving (it is finished after FACE),
    // and the handoff only while z is, so each is skipped when it has not changed.
    let lastZ = 0;
    let lastP = -1;
    let look = null;
    // On load the green kv letters sit on black for a beat, then the tile blooms behind them.
    // Scrolling (or a page that opens part-way down) skips straight to the finished state.
    let intro = reduce || window.scrollY > 4 ? 1 : 0;
    let lastIntro = -1;
    let last = { sc: 0, y: 0 };
    const faceEnd = phone ? PHONE_FACE : FACE;
    const paint = (sc, y) => {
      last = { sc, y };
      const p = clamp(sc / faceEnd);
      const z = phone ? 0 : clamp((sc - Z0) / (Z1 - Z0));
      lastZ = z;
      if (p > 0 && intro < 1) intro = 1;
      if (p !== lastP || intro !== lastIntro || !look) { look = drawing.render(p, intro); lastP = p; lastIntro = intro; }
      const { bg, fg, toLight, onDark } = look;
      if (handoff) {
        handoff.render(z);
        scene.classList.toggle('is-live', z > 0.6); // text becomes selectable once it has arrived
      }
      stage.style.backgroundColor = bg;
      skip.style.color = onDark ? '#a3aba7' : fg;
      // The scroll cue shows once the tile has bloomed and goes as soon as the page moves.
      cue.style.color = onDark ? '#a3aba7' : fg;
      cue.style.opacity = intro >= 1 ? String(1 - clamp(p / 0.03)) : '0';
      skip.style.opacity = String(1 - clamp((p - 0.86) / 0.08));
      skip.style.visibility = p > 0.94 ? 'hidden' : 'visible';
      // While the stage is under the nav pill, the pill follows the page colour.
      setNavTheme(y < track.offsetHeight - 40 ? (toLight > 0.5 ? 'light' : 'dark') : null, 'opening');
    };

    let off = () => {};
    let introTimer = 0;
    let introFrame = 0;
    const playIntro = () => {
      const HOLD = 900;
      const RUN = 900;
      introTimer = window.setTimeout(() => {
        const t0 = performance.now();
        const step = (now) => {
          if (intro >= 1) return;
          intro = clamp((now - t0) / RUN);
          paint(last.sc, last.y);
          if (intro < 1) introFrame = requestAnimationFrame(step);
        };
        introFrame = requestAnimationFrame(step);
      }, HOLD);
    };
    // A phone's URL bar sliding away changes only the height: that must not rebuild anything.
    let lastW = window.innerWidth;
    const onResize = () => {
      if (phone && window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      drawing.measure();
      lastP = -1; // the logo's size changed, so redraw it
      if (staticRef.current) drawStaticPortrait(staticRef.current);
      if (handoff) {
        handoff.size();
        if (reduce) paint(1, Infinity);
        else handoff.render(lastZ);
      } else if (reduce) paint(1, Infinity);
      else paint(last.sc, last.y);
    };
    window.addEventListener('resize', onResize);
    // The symbols are measured in JetBrains Mono, so size things once it is ready.
    let alive = true;
    const ready = document.fonts?.load ? document.fonts.load('12px "JetBrains Mono"') : Promise.resolve();
    ready.catch(() => {}).then(() => {
      if (!alive) return;
      if (handoff) handoff.size();
      if (staticRef.current) drawStaticPortrait(staticRef.current);
      if (reduce) { paint(1, Infinity); return; }
      off = subscribeScroll(({ y, eased, vh }) => {
        const max = track.offsetHeight - vh;
        paint(max > 0 ? clamp(eased / max) : 1, y);
      });
      if (intro < 1) { paint(0, window.scrollY); playIntro(); }
    });
    if (reduce) paint(1, Infinity);

    return () => {
      alive = false;
      window.clearTimeout(introTimer);
      cancelAnimationFrame(introFrame);
      off();
      window.removeEventListener('resize', onResize);
      setNavTheme(null, 'opening');
    };
  }, [phone]);

  // Phone: the Who I am text rises in once as it comes into view.
  const aboutRef = useRef(null);
  useEffect(() => {
    const el = aboutRef.current;
    if (!phone || !el) return undefined;
    if (reduceMotion()) { el.classList.add('is-in'); return undefined; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { el.classList.add('is-in'); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [phone]);

  const logo = (
    <section className="opening-logo" aria-labelledby="opening-title">
      <h1 id="opening-title" className="visually-hidden">Adriel Bobby</h1>
      <svg
        ref={svgRef}
        className="opening-art"
        viewBox="0 0 943 708"
        role="img"
        aria-label="The kv mark grows into a green page, then redraws itself as a hand-drawn face logo while you scroll."
      />
    </section>
  );
  const controls = (
    <>
      <p ref={cueRef} className="opening-cue" aria-hidden="true">
        Scroll <span className="opening-cue-arrow">&darr;</span>
      </p>
      <a ref={skipRef} className="opening-skip" href="#about">
        Skip intro <span aria-hidden="true">&darr;</span>
      </a>
    </>
  );

  if (phone) {
    return (
      <>
        <div ref={trackRef} className="opening is-phone">
          <div id="opening" className="opening-mark opening-mark-intro" data-nav-theme="dark" />
          <div ref={stageRef} className="opening-stage">
            {logo}
            {controls}
          </div>
        </div>
        <section ref={aboutRef} id="about" className="about-phone" data-nav-theme="light" aria-labelledby="about-title">
          <div className="about-phone-inner">
            <AboutText>
              <div className="about-portrait about-portrait-static" role="img" aria-label="Portrait of Adriel, drawn in dot, comma, colon, minus, plus and star characters.">
                <canvas ref={staticRef} aria-hidden="true" />
              </div>
            </AboutText>
          </div>
        </section>
      </>
    );
  }

  return (
    <div ref={trackRef} className="opening">
      {/* Two markers split the track for the nav and for #about links. */}
      <div id="opening" className="opening-mark opening-mark-intro" data-nav-theme="dark" />
      <div id="about" className="opening-mark opening-mark-about" data-nav-theme="light" />

      <div ref={stageRef} className="opening-stage">
        {logo}

        <section ref={sceneRef} className="about" aria-labelledby="about-title">
          <canvas ref={halftoneRef} className="about-halftone" aria-hidden="true" />
          <div className="about-inner">
            <AboutText>
              <div
                ref={portraitRef}
                className="about-portrait"
                role="img"
                aria-label="Portrait of Adriel, drawn in dot, comma, colon, minus, plus and star characters."
              />
            </AboutText>
          </div>
        </section>

        <canvas ref={particlesRef} className="opening-particles" aria-hidden="true" />
        {controls}
      </div>
    </div>
  );
}
