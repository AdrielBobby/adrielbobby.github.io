import { useEffect, useRef } from 'react';
import { subscribeScroll } from '../../lib/scroll.js';
import './experience.css';

// Facts from the resume and the Cyberdome LinkedIn post (see docs/experience-sketch.html).
// Award dates aren't recorded, so their left column shows the prize instead.
const GROUPS = [
  {
    title: 'Experience',
    rows: [
      { when: 'Mar 2026 to present', title: 'Technical Coordinator', org: 'IEEE RSET Student Branch' },
      { when: 'May to Jun 2026', title: 'Cybersecurity Intern', org: 'Kerala Police Cyberdome', cap: 'A month of hands-on work: web flaws, an Android malware lab and network traffic analysis, on controlled vulnerable apps and PortSwigger labs.' },
      { when: 'Mar 2025 to Mar 2026', title: 'Electronic Communications Coordinator', org: 'IEEE RSET Student Branch' },
    ],
  },
  {
    title: 'Credentials',
    rows: [
      { when: 'May to Aug 2025', title: 'Certified Penetration Tester', org: 'RedTeam Academy', cap: 'Nmap, Burp Suite, Metasploit, privilege escalation and report writing.' },
    ],
  },
  {
    title: 'Awards',
    rows: [
      { when: 'Winner', title: 'Best Use of Gemma', org: 'Google Physical AI Hackathon, Onam Edition', cap: 'For Thaalam, the glove that teaches chenda rhythms.' },
      { when: '1st prize', title: 'KruizeX Ideathon', cap: 'A token-based boarding queue for Kochi Water Metro and feeder buses.' },
      { when: '3rd prize', title: 'VAWT Street Lamp', cap: 'A vertical-axis wind turbine powering an LED street lamp.' },
    ],
  },
  {
    title: 'Education',
    rows: [
      { when: '2024 to present', title: 'B.Tech, Computer Science and Engineering', org: 'RSET Kochi', cap: 'CGPA 8.' },
      { when: 'CBSE', title: 'Class 12', org: 'Rajagiri Public School, Kalamassery', cap: '8.9.' },
      { when: 'CBSE', title: 'Class 10', org: 'The Charter School, Pukattupady', cap: '8.9.' },
    ],
  },
];

// Experience: a sticky headline on the left, plain ruled rows on the right.

// ---- ripple: Skills dissolves into this scene as a ring of . , : - + * symbols ----
const CELL = 18; // px per symbol cell
const CHARS = ['.', ',', ':', '-', '+', '*'];
const LEVELS = 6; // alpha steps, so each (symbol, alpha) pair sets the fill style once
const clamp01 = (t) => Math.max(0, Math.min(1, t));
function hash(x, y) {
  let h = (x * 374761393 + y * 668265263) | 0;
  h = ((h ^ (h >> 13)) * 1274126177) | 0;
  return ((h ^ (h >> 16)) >>> 0) / 4294967295;
}
function noise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const l = (a, b, t) => a + (b - a) * t;
  return l(l(hash(xi, yi), hash(xi + 1, yi), u), l(hash(xi, yi + 1), hash(xi + 1, yi + 1), u), v);
}

// Each group's rows fade up once when the group is reached.
export default function Experience() {
  const listRef = useRef(null);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const groups = [...listRef.current.querySelectorAll('.ex-group')];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      groups.forEach((g) => g.classList.add('is-in'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      }),
      { threshold: 0.2 },
    );
    groups.forEach((g) => io.observe(g));
    return () => io.disconnect();
  }, []);

  // Skills becomes Experience through a ripple. A graphite cover (the same colour as the Skills
  // scene) sits over the top of this scene; scrolling clears it outward from a point as a ring of
  // . , : - + * symbols, revealing the pale page. Scrolling back up draws it in reverse.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dark = getComputedStyle(document.documentElement).getPropertyValue('--graphite-900').trim() || '#0f1211';
    let W = 0, H = 0, dpr = 1, lastP = -1;
    const size = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      lastP = -1;
    };
    const draw = (p) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = dark;
      if (p >= 1) return;
      if (p <= 0) { ctx.fillRect(0, 0, W, H); return; }
      const cols = Math.ceil(W / CELL), rows = Math.ceil(H / CELL);
      const ox = W * 0.5, oy = H * 0.58; // where the ripple starts
      const maxD = Math.hypot(Math.max(ox, W - ox), Math.max(oy, H - oy));
      const front = p * 1.4, band = 0.2;
      const buckets = new Map();
      ctx.beginPath();
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const cx = i * CELL + CELL / 2, cy = j * CELL + CELL / 2;
          const d = Math.hypot(cx - ox, cy - oy) / maxD + (noise(i * 0.22, j * 0.22) - 0.5) * 0.12;
          const s = (front - d) / band;
          if (s >= 1) continue; // the ripple has passed: clear
          if (s <= 0) { ctx.rect(i * CELL, j * CELL, CELL, CELL); continue; } // not reached yet: still graphite
          const a = 1 - s; // dense next to the graphite, thinning out behind
          const ci = Math.min(CHARS.length - 1, Math.floor(a * CHARS.length));
          const ai = Math.min(LEVELS - 1, Math.floor(a * LEVELS));
          const key = ci * LEVELS + ai;
          let list = buckets.get(key);
          if (!list) buckets.set(key, (list = []));
          list.push(cx, cy);
        }
      }
      ctx.fill();
      ctx.font = `15px "JetBrains Mono", monospace`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      buckets.forEach((list, key) => {
        ctx.globalAlpha = 0.3 + 0.7 * ((key % LEVELS) / (LEVELS - 1));
        const ch = CHARS[Math.floor(key / LEVELS)];
        for (let k = 0; k < list.length; k += 2) ctx.fillText(ch, list[k], list[k + 1]);
      });
      ctx.globalAlpha = 1;
    };
    size();
    const onResize = () => size();
    window.addEventListener('resize', onResize);
    const off = subscribeScroll(({ y, eased, vh }) => {
      const top = section.getBoundingClientRect().top + y - eased;
      const p = clamp01((vh * 0.95 - top) / (vh * 1.1));
      if (p === lastP) return;
      lastP = p;
      draw(p);
    });
    return () => { off(); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="experience surface surface-light" data-nav-theme="light" aria-labelledby="experience-title">
      <canvas ref={canvasRef} className="ex-ripple" aria-hidden="true" />
      <div className="wrap ex-inner">
        <div className="ex-side">
          <p className="ex-tag">05 / Experience</p>
          <h2 id="experience-title" className="ex-big">Where I&rsquo;ve worked and what I&rsquo;ve earned.</h2>
          <p className="ex-lede">Roles, certifications and awards, newest first.</p>
        </div>
        <div ref={listRef}>
          {GROUPS.map((g, gi) => (
            <section key={g.title} className="ex-group" aria-labelledby={`ex-${g.title}`}>
              {/* The first group's label would repeat the scene's own 05 / Experience tag, so it is kept for screen readers only. */}
              <h3 id={`ex-${g.title}`} className={gi === 0 ? 'visually-hidden' : undefined}>{g.title}</h3>
              <ol className="ex-rows">
                {g.rows.map((r, i) => (
                  <li key={r.title} className="ex-row" style={{ '--i': i }}>
                    <p className="ex-when">{r.when}</p>
                    <div>
                      <h4 className="ex-title">{r.title}</h4>
                      {r.org && <p className="ex-org">{r.org}</p>}
                      {r.cap && <p className="ex-cap">{r.cap}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
