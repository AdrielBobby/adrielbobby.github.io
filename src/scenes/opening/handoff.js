// The handoff into "Who I am", ported from docs/transition-sketch.html.
// The finished face logo breaks into . , : - + * symbols that sweep left to
// right and settle into the symbol portrait, while the text enters.
// render(z): z = 0 is the finished logo, z = 1 is the settled scene.
import { MOUTH, TONGUE, EYE_LEFT, EYE_RIGHT, TICKS } from './paths.js';
import { COLS, ROWS, DATA } from './portraitGrid.js';

const RAMP = ['', '.', ',', ':', '-', '+', '*'];
const CELL_RATIO = 1.6; // a symbol cell is 1.6 times taller than wide
const COLOURS = ['#2a312e', '#337058', '#0f1211']; // in flight, tongue, settled in the portrait
// The logo and the symbols trade places over this much of the handoff. It was
// 0.06, which read as a pop; this gives the eye time to follow.
const FADE = 0.12;
// Changing the canvas colour or transparency between symbols is what makes
// 14,000 of them slow to draw. So every symbol is put into one of 3 colours x
// 16 transparency steps, and each group is drawn with a single state change.
const ALPHA_STEPS = 16;
const MAX_ALPHA = 0.95;
const BUCKETS = COLOURS.length * ALPHA_STEPS;
const clamp = (t) => Math.max(0, Math.min(1, t));
const ease = (t) => { t = clamp(t); return t * t * (3 - 2 * t); };
const seg = (p, a, b) => ease((p - a) / (b - a));
const lerp = (a, b, t) => a + (b - a) * t;

export function createHandoff({ svg, stage, particles, halftone, portrait, tag, words, role, stats }) {
  const pcx = particles.getContext('2d');
  const hx = halftone.getContext('2d');
  let dpr = 1;
  let stageW = 0;
  let stageH = 0;
  let fontLogo = 8;
  let fontPortrait = 3;
  let N = 0;
  let A = null;
  let built = false;
  // per-frame scratch space, so drawing does not allocate
  let posX = null;
  let posY = null;
  let lvl = null; // which symbol (. , : - + *) each one shows this frame
  let bucket = null; // which colour and transparency step each symbol uses this frame
  let order = null; // symbol indexes grouped by bucket
  const counts = new Uint32Array(BUCKETS + 1);
  let lastZ = -1;
  let dirty = true;

  // Pair every portrait cell with a cell of the logo, both ordered left to right.
  function build() {
    const M = svg.getScreenCTM();
    if (!M || !M.a) return;
    const sr = stage.getBoundingClientRect();
    const x0 = M.e - sr.left;
    const y0 = M.f - sr.top;
    const wS = 943 * M.a;
    const hS = 708 * M.d;
    const LC = 150; // logo grid columns
    const cwS = wS / LC;
    const LR = Math.round(hS / (cwS * CELL_RATIO));
    const chS = hS / LR;
    // rasterise the finished logo (the same brush paths) to a small grid
    const big = document.createElement('canvas');
    big.width = LC * 4;
    big.height = LR * 4;
    const g = big.getContext('2d');
    g.scale((LC * 4) / 943, (LR * 4) / 708);
    const tongue = new Path2D(TONGUE);
    g.fillStyle = '#000';
    g.strokeStyle = '#000';
    g.lineJoin = 'round';
    g.lineWidth = 30;
    [MOUTH, EYE_LEFT, EYE_RIGHT].forEach((d) => g.fill(new Path2D(d)));
    g.fill(tongue);
    g.stroke(tongue);
    TICKS.forEach((d) => g.fill(new Path2D(d)));
    g.fillStyle = '#f00'; // the tongue is marked red so its symbols can be green
    g.fill(tongue);
    const small = document.createElement('canvas');
    small.width = LC;
    small.height = LR;
    const sg = small.getContext('2d');
    sg.imageSmoothingEnabled = true;
    sg.drawImage(big, 0, 0, LC, LR);
    const px = sg.getImageData(0, 0, LC, LR).data;
    const S = [];
    for (let j = 0; j < LR; j++) {
      for (let i = 0; i < LC; i++) {
        const k = (j * LC + i) * 4;
        const a = px[k + 3] / 255;
        if (a > 0.22) S.push([x0 + (i + 0.5) * cwS, y0 + (j + 0.5) * chS, Math.min(6, Math.ceil(a * 6)), px[k] > 128 && a > 0.5 ? 1 : 0]);
      }
    }
    // portrait target cells, in stage coordinates
    const pr = portrait.getBoundingClientRect();
    const cw = pr.width / COLS;
    const ch = pr.height / ROWS;
    const ox = pr.left - sr.left;
    const oy = pr.top - sr.top;
    const PL = [];
    for (let y = 0; y < ROWS; y++) {
      const row = DATA[y];
      for (let x = 0; x < COLS; x++) {
        const l = row.charCodeAt(x) - 48;
        if (l > 0) PL.push([ox + (x + 0.5) * cw, oy + (y + 0.5) * ch, l]);
      }
    }
    if (!S.length || !PL.length) return;
    S.sort((a, b) => a[0] - b[0]);
    PL.sort((a, b) => a[0] - b[0]);
    N = PL.length;
    A = {
      sx: new Float32Array(N), sy: new Float32Array(N), dx: new Float32Array(N), dy: new Float32Array(N),
      sl: new Uint8Array(N), dl: new Uint8Array(N), tg: new Uint8Array(N), dly: new Float32Array(N), arc: new Float32Array(N),
    };
    let seed = 11;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let k = 0; k < N; k++) {
      const s0 = S[Math.min(S.length - 1, Math.floor((k * S.length) / N))];
      const d0 = PL[k];
      A.sx[k] = s0[0]; A.sy[k] = s0[1]; A.sl[k] = s0[2]; A.tg[k] = s0[3];
      A.dx[k] = d0[0]; A.dy[k] = d0[1]; A.dl[k] = d0[2];
      A.dly[k] = 0.4 * (k / N) + 0.04 * rnd(); // left leaves first
      A.arc[k] = (rnd() - 0.5) * 140;
    }
    fontLogo = Math.min(cwS / 0.6, chS * 0.95);
    fontPortrait = Math.min(cw / 0.6, ch * 0.95);
    posX = new Float32Array(N);
    posY = new Float32Array(N);
    bucket = new Uint8Array(N);
    lvl = new Uint8Array(N);
    order = new Uint32Array(N);
    built = true;
    dirty = true;
  }

  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    stageW = stage.clientWidth;
    stageH = stage.clientHeight;
    particles.width = Math.round(stageW * dpr);
    particles.height = Math.round(stageH * dpr);
    const aspect = COLS / (ROWS * CELL_RATIO);
    portrait.style.maxWidth = `${window.innerHeight * 0.84 * aspect}px`;
    portrait.style.aspectRatio = `${COLS} / ${ROWS * CELL_RATIO}`;
    build();
  }

  function drawHalftone(p, fade) {
    const w = halftone.clientWidth;
    const h = halftone.clientHeight;
    const d = Math.min(window.devicePixelRatio || 1, 2);
    if (halftone.width !== Math.round(w * d) || halftone.height !== Math.round(h * d)) {
      halftone.width = Math.round(w * d);
      halftone.height = Math.round(h * d);
    }
    hx.setTransform(d, 0, 0, d, 0, 0);
    hx.clearRect(0, 0, w, h);
    if (fade <= 0) return;
    hx.fillStyle = `rgba(27,32,30,${(0.13 * fade).toFixed(3)})`;
    const sp = 22;
    const ph = p * 5;
    hx.beginPath(); // every dot goes into one path, so the canvas fills once
    for (let y = sp / 2; y < h; y += sp) {
      for (let x = sp / 2; x < w; x += sp) {
        const f = (Math.sin(x * 0.006 + ph) + Math.sin(y * 0.009 - ph * 0.8) + Math.sin((x + y) * 0.004 + ph * 0.5) + 3) / 6;
        const fd = Math.min(1, Math.max(0, (x / w - 0.02) * 2.2)) * 0.9 + 0.1;
        const rr = f * f * 4.4 * (0.35 + 0.65 * (x / w)) * fd;
        if (rr < 0.5) continue;
        hx.moveTo(x + rr, y);
        hx.arc(x, y, rr, 0, 6.2832);
      }
    }
    hx.fill();
  }

  // label, headline words rising out of their masks, role line, then the tiles
  function animText(z) {
    const up = (el, k, d) => {
      el.style.opacity = k.toFixed(3);
      el.style.transform = `translateY(${((1 - k) * d).toFixed(1)}px)`;
    };
    up(tag, seg(z, 0.44, 0.56), 10);
    words.forEach((w, i) => {
      const k = seg(z, 0.5 + i * 0.024, 0.5 + i * 0.024 + 0.13);
      w.style.transform = `translateY(${((1 - k) * 125).toFixed(1)}%)`; // 125%: fully below the mask, tall letters included
    });
    up(role, seg(z, 0.78, 0.9), 16);
    stats.forEach((e, i) => up(e, seg(z, 0.84 + i * 0.04, Math.min(0.96 + i * 0.04, 1)), 22));
  }

  function render(z) {
    // Nothing to redraw if the scroll has not moved the scene since last time.
    if (z === lastZ && !dirty) return;
    lastZ = z;
    dirty = false;
    svg.style.opacity = String(1 - seg(z, 0, FADE));
    animText(z);
    drawHalftone(z, seg(z, 0.5, 0.9));
    pcx.setTransform(dpr, 0, 0, dpr, 0, 0);
    pcx.clearRect(0, 0, stageW, stageH);
    if (!built || z <= 0) return;
    const v = clamp((z - 0.02) / 0.98);
    const a0 = seg(z, 0, FADE);

    // 1. work out where every symbol is and which group it belongs to
    counts.fill(0);
    for (let k = 0; k < N; k++) {
      const u = clamp((v - A.dly[k]) / 0.56);
      const e = 0.5 - 0.5 * Math.cos(Math.PI * u);
      let level;
      let alpha;
      let colour = A.tg[k]; // the tongue's symbols start green, the rest start ink
      if (u <= 0) { level = A.sl[k]; alpha = a0 * 0.8; }
      else if (u >= 1) { level = A.dl[k]; alpha = 0.6 + 0.07 * A.dl[k]; colour = 2; }
      else {
        level = Math.max(1, Math.round(A.sl[k] + (A.dl[k] - A.sl[k]) * e));
        alpha = 0.8 - 0.18 * u;
        if (u > 0.5) colour = 2;
      }
      const a = Math.round((Math.min(alpha, MAX_ALPHA) / MAX_ALPHA) * (ALPHA_STEPS - 1));
      if (!level || a === 0) { bucket[k] = 255; continue; }
      bucket[k] = colour * ALPHA_STEPS + a;
      lvl[k] = level;
      counts[bucket[k] + 1]++;
      posX[k] = A.sx[k] + (A.dx[k] - A.sx[k]) * e;
      posY[k] = A.sy[k] + (A.dy[k] - A.sy[k]) * e - Math.sin(Math.PI * u) * A.arc[k] * 0.6;
    }
    // 2. group them (a counting sort), tongue and ink first, settled ones last
    for (let b = 0; b < BUCKETS; b++) counts[b + 1] += counts[b];
    const start = counts.slice(0, BUCKETS);
    for (let k = 0; k < N; k++) if (bucket[k] !== 255) order[start[bucket[k]]++] = k;
    // 3. draw each group with one colour and one transparency
    pcx.font = `${lerp(fontLogo, fontPortrait, seg(v, 0.25, 0.85)).toFixed(2)}px "JetBrains Mono", monospace`;
    pcx.textAlign = 'center';
    pcx.textBaseline = 'middle';
    let i = 0;
    for (let b = 0; b < BUCKETS; b++) {
      const end = counts[b + 1];
      if (i === end) continue;
      pcx.fillStyle = COLOURS[Math.floor(b / ALPHA_STEPS)];
      pcx.globalAlpha = ((b % ALPHA_STEPS) / (ALPHA_STEPS - 1)) * MAX_ALPHA;
      for (; i < end; i++) {
        const k = order[i];
        pcx.fillText(RAMP[lvl[k]], posX[k], posY[k]);
      }
    }
    pcx.globalAlpha = 1;
  }

  return { size, render };
}
