// Loader.jsx — Fullscreen terminal-typing intro sequence.
//
// Renders a black overlay with a centered terminal prompt that types out
// the boot command character by character. When typing completes, waits
// POST_TYPING_WAIT ms, then simultaneously:
//   1. Calls onDone() so App can start the ripple + begin the unmount timer.
//   2. Adds the 'fading' class so the entire overlay transitions to opacity: 0,
//      revealing the PixelGrid ripple expanding beneath it.
//
// The overlay does NOT self-unmount — App.jsx controls that via a 400ms timer
// started in onDone, which matches the CSS fade duration exactly.

import { useEffect, useRef, useState } from 'react';

const COMMAND         = 'C:\\Users\\Adriel> load portfolio'; // 31 characters
const START_DELAY     = 300;  // ms before the first character appears
const CHAR_DELAY      = 50;   // ms per character  →  31 × 50 = 1550ms total typing
const POST_TYPING_WAIT = 300; // ms pause after last char before onDone fires

export default function Loader({ onDone }) {
  // typed: the portion of COMMAND currently visible on screen
  const [typed,   setTyped]   = useState('');
  // fading: true once onDone fires, triggers CSS opacity→0 transition on overlay
  const [fading,  setFading]  = useState(false);
  // cursorOn: drives the block-cursor blink (toggled independently of typing)
  const [cursorOn, setCursorOn] = useState(true);

  // Guard so onDone is never called more than once even if effect re-runs
  const doneFiredRef = useRef(false);

  // ── Typing sequence ──────────────────────────────────────────────────────────
  useEffect(() => {
    let charIndex  = 0;
    let typingId   = null;
    let postWaitId = null;

    const startTyping = () => {
      typingId = setInterval(() => {
        charIndex++;
        setTyped(COMMAND.slice(0, charIndex));

        if (charIndex >= COMMAND.length) {
          clearInterval(typingId);

          // Brief pause, then fire onDone and begin overlay fade simultaneously
          postWaitId = setTimeout(() => {
            if (!doneFiredRef.current) {
              doneFiredRef.current = true;
              setFading(true); // CSS fade starts here
              onDone();        // App starts ripple + 400ms unmount timer
            }
          }, POST_TYPING_WAIT);
        }
      }, CHAR_DELAY);
    };

    const startDelayId = setTimeout(startTyping, START_DELAY);

    return () => {
      clearTimeout(startDelayId);
      clearTimeout(postWaitId);
      clearInterval(typingId);
    };
  }, [onDone]);

  // ── Cursor blink (independent 530ms interval) ────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => setCursorOn(v => !v), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`loader-overlay${fading ? ' fading' : ''}`}
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="loader-terminal">
        {/* The prompt text, typed character by character */}
        <span className="loader-prompt">{typed}</span>
        {/* Block cursor — always rendered, opacity toggled by CSS class */}
        <span className={`loader-cursor${cursorOn ? ' visible' : ''}`}>█</span>
      </div>
    </div>
  );
}
