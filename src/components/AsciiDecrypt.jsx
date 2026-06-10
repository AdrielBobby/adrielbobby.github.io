// AsciiDecrypt.jsx — Renders multi-line ASCII art with a decrypt-on-load
// animation and a hover glitch + glow effect.

import { useEffect, useState, useRef, useCallback } from 'react';

const CHARS = '!@#$%^&*<>{}[]|/\\~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// Scramble a single line — only non-space characters get randomised.
function scrambleLine(line) {
  return line
    .split('')
    .map(ch => (ch === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]))
    .join('');
}

// Scramble all lines.
function scrambleAll(lines) {
  return lines.map(scrambleLine);
}

// Partially reveal a line up to `revealedCount` characters (non-space only).
function partialReveal(original, revealedCount) {
  let revealed = 0;
  return original
    .split('')
    .map(ch => {
      if (ch === ' ') return ' ';
      revealed++;
      if (revealed <= revealedCount) return ch;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join('');
}

export default function AsciiDecrypt({
  lines,
  speed = 30,
  glitchDuration = 150,
  className = '',
  animate = true, // New prop
}) {
  // Throttle the decrypt animation on mobile to reduce main-thread pressure.
  const isMobile = typeof window !== 'undefined'
    && window.matchMedia('(max-width: 768px)').matches;

  const [display, setDisplay] = useState(() => scrambleAll(lines));
  const [decrypted, setDecrypted] = useState(false);
  const [glitching, setGlitching] = useState(false);
  const glitchTimer = useRef(null);

  // ── Decrypt when animate is true ────────────────────────────────────────────────────
  useEffect(() => {
    if (!animate || decrypted) return;

    // Skip animation entirely on 2G / data-saver devices
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowDevice = connection && (
      connection.effectiveType === '2g' || connection.saveData === true
    );
    if (isSlowDevice) {
      setDisplay([...lines]);
      setDecrypted(true);
      return;
    }

    const maxChars = Math.max(...lines.map(l => l.replace(/ /g, '').length));

    // On mobile use a slower effective speed — 3x the default
    const effectiveSpeed = isMobile ? Math.max(speed * 3, 80) : speed;

    let tick = 0;
    let rafId = null;
    let lastTime = null;

    // rAF syncs to display refresh rate and skips when browser is busy,
    // preventing the main-thread fighting that caused choppiness.
    const step = (timestamp) => {
      if (lastTime === null) lastTime = timestamp;
      const elapsed = timestamp - lastTime;

      if (elapsed >= effectiveSpeed) {
        lastTime = timestamp;
        tick++;

        // Only call setState every 2nd tick to halve React re-renders.
        // Visual quality is identical — scramble chars change fast enough.
        if (tick % 2 === 0 || tick >= maxChars) {
          setDisplay(lines.map(line => partialReveal(line, tick)));
        }

        if (tick >= maxChars) {
          setDisplay([...lines]); // snap to final correct state
          setDecrypted(true);
          return; // stop — do not request next frame
        }
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [animate, decrypted, lines, speed, isMobile]);

  // ── Hover glitch ──────────────────────────────────────────────────
  const handleMouseEnter = useCallback(() => {
    if (!decrypted) return; // don't glitch while still decrypting
    if (glitching) return;  // don't restart glitch if already flashing

    setGlitching(true);

    // Randomly swap ~30 % of characters
    setDisplay(
      lines.map(line =>
        line
          .split('')
          .map(ch => {
            if (ch === ' ') return ' ';
            return Math.random() < 0.3
              ? CHARS[Math.floor(Math.random() * CHARS.length)]
              : ch;
          })
          .join('')
      )
    );

    // Snap back after glitchDuration
    clearTimeout(glitchTimer.current);
    glitchTimer.current = setTimeout(() => {
      setDisplay([...lines]);
      setGlitching(false);
    }, glitchDuration);
  }, [decrypted, lines, glitchDuration, glitching]);

  const handleMouseLeave = useCallback(() => {
    if (!decrypted) return;
    clearTimeout(glitchTimer.current);
    setDisplay([...lines]);
    setGlitching(false);
  }, [decrypted, lines]);

  // Cleanup on unmount
  useEffect(() => () => clearTimeout(glitchTimer.current), []);

  return (
    <pre
      className={`ascii-art ${glitching ? 'glitching' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true" // decorative; the real <h1> is sr-only
    >
      {display.join('\n')}
    </pre>
  );
}
