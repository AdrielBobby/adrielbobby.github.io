// EasterEgg.jsx — Hidden terminal popup triggered from the portfolio footer.
// Checks a secret password and redirects to adrielbobby.github.io/kv
// on correct entry. Uses sessionStorage as a soft access gate.

import { useState, useRef, useEffect } from 'react';

// ── Replace this string with the actual password ──────────────
const SECRET = 'kochuvarkey';
// ──────────────────────────────────────────────────────────────

const KV_URL = 'https://adrielbobby.github.io/kv';

export default function EasterEgg({ onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [lines, setLines]       = useState([]);
  const [phase, setPhase]       = useState('input');
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleSubmit = (e) => {
    if (e.key !== 'Enter') return;
    const guess = inputVal.trim().toLowerCase();
    setInputVal('');
    if (guess === SECRET.toLowerCase()) {
      setPhase('success');
      setLines([
        '> access granted.',
        '> initializing hidden channel...',
        '> redirecting...',
      ]);
      setTimeout(() => {
        sessionStorage.setItem('kv_access', 'true');
        window.location.href = KV_URL;
      }, 1500);
    } else {
      setPhase('fail');
      setLines([
        '> access denied. nice try.',
        '> connection terminated.',
      ]);
      setTimeout(() => onClose(), 1200);
    }
  };

  return (
    <>
      <div className="easter-backdrop" onClick={onClose} />
      <div className="easter-modal" role="dialog" aria-modal="true">
        <div className="easter-topbar">
          <span className="dot red" onClick={onClose} style={{ cursor: 'pointer' }} />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="easter-title">kv.sh</span>
        </div>
        <div className="easter-body">
          <p className="easter-line">
            <span className="ct-prompt">&gt;</span>{' '}what does kv stand for?
          </p>
          {lines.map((line, i) => (
            <p key={i} className={`easter-line ${phase === 'success' ? 'easter-success' : 'easter-fail'}`}>
              {line}
            </p>
          ))}
          {phase === 'input' && (
            <p className="easter-line easter-input-line">
              <span className="ct-prompt">&gt;</span>{' '}
              <input
                ref={inputRef}
                className="ct-inline-input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleSubmit}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="Enter the password"
                enterKeyHint="go"
              />
            </p>
          )}
        </div>
      </div>
    </>
  );
}
