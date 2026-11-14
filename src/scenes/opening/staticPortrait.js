// The symbol portrait drawn once, with no animation: used on phones, where the
// logo-to-symbols handoff is dropped. Same grid (portraitGrid.js) and symbols as the
// desktop portrait; the canvas is as wide as its parent and sharp at the screen's pixel ratio.
import { COLS, ROWS, DATA } from './portraitGrid.js';

const RAMP = ['', '.', ',', ':', '-', '+', '*'];
const CELL_RATIO = 1.6; // a symbol cell is 1.6 times taller than wide
const INK = '#0f1211';

export function drawStaticPortrait(canvas) {
  const W = canvas.parentElement.clientWidth;
  if (!W) return;
  const cw = W / COLS;
  const ch = cw * CELL_RATIO;
  const H = Math.round(ch * ROWS);
  const dpr = Math.min(window.devicePixelRatio || 1, 3);
  canvas.style.width = `${W}px`;
  canvas.style.height = `${H}px`;
  canvas.width = Math.round(W * dpr);
  canvas.height = Math.round(H * dpr);
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, W, H);
  ctx.font = `${Math.min(cw / 0.6, ch * 0.95).toFixed(2)}px "JetBrains Mono", monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = INK;
  ctx.globalAlpha = 0.95;
  for (let r = 0; r < ROWS; r++) {
    const row = DATA[r];
    for (let c = 0; c < COLS; c++) {
      const d = row.charCodeAt(c) - 48;
      if (d > 0) ctx.fillText(RAMP[d], (c + 0.5) * cw, (r + 0.5) * ch);
    }
  }
  ctx.globalAlpha = 1;
}
