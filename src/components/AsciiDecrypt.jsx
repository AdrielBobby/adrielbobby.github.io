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
}) {
  const [display, setDisplay] = useState(() => scrambleAll(lines));
  const [decrypted, setDecrypted] = useState(false);
  const [glitching, setGlitching] = useState(false);
  const glitchTimer = useRef(null);

  // ── Decrypt on mount ──────────────────────────────────────────────
  useEffect(() => {
    // Find the maximum non-space character count across all lines.
    const maxChars = Math.max(
      ...lines.map(l => l.replace(/ /g, '').length)
    );

    let tick = 0;
    const interval = setInterval(() => {
      tick++;
      setDisplay(lines.map(line => partialReveal(line, tick)));
      if (tick >= maxChars) {
        clearInterval(interval);
        setDisplay([...lines]); // snap to correct
        setDecrypted(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []); // run once on mount

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
