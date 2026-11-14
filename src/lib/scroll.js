import { useEffect, useRef } from 'react';

// The one scroll hook. Scenes subscribe and receive the real scroll position
// (y) and an eased one that glides after it (eased). The page itself scrolls
// natively; only the animations follow the eased value, so nothing is hijacked.
// With reduced motion the eased value equals the real one.
const EASE = 0.12; // share of the remaining distance covered per 60 fps frame
const subscribers = new Set();
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

let eased = window.scrollY;
let frame = 0;
let last = 0;

function tick(now) {
  frame = 0;
  const y = window.scrollY;
  const dt = last ? Math.min(now - last, 100) : 16.67;
  last = now;
  if (reduce.matches) eased = y;
  else eased += (y - eased) * (1 - Math.pow(1 - EASE, dt / 16.67));
  if (Math.abs(y - eased) < 0.1) eased = y;
  const state = { y, eased, vh: window.innerHeight, vw: window.innerWidth };
  subscribers.forEach((fn) => fn(state));
  if (eased !== y) frame = requestAnimationFrame(tick);
  else last = 0;
}

function wake() {
  if (!frame && subscribers.size) frame = requestAnimationFrame(tick);
}

window.addEventListener('scroll', wake, { passive: true });
window.addEventListener('resize', wake);

export function subscribeScroll(fn) {
  subscribers.add(fn);
  wake();
  return () => subscribers.delete(fn);
}

// Calls fn({ y, eased, vh, vw }) on every frame while the page is moving.
// Write to the DOM or a canvas inside fn; do not set React state there.
export function useScroll(fn) {
  const ref = useRef(fn);
  ref.current = fn;
  useEffect(() => subscribeScroll((s) => ref.current(s)), []);
}
