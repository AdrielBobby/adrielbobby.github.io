// The opening drawing, ported from docs/hero-sketch.html. It builds the SVG
// once and returns render(p), where p runs from 0 (the kv tile) to 1 (the
// finished face logo on pale grey). Nothing here knows about scrolling.
import { MOUTH, TONGUE, EYE_LEFT, EYE_RIGHT, TICKS, KV_LETTERS } from './paths.js';

const NS = 'http://www.w3.org/2000/svg';
const INK = '#0f1211';
const LIGHT = '#e7e9e6';
const GREEN = '#4fb08a';
const FG_ON_GREEN = '#0f1211';
const FG_ON_LIGHT = '#2a312e';
const W = 943;
const H = 708;

const clamp = (t) => Math.max(0, Math.min(1, t));
const ease = (t) => { t = clamp(t); return t * t * (3 - 2 * t); };
const seg = (p, a, b) => ease((p - a) / (b - a));
const lerp = (a, b, t) => a + (b - a) * t;
const lerpPts = (A, B, t) => A.map((q, i) => [lerp(q[0], B[i][0], t), lerp(q[1], B[i][1], t)]);
const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const lerpColor = (a, b, t) => {
  const A = rgb(a);
  const B = rgb(b);
  return '#' + A.map((v, i) => Math.round(lerp(v, B[i], t)).toString(16).padStart(2, '0')).join('');
};
const pts = (a) => a.map((q) => q[0].toFixed(1) + ',' + q[1].toFixed(1)).join(' ');
const plen = (a) => {
  let L = 0;
  for (let i = 1; i < a.length; i++) L += Math.hypot(a[i][0] - a[i - 1][0], a[i][1] - a[i - 1][1]);
  return L;
};
// The build keeps its original pacing, squeezed so the face is finished by 0.80.
const m = (x) => (x <= 0.26 ? x : 0.22 + (x - 0.26) * 0.8406);

function resample(a, N) {
  const L = [0];
  for (let i = 1; i < a.length; i++) L.push(L[i - 1] + Math.hypot(a[i][0] - a[i - 1][0], a[i][1] - a[i - 1][1]));
  const out = [];
  for (let k = 0; k < N; k++) {
    const d = (L[L.length - 1] * k) / (N - 1);
    let i = 1;
    while (i < L.length - 1 && L[i] < d) i++;
    const t = (d - L[i - 1]) / (L[i] - L[i - 1] || 1);
    out.push([lerp(a[i - 1][0], a[i][0], t), lerp(a[i - 1][1], a[i][1], t)]);
  }
  return out;
}

// ---- geometry (viewBox 943 x 708) ----
const cx = 471;
const cy = 354;
const T = 190; // half the tile's width
const n = T * 0.2;
const tilePts = [[cx - T + n, cy - T], [cx + T - n, cy - T], [cx + T, cy - T + n], [cx + T, cy + T - n], [cx + T - n, cy + T], [cx - T + n, cy + T], [cx - T, cy + T - n], [cx - T, cy - T + n]];
const kStem = [[400, 300], [400, 430]];
const kHalf0 = [[452, 322], [400, 375], [452, 428]];
const kMirror0 = [[348, 322], [400, 375], [348, 428]];
const V0 = [[490, 330], [505, 377], [520, 425], [535, 377], [550, 330]];
const uPts = () => {
  const o = [[445, 425], [445, 515]];
  for (let i = 1; i <= 3; i++) { const a = Math.PI * (1 - i / 4); o.push([515 + 70 * Math.cos(a), 515 + 70 * Math.sin(a)]); }
  o.push([585, 515]); o.push([585, 425]);
  return o;
};
const NPT = 24;
const VS = resample(V0, NPT);
const US = resample(uPts(), NPT);
const half = (c, dir, r = 98) => [[c[0] + dir * r, c[1] - r], [c[0], c[1]], [c[0] + dir * r, c[1] + r]];
const eyeLRight = half([208, 164], +1);
const eyeLLeft = half([208, 164], -1);
const eyeRRight = half([774, 153], +1);
const eyeRLeft = half([774, 153], -1);
const lidA = [330, 400];
const lidB = [690, 400];
const mouthU = (() => {
  const o = [[408, 392], [408, 531]];
  for (let i = 1; i <= 11; i++) { const a = Math.PI * (1 - i / 12); o.push([507 + 99 * Math.cos(a), 531 + 99 * Math.sin(a)]); }
  o.push([606, 531]); o.push([606, 392]);
  return o;
})();
const LIQUID = { green: ['#e3f8ee', '#a8e6cf'], light: ['#5fb897', '#2c6b53'] };
const FX0 = 400;
const FX1 = 630;
const FBOT = 720;
function liquid(yTop, amp, phase) {
  let d = `M${FX0},${FBOT}`;
  for (let x = FX0; x <= FX1; x += 3) d += ` L${x},${(yTop + amp * Math.sin(x * 0.05 + phase)).toFixed(1)}`;
  return d + ` L${FX1},${FBOT} Z`;
}

let uid = 0;

export function createOpening(svg) {
  const id = `op${uid++}`; // keeps mask ids unique if the scene mounts twice (React strict mode)
  svg.replaceChildren();
  const el = (tag, attrs, parent) => {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    (parent || svg).appendChild(e);
    return e;
  };

  // masks that paint the brush strokes on
  const defs = el('defs', {});
  const mkMask = (name, polys, width) => {
    const mk = el('mask', { id: `${id}-${name}`, maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: W, height: H }, defs);
    return polys.map((pl) => {
      const len = plen(pl);
      const e = el('polyline', { points: pts(pl), fill: 'none', stroke: '#fff', 'stroke-width': width, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-dasharray': len, 'stroke-dashoffset': len }, mk);
      return { e, len };
    });
  };
  const mEyeL = mkMask('eyeL', [[[78, 30], [340, 300]], [[340, 30], [78, 300]]], 95);
  const mEyeR = mkMask('eyeR', [[[650, 30], [900, 278]], [[900, 30], [650, 278]]], 95);
  const mMouth = mkMask('mouth', [[[300, 396], [705, 396]], mouthU], 85);
  const setDraw = (masks, i, k) => masks[i].e.setAttribute('stroke-dashoffset', (masks[i].len * (1 - k)).toFixed(1));

  // tongue liquid gradient: its colours change with the page
  const grad = el('linearGradient', { id: `${id}-tongue`, x1: 423, y1: 399, x2: 604, y2: 608, gradientUnits: 'userSpaceOnUse' }, defs);
  const stop0 = el('stop', { offset: 0, 'stop-color': LIQUID.green[0] }, grad);
  const stop1 = el('stop', { offset: 1, 'stop-color': LIQUID.green[1] }, grad);
  const clip = el('clipPath', { id: `${id}-clip` }, defs);
  el('path', { d: TONGUE }, clip);

  const tile = el('polygon', { points: pts(tilePts), fill: GREEN });
  const kv = el('path', { d: KV_LETTERS, fill: INK });
  const line = (extra) => Object.assign({ fill: 'none', 'stroke-width': 26, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, extra || {});
  const gLines = el('g', {});
  const eKStem = el('polyline', line({ stroke: INK, points: pts(kStem) }), gLines);
  const eKHalf = el('polyline', line({ stroke: INK }), gLines);
  const eMirror = el('polyline', line({ stroke: INK, opacity: 0 }), gLines);
  const eV = el('polyline', line({ stroke: INK }), gLines);
  const eRR = el('polyline', line({ stroke: INK, opacity: 0 }), gLines);
  const eRL = el('polyline', line({ stroke: INK, opacity: 0 }), gLines);
  const eLid = el('path', line({ stroke: INK, d: `M${lidA} L${lidB}` }), gLines);
  const lidLen = Math.hypot(lidB[0] - lidA[0], lidB[1] - lidA[1]);
  eLid.setAttribute('stroke-dasharray', lidLen);
  eLid.setAttribute('stroke-dashoffset', lidLen);

  // the brush artwork, one palette that follows the page
  const gB = el('g', { opacity: 0 });
  const bEye0 = el('path', { d: EYE_LEFT, mask: `url(#${id}-eyeL)` }, gB);
  const bEye1 = el('path', { d: EYE_RIGHT, mask: `url(#${id}-eyeR)` }, gB);
  const bMouth = el('path', { d: MOUTH, mask: `url(#${id}-mouth)` }, gB);
  const bFiller = el('path', { d: TONGUE, 'stroke-width': 30, 'stroke-linejoin': 'round', opacity: 0 }, gB);
  const lg = el('g', { 'clip-path': `url(#${id}-clip)` }, gB);
  const liqB = el('path', { fill: `url(#${id}-tongue)`, opacity: 0.55 }, lg);
  const liqF = el('path', { fill: `url(#${id}-tongue)` }, lg);
  const ticks = TICKS.map((d) => el('path', { d, opacity: 0 }, gB));

  let coverScale = 5;
  function measure() {
    const unit = svg.getBoundingClientRect().width / W;
    if (unit > 0) coverScale = (Math.hypot(window.innerWidth, window.innerHeight) / (2 * T * unit)) * 1.15;
  }
  measure();

  // Returns the page colour and the ink colour for this moment, so the scene
  // around the drawing (background, skip link, nav) can follow.
  // intro runs 0 to 1 on load: first green kv letters on black, then the tile blooms
  // behind them and the letters turn black. It is 1 whenever the intro is not playing.
  function render(p, intro = 1) {
    // 1. the green tile grows until it is the whole page
    const grow = seg(p, 0.06, 0.22);
    const sc = lerp(1, coverScale, grow * grow);
    const bloom = seg(intro, 0.3, 1);
    tile.setAttribute('transform', `translate(${cx} ${cy}) scale(${(sc * lerp(0.4, 1, bloom)).toFixed(4)}) translate(${-cx} ${-cy})`);
    tile.setAttribute('opacity', p < 0.24 ? bloom : 0);
    // 2. page colour: dark, then green once the tile covers it, then pale grey
    const toLight = seg(p, 0.82, 0.95);
    const bg = p < 0.22 ? INK : lerpColor(GREEN, LIGHT, toLight);
    const fg = lerpColor(FG_ON_GREEN, FG_ON_LIGHT, toLight);
    // 3. k becomes an eye, v becomes the tongue, the second eye splits off
    [eKStem, eKHalf, eMirror, eV, eRR, eRL, eLid].forEach((e) => e.setAttribute('stroke', fg));
    const swap = seg(p, 0.19, 0.234); // the serif kv hands over to the stroke letters
    kv.setAttribute('opacity', 1 - swap);
    kv.setAttribute('fill', lerpColor(GREEN, fg, seg(intro, 0.4, 0.85)));
    gLines.setAttribute('opacity', swap);
    eKStem.setAttribute('opacity', 1 - seg(p, m(0.18), m(0.32)));
    const kt = seg(p, m(0.28), m(0.56));
    eKHalf.setAttribute('points', pts(lerpPts(kHalf0, eyeLRight, kt)));
    eMirror.setAttribute('opacity', seg(p, m(0.28), m(0.36)));
    eMirror.setAttribute('points', pts(lerpPts(kMirror0, eyeLLeft, kt)));
    eV.setAttribute('points', pts(lerpPts(VS, US, seg(p, m(0.30), m(0.62)))));
    const rt = seg(p, m(0.44), m(0.70));
    eRR.setAttribute('opacity', seg(p, m(0.44), m(0.50)));
    eRL.setAttribute('opacity', seg(p, m(0.44), m(0.50)));
    eRR.setAttribute('points', pts(lerpPts(eyeLRight, eyeRRight, rt)));
    eRL.setAttribute('points', pts(lerpPts(eyeLLeft, eyeRLeft, rt)));
    eLid.setAttribute('stroke-dashoffset', lidLen * (1 - seg(p, m(0.60), m(0.68))));
    // 4. the brush strokes paint on, eyes first, then the mouth; the line art fades out underneath
    setDraw(mEyeL, 0, seg(p, m(0.62), m(0.70)));
    setDraw(mEyeL, 1, seg(p, m(0.66), m(0.74)));
    setDraw(mEyeR, 0, seg(p, m(0.64), m(0.72)));
    setDraw(mEyeR, 1, seg(p, m(0.68), m(0.76)));
    setDraw(mMouth, 0, seg(p, m(0.70), m(0.76)));
    setDraw(mMouth, 1, seg(p, m(0.74), m(0.82)));
    const eyeLineFade = 1 - seg(p, m(0.72), m(0.80));
    if (p > m(0.5)) [eKHalf, eMirror, eRR, eRL].forEach((e) => e.setAttribute('opacity', eyeLineFade));
    else eKHalf.setAttribute('opacity', 1);
    const mouthLineFade = 1 - seg(p, m(0.80), m(0.86));
    eV.setAttribute('opacity', mouthLineFade);
    eLid.setAttribute('opacity', mouthLineFade);
    gB.setAttribute('opacity', seg(p, m(0.60), m(0.64)));
    [bEye0, bEye1, bMouth, bFiller].forEach((e) => e.setAttribute('fill', fg));
    bFiller.setAttribute('stroke', fg);
    ticks.forEach((t) => t.setAttribute('fill', fg));
    // 5. the tongue fills
    const fk = seg(p, m(0.80), m(0.90));
    const yTop = lerp(650, 388, fk);
    const amp = 8 * (1 - fk) + 1.2 * Math.sin(Math.PI * fk);
    const ph = p * 60;
    liqF.setAttribute('d', liquid(yTop, amp, ph));
    liqB.setAttribute('d', liquid(yTop - 8 * (1 - fk), amp * 1.2, ph * 0.8 + 2));
    bFiller.setAttribute('opacity', seg(p, m(0.76), m(0.82)));
    const tk = seg(p, m(0.90), m(0.95));
    ticks.forEach((t) => {
      t.setAttribute('opacity', tk);
      t.setAttribute('transform', `translate(${(1 - tk) * -14} ${(1 - tk) * -14})`);
    });
    // tongue colours follow the page: light mint on green, deeper green on pale grey
    stop0.setAttribute('stop-color', lerpColor(LIQUID.green[0], LIQUID.light[0], toLight));
    stop1.setAttribute('stop-color', lerpColor(LIQUID.green[1], LIQUID.light[1], toLight));
    return { bg, fg, toLight, onDark: p < 0.22 };
  }

  return { render, measure };
}
