import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { subscribeScroll } from '../../lib/scroll.js';
import { setNavTheme } from '../../components/navTheme.js';
import { createTerminal, EMAIL } from './terminal.js';
import Axolotl from '../axolotl/Axolotl.jsx';
import './contact.css';

const SPACING = 16; // px between halftone dots
const clamp = (t) => Math.max(0, Math.min(1, t));
const lerp = (a, b, t) => a + (b - a) * t;

// value noise, so the dots grow in soft patches instead of a straight edge
function hash(x, y) {
  let h = (x * 374761393 + y * 668265263) | 0;
  h = ((h ^ (h >> 13)) * 1274126177) | 0;
  return ((h ^ (h >> 16)) >>> 0) / 4294967295;
}
function noise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  return lerp(lerp(hash(xi, yi), hash(xi + 1, yi), u), lerp(hash(xi, yi + 1), hash(xi + 1, yi + 1), u), v);
}

// Contact: a pale "Let's talk." screen; scrolling grows black halftone dots
// across it until the page is black; then the contact.sh terminal types in once.
export default function Contact() {
  const navigate = useNavigate();
  const navRef = useRef(navigate);
  navRef.current = navigate;
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const letsRef = useRef(null);
  const bodyRef = useRef(null);
  const terminalRef = useRef(null);
  const [shown, setShown] = useState(false); // the terminal window is visible
  const [ready, setReady] = useState(false); // the intro has finished typing
  const [copied, setCopied] = useState(''); // '', 'Copied' or 'Copy failed'

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const terminal = createTerminal({
      body: bodyRef.current,
      reduce,
      navigate: (to) => navRef.current(to),
      onReady: () => setReady(true),
    });
    terminalRef.current = terminal;
    let W = 0, H = 0, dpr = 1, lastP = -1, started = false;

    const size = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = stage.clientWidth;
      H = stage.clientHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      lastP = -1;
    };
    const drawDots = (p) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      if (p <= 0) return;
      ctx.fillStyle = '#000';
      if (p >= 0.985) { ctx.fillRect(0, 0, W, H); return; }
      const cols = Math.ceil(W / SPACING) + 1, rows = Math.ceil(H / SPACING) + 1, rmax = SPACING * 0.78;
      ctx.beginPath();
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const f = 0.5 * (j / rows) + 0.5 * noise(i * 0.18, j * 0.18); // sweeps downward, with variation
          const r = rmax * clamp((p * 1.55 - f * 0.9) / 0.5);
          if (r < 0.4) continue;
          ctx.moveTo(i * SPACING + r, j * SPACING);
          ctx.arc(i * SPACING, j * SPACING, r, 0, 6.2832);
        }
      }
      ctx.fill();
    };
    const apply = (p, underPill) => {
      // While the visitor is typing, the on-screen keyboard resizes the window; hold the scene still.
      if (document.activeElement?.id === 'ct-inp') return;
      if (p !== lastP) { drawDots(p); lastP = p; }
      letsRef.current.style.opacity = (1 - clamp((p - 0.12) / 0.3)).toFixed(3);
      const show = p >= 0.86;
      setShown(show);
      if (show && !started) { started = true; terminal.intro(); }
      // the nav pill follows the page while this stage is under it
      // (the dots fill from the top, so the area behind the pill is black by about 30%)
      setNavTheme(underPill ? (p > 0.3 ? 'dark' : 'light') : null, 'contact');
    };

    size();
    // a phone's URL bar or keyboard fires resize without changing the stage: nothing to rebuild then
    const onResize = () => { if (stage.clientWidth !== W || stage.clientHeight !== H) size(); };
    window.addEventListener('resize', onResize);
    const off = subscribeScroll(({ y, eased, vh }) => {
      const top = track.getBoundingClientRect().top + y;
      const max = track.offsetHeight - vh;
      apply(clamp((eased - top) / max), y > top - 40 && y < top + track.offsetHeight - 40);
    });
    return () => {
      off();
      window.removeEventListener('resize', onResize);
      terminal.destroy();
      setNavTheme(null, 'contact');
    };
  }, []);

  const copy = () => {
    const show = (t) => { setCopied(t); setTimeout(() => setCopied(''), 1800); };
    (navigator.clipboard ? navigator.clipboard.writeText(EMAIL) : Promise.reject()).then(() => show('Copied'), () => show('Copy failed'));
  };

  return (
    <section ref={trackRef} className="contact" aria-labelledby="contact-title">
      {/* Markers for the nav: the pale opening part, then the terminal part that #contact links land on. */}
      <div className="contact-mark contact-mark-intro" data-nav-theme="light" data-nav-id="contact" />
      <div id="contact" className="contact-mark contact-mark-terminal" data-nav-theme="dark" />

      <div ref={stageRef} className="contact-stage">
        <div ref={letsRef} className="contact-lets">
          <div>
            <p>06 / Contact</p>
            <h2 id="contact-title">Let&rsquo;s talk.</h2>
          </div>
        </div>
        <canvas ref={canvasRef} className="contact-dots" aria-hidden="true" />
        <div className={shown ? 'ct-win is-on' : 'ct-win'} role="region" aria-label="contact.sh terminal" inert={shown ? undefined : ''}>
          <div className="ct-bar"><i aria-hidden="true" /><span>contact.sh</span></div>
          <div ref={bodyRef} className="ct-body" aria-live="polite" />
          {/* phones: commands you can tap instead of typing */}
          <div className="ct-chips">
            {['message', 'help', 'resume', 'projects', 'email'].map((c) => (
              <button key={c} type="button" className="ct-chip" onClick={() => terminalRef.current?.runCommand(c)}>{c}</button>
            ))}
          </div>
        </div>
        <div className={shown && ready ? 'ct-acts is-on' : 'ct-acts'} inert={shown && ready ? undefined : ''}>
          <a className="ct-btn is-primary" href={`mailto:${EMAIL}`}>Open mail client</a>
          <button className="ct-btn" type="button" onClick={copy}>{copied || 'Copy email'}</button>
        </div>
        <Axolotl active={ready} visible={shown && ready} />
      </div>
    </section>
  );
}
