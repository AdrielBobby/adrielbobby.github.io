import { useEffect, useRef } from 'react';
import { subscribeScroll } from '../../lib/scroll.js';
import { setNavTheme } from '../../components/navTheme.js';
import { createOpening } from './opening.js';
import './opening.css';

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// The opening: a tall track with a sticky stage. Scrolling through the track
// drives the drawing from the kv tile to the finished face logo.
export default function Opening() {
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const svgRef = useRef(null);
  const skipRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const skip = skipRef.current;
    const drawing = createOpening(svgRef.current);
    const reduce = reduceMotion();
    track.classList.toggle('is-still', reduce); // one screen tall, finished logo

    const paint = (p, y, max) => {
      const { bg, fg, toLight, onDark } = drawing.render(p);
      stage.style.backgroundColor = bg;
      skip.style.color = onDark ? '#a3aba7' : fg;
      skip.style.opacity = String(1 - Math.min(Math.max((p - 0.86) / 0.08, 0), 1));
      skip.style.visibility = p > 0.94 ? 'hidden' : 'visible';
      // While the stage is under the nav pill, the pill follows the page colour.
      setNavTheme(y < max + window.innerHeight - 40 ? (toLight > 0.5 ? 'light' : 'dark') : null);
    };

    if (reduce) {
      // A single pale screen with the finished logo; the nav reads it as light.
      track.dataset.navTheme = 'light';
      paint(1, Infinity, 0);
      return undefined;
    }
    track.dataset.navTheme = 'dark';
    const onResize = () => drawing.measure();
    window.addEventListener('resize', onResize);
    const off = subscribeScroll(({ y, eased, vh }) => {
      const max = track.offsetHeight - vh;
      paint(max > 0 ? Math.min(Math.max(eased / max, 0), 1) : 1, y, max);
    });
    return () => {
      off();
      window.removeEventListener('resize', onResize);
      setNavTheme(null);
    };
  }, []);

  return (
    <section id="opening" ref={trackRef} className="opening" data-nav-theme="dark" aria-labelledby="opening-title">
      <div ref={stageRef} className="opening-stage">
        <h1 id="opening-title" className="visually-hidden">Adriel Bobby</h1>
        <svg
          ref={svgRef}
          className="opening-art"
          viewBox="0 0 943 708"
          role="img"
          aria-label="The kv mark grows into a green page, then redraws itself as a hand-drawn face logo while you scroll."
        />
        <a ref={skipRef} className="opening-skip" href="#about">
          Skip intro <span aria-hidden="true">&darr;</span>
        </a>
      </div>
    </section>
  );
}
