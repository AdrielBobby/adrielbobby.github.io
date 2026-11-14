import { useEffect, useRef } from 'react';
import { subscribeScroll } from '../../lib/scroll.js';
import { setNavTheme } from '../../components/navTheme.js';
import { createOpening } from './opening.js';
import { createHandoff } from './handoff.js';
import './opening.css';

// How the track's scroll is shared out (fractions of the whole track):
// the logo is finished at FACE, then the handoff into Who I am runs Z0 to Z1.
const FACE = 0.62;
const Z0 = 0.66;
const Z1 = 0.94;
const HEADLINE = 'I build things end to end, then try to break them.';
const clamp = (t) => Math.max(0, Math.min(1, t));
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// The opening and Who I am share one tall track with a sticky stage: the kv
// tile becomes the face logo, the logo breaks into symbols, and the symbols
// settle into the portrait while the Who I am text enters.
export default function Opening() {
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const svgRef = useRef(null);
  const skipRef = useRef(null);
  const sceneRef = useRef(null);
  const particlesRef = useRef(null);
  const halftoneRef = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const skip = skipRef.current;
    const scene = sceneRef.current;
    const drawing = createOpening(svgRef.current);
    const handoff = createHandoff({
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
    track.classList.toggle('is-still', reduce); // one screen: the settled Who I am scene

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
    const paint = (sc, y) => {
      last = { sc, y };
      const p = clamp(sc / FACE);
      const z = clamp((sc - Z0) / (Z1 - Z0));
      lastZ = z;
      if (p > 0 && intro < 1) intro = 1;
      if (p !== lastP || intro !== lastIntro || !look) { look = drawing.render(p, intro); lastP = p; lastIntro = intro; }
      const { bg, fg, toLight, onDark } = look;
      handoff.render(z);
      stage.style.backgroundColor = bg;
      scene.classList.toggle('is-live', z > 0.6); // text becomes selectable once it has arrived
      skip.style.color = onDark ? '#a3aba7' : fg;
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
    const onResize = () => {
      drawing.measure();
      lastP = -1; // the logo's size changed, so redraw it
      handoff.size();
      if (reduce) paint(1, Infinity);
      else handoff.render(lastZ);
    };
    window.addEventListener('resize', onResize);
    // The symbols are measured in JetBrains Mono, so size things once it is ready.
    let alive = true;
    const ready = document.fonts?.load ? document.fonts.load('12px "JetBrains Mono"') : Promise.resolve();
    ready.catch(() => {}).then(() => {
      if (!alive) return;
      handoff.size();
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
  }, []);

  return (
    <div ref={trackRef} className="opening">
      {/* Two markers split the track for the nav and for #about links. */}
      <div id="opening" className="opening-mark opening-mark-intro" data-nav-theme="dark" />
      <div id="about" className="opening-mark opening-mark-about" data-nav-theme="light" />

      <div ref={stageRef} className="opening-stage">
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

        <section ref={sceneRef} className="about" aria-labelledby="about-title">
          <canvas ref={halftoneRef} className="about-halftone" aria-hidden="true" />
          <div className="about-inner">
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
            <div
              ref={portraitRef}
              className="about-portrait"
              role="img"
              aria-label="Portrait of Adriel, drawn in dot, comma, colon, minus, plus and star characters."
            />
          </div>
        </section>

        <canvas ref={particlesRef} className="opening-particles" aria-hidden="true" />
        <a ref={skipRef} className="opening-skip" href="#about">
          Skip intro <span aria-hidden="true">&darr;</span>
        </a>
      </div>
    </div>
  );
}
