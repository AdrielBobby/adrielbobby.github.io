// The axolotl easter egg, ported from docs/axolotl-sketch.html.
// Its head peeks over the bottom edge with a "psst psst" bubble; a click makes
// it climb up and lift a poster. All motion is drawn by render(t), t in ms.
import { MOUTH, TONGUE, EYE_LEFT, EYE_RIGHT, TICKS } from '../opening/paths.js';

const NS = 'http://www.w3.org/2000/svg';
const INK = '#0f1211';
const clamp = (t) => Math.max(0, Math.min(1, t));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => { t = clamp(t); return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
const back = (t) => { t = clamp(t); const c1 = 1.9, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };
const mk = (tag, attrs, parent) => {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(e);
  return e;
};

// timeline (ms): two hands grab the edge, pulls haul the body up, then the poster rises with the hands
const PULL = [[700, 1300], [1700, 2300], [2700, 3300], [3700, 4300]];
const BY = [345, 250, 160, 70, 0];
const END = 5100;
const WIG = 5900;
const PEEK = 1300;
const bodyY = (t) => {
  let v = BY[0];
  PULL.forEach(([a, b], i) => { if (t >= b) v = BY[i + 1]; else if (t >= a) v = lerp(BY[i], BY[i + 1], ease((t - a) / (b - a))); });
  return v;
};
const hop = (t, a, b) => -26 * Math.sin(Math.PI * clamp((t - a) / (b - a)));

// two-bone arm: shoulder S, hand target H, elbow bends outward
function ik(S, H, side) {
  const L1 = 82, L2 = 82;
  let dx = H[0] - S[0], dy = H[1] - S[1], d = Math.hypot(dx, dy), hx = H[0], hy = H[1];
  const maxd = L1 + L2 - 0.5;
  if (d > maxd) { hx = S[0] + (dx / d) * maxd; hy = S[1] + (dy / d) * maxd; d = maxd; dx = hx - S[0]; dy = hy - S[1]; }
  if (d < 1) d = 1;
  const ux = dx / d, uy = dy / d, a = (L1 * L1 - L2 * L2 + d * d) / (2 * d), h = Math.sqrt(Math.max(0, L1 * L1 - a * a));
  let nx = -uy, ny = ux;
  if (nx * side < 0) { nx = -nx; ny = -ny; }
  return { e: [S[0] + ux * a + nx * h, S[1] + uy * a + ny * h], h: [hx, hy] };
}

export function createAxolotl(root, { reduce }) {
  const q = (name) => root.querySelector(`[data-ax="${name}"]`);
  const body = q('body'), face = q('face'), arms = q('arms'), hands = q('hands');
  const posterWrap = q('posterwrap'), poster = q('poster'), peek = q('peek'), bubble = q('bubble');
  [face, arms, hands, q('gillsL'), q('gillsR')].forEach((g) => g.replaceChildren());

  // face = the kv logo (the opening's brush strokes), ink on the green head, mint tongue
  q('tongueclip').setAttribute('d', TONGUE);
  [EYE_LEFT, EYE_RIGHT, MOUTH].forEach((d) => mk('path', { d, fill: INK }, face));
  mk('path', { d: TONGUE, fill: INK, stroke: INK, 'stroke-width': 30, 'stroke-linejoin': 'round' }, face);
  const lg = mk('g', { 'clip-path': 'url(#axo-tonguec)' }, face);
  mk('rect', { x: 380, y: 380, width: 260, height: 260, fill: 'url(#axo-tgf)' }, lg);
  TICKS.forEach((d) => mk('path', { d, fill: INK }, face));

  // gills: three feathery stalks on each side
  const gills = (sgn) => {
    const g = q(sgn > 0 ? 'gillsR' : 'gillsL');
    [[56, 166, 14, 108, 'g1'], [52, 196, 6, 174, 'g2'], [58, 226, 16, 242, 'g3']].forEach(([bx, by, tx, ty, cls]) => {
      const x0 = 170 + sgn * (170 - bx), x1 = 170 + sgn * (170 - tx);
      const gr = mk('g', { class: `axo-gill axo-${cls}`, style: `transform-origin:${x0}px ${by}px` }, g);
      mk('path', { d: `M${x0} ${by} Q${(x0 + x1) / 2} ${(by + ty) / 2 - 20} ${x1} ${ty}`, fill: 'none', stroke: '#9fe0c3', 'stroke-width': 10, 'stroke-linecap': 'round' }, gr);
      for (let k = 1; k <= 5; k++) {
        const t = k / 6, px = lerp(x0, x1, t), py = lerp(by, ty, t) - Math.sin(t * 3.14) * 10;
        mk('path', { d: `M${px} ${py} l${sgn * -10} ${-12}`, stroke: '#9fe0c3', 'stroke-width': 5, 'stroke-linecap': 'round' }, gr);
        mk('path', { d: `M${px} ${py} l${sgn * -12} ${10}`, stroke: '#9fe0c3', 'stroke-width': 5, 'stroke-linecap': 'round' }, gr);
      }
      mk('circle', { cx: x1, cy: ty, r: 8.5, fill: '#d6f6e8' }, gr);
    });
  };
  gills(-1);
  gills(1);

  const armAttrs = { fill: 'none', stroke: '#4fb08a', 'stroke-width': 32, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };
  const armL = mk('path', armAttrs, arms);
  const armR = mk('path', armAttrs, arms);
  const hand = () => {
    const g = mk('g', {}, hands);
    mk('ellipse', { cx: 0, cy: 0, rx: 20, ry: 16, fill: '#7ad0ac' }, g);
    [[-12, -13], [0, -18], [12, -13]].forEach(([x, y]) => mk('circle', { cx: x, cy: y, r: 7, fill: '#7ad0ac' }, g));
    return g;
  };
  const handL = hand(), handR = hand();

  function render(t, bob = 0) {
    const by = bodyY(t) + bob;
    let sx = 1, sy = 1;
    PULL.forEach(([a, b]) => {
      if (t >= a && t < b) { const k = Math.sin((Math.PI * (t - a)) / (b - a)); sy = 1 + 0.05 * k; sx = 1 - 0.03 * k; }
      else if (t >= b && t < b + 260) { const k = Math.sin((Math.PI * (t - b)) / 260) * (1 - (t - b) / 260); sy = 1 - 0.07 * k; sx = 1 + 0.05 * k; }
    });
    const wig = t > END && t < WIG ? Math.sin(((t - END) / (WIG - END)) * Math.PI * 3) * 4 * (1 - (t - END) / (WIG - END)) : 0;
    body.setAttribute('transform', `translate(0 ${by.toFixed(1)}) translate(170 330) rotate(${wig.toFixed(2)}) scale(${sx.toFixed(3)} ${sy.toFixed(3)}) translate(-170 -330)`);
    const gripL = [50, 302], gripR = [290, 302], edgeL = [66, 438], edgeR = [274, 438];
    const reveal = (a, b) => lerp(485, 0, ease((t - a) / (b - a)));
    let lt = [edgeL[0], edgeL[1] + (t < 400 ? reveal(0, 350) : 0) + hop(t, 1300, 1500) + hop(t, 2300, 2500) + hop(t, 3300, 3500)];
    let rt = [edgeR[0], edgeR[1] + (t < 700 ? reveal(250, 600) : 0) + hop(t, 1500, 1700) + hop(t, 2500, 2700) + hop(t, 3500, 3700)];
    if (t < 350) lt[1] = 438 + lerp(46, 0, ease(t / 350)); else if (t < 400) lt[1] = 438;
    if (t < 250) rt[1] = 438 + 46; else if (t < 600) rt[1] = 438 + lerp(46, 0, ease((t - 250) / 350));
    if (t < 1300 && t >= 600) rt[1] = 438;
    const up = ease((t - 4400) / 800), upb = back((t - 4400) / 800);
    lt = [lerp(lt[0], gripL[0], upb), lerp(lt[1], gripL[1], upb)];
    rt = [lerp(rt[0], gripR[0], upb), lerp(rt[1], gripR[1], upb)];
    const SL = [116, 318 + by], SR = [224, 318 + by];
    const a = ik(SL, lt, -1), b = ik(SR, rt, 1);
    armL.setAttribute('d', `M${SL[0]} ${SL[1]} L${a.e[0].toFixed(1)} ${a.e[1].toFixed(1)} L${a.h[0].toFixed(1)} ${a.h[1].toFixed(1)}`);
    armR.setAttribute('d', `M${SR[0]} ${SR[1]} L${b.e[0].toFixed(1)} ${b.e[1].toFixed(1)} L${b.h[0].toFixed(1)} ${b.h[1].toFixed(1)}`);
    handL.setAttribute('transform', `translate(${a.h[0].toFixed(1)} ${a.h[1].toFixed(1)})`);
    handR.setAttribute('transform', `translate(${b.h[0].toFixed(1)} ${b.h[1].toFixed(1)})`);
    // the poster travels with the hands
    posterWrap.setAttribute('transform', `translate(0 ${(lt[1] - 302 + 42 * (1 - up)).toFixed(1)}) rotate(${(wig * 0.5).toFixed(2)} 170 330)`);
  }

  let raf = 0, phase = 'idle', tStart = 0, tPeek = 0, tClimb = 0;
  const setPhase = (p) => {
    phase = p;
    root.classList.toggle('is-peek', p === 'peek');
    root.classList.toggle('is-done', p === 'done');
    root.classList.toggle('is-alive', (p === 'peek' || p === 'done') && !reduce); // gills sway while it waits
    peek.setAttribute('tabindex', p === 'peek' ? '0' : '-1');
    poster.setAttribute('tabindex', p === 'done' ? '0' : '-1');
  };
  const setBubble = (sc) => {
    bubble.style.opacity = sc > 0.01 ? 1 : 0;
    bubble.setAttribute('transform', `translate(168 354) scale(${Math.max(0.001, sc).toFixed(3)}) translate(-168 -354)`);
  };
  function loop(now) {
    if (phase === 'enter') {
      const t = now - tStart;
      render(Math.min(t, PEEK));
      if (t >= PEEK) { setPhase('peek'); tPeek = now; }
    } else if (phase === 'peek') {
      const k = now - tPeek;
      setBubble(back(k / 450) * (1 + 0.03 * Math.sin(k / 380)));
      render(PEEK, Math.sin(k / 650) * 3);
    } else if (phase === 'climb') {
      const el = now - tClimb;
      setBubble(1 - clamp(el / 180));
      render(Math.min(PEEK + el, WIG));
      if (PEEK + el >= WIG) { setPhase('done'); poster.focus({ preventScroll: true }); }
    }
    if (phase === 'enter' || phase === 'climb' || (phase === 'peek' && !reduce)) raf = requestAnimationFrame(loop);
  }
  function play() {
    if (phase !== 'idle') return;
    if (reduce) { render(PEEK); setBubble(1); setPhase('peek'); return; } // head and bubble sit still
    phase = 'enter';
    tStart = performance.now();
    raf = requestAnimationFrame(loop);
  }
  function startClimb() {
    if (phase !== 'peek') return;
    cancelAnimationFrame(raf);
    if (reduce) { setBubble(0); render(WIG); setPhase('done'); poster.focus({ preventScroll: true }); return; } // straight to the poster
    setPhase('climb');
    tClimb = performance.now();
    raf = requestAnimationFrame(loop);
  }
  const onPeekKey = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); startClimb(); } };
  peek.addEventListener('click', startClimb);
  peek.addEventListener('keydown', onPeekKey);
  render(0);
  setBubble(0);
  setPhase('idle');

  return {
    play,
    destroy: () => {
      cancelAnimationFrame(raf);
      peek.removeEventListener('click', startClimb);
      peek.removeEventListener('keydown', onPeekKey);
    },
  };
}
