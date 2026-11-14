import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

// kv.sh: asks what kv stands for. A right answer opens the hidden page, as on
// the previous site. This is a soft gate for fun, not security: the answer is
// kept only as a SHA-256 hash, so it is not readable in the page source, and
// the hidden page does its own check of the kv_access flag.
const ANSWER_HASH = 'ce19de9db9462fa265c4c765848d7cea865709f5f16149e845e3d4afbd41fe28';
const KV_URL = 'https://adrielbobby.github.io/kv';

async function sha256(text) {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Anything on the page can open the terminal (the axolotl's poster, the footer link).
export const openKv = () => window.dispatchEvent(new Event('open-kv'));

export default function KvTerminal() {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState('input'); // input | success | fail
  const inputRef = useRef(null);
  const openerRef = useRef(null);
  const timerRef = useRef(0);

  useEffect(() => {
    const onOpen = () => {
      openerRef.current = document.activeElement;
      setPhase('input');
      // Render now and focus inside the tap itself: iOS only opens the keyboard for a focus that
      // happens in the same gesture, not one that waits for the next render.
      flushSync(() => setOpen(true));
      inputRef.current?.focus();
    };
    window.addEventListener('open-kv', onOpen);
    return () => { window.removeEventListener('open-kv', onOpen); clearTimeout(timerRef.current); };
  }, []);

  const close = () => {
    clearTimeout(timerRef.current);
    setOpen(false);
    openerRef.current?.focus?.({ preventScroll: true });
  };

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    // the page behind does not scroll while the dialog is open
    const html = document.documentElement;
    const was = html.style.overflow;
    html.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); html.style.overflow = was; };
  }, [open]);

  const submit = async (e) => {
    e.preventDefault();
    const guess = (inputRef.current?.value || '').trim().toLowerCase();
    if (!guess) return;
    let right = false;
    try { right = (await sha256(guess)) === ANSWER_HASH; } catch { right = false; }
    if (right) {
      setPhase('success');
      timerRef.current = setTimeout(() => {
        sessionStorage.setItem('kv_access', 'true');
        window.location.href = KV_URL;
      }, 1500);
    } else {
      setPhase('fail');
      timerRef.current = setTimeout(close, 1400);
    }
  };

  if (!open) return null;
  return (
    <>
      <div className="kv-back" onClick={close} />
      <div className="kv-win" role="dialog" aria-modal="true" aria-label="kv.sh: what does kv stand for?">
        <div className="kv-bar">
          <i aria-hidden="true" /><span>kv.sh</span>
          <button type="button" onClick={close} aria-label="Close">close</button>
        </div>
        <div className="kv-body" aria-live="polite">
          <p><span className="kv-pr">&gt;</span> what does kv stand for?</p>
          {phase === 'input' && (
            <form className="kv-input" onSubmit={submit} noValidate>
              <label className="kv-pr" htmlFor="kv-inp">&gt;</label>
              <input ref={inputRef} id="kv-inp" autoComplete="off" autoCapitalize="off" autoCorrect="off" spellCheck={false} aria-label="Your answer" enterKeyHint="go" />
            </form>
          )}
          {phase === 'success' && (<><p className="kv-ok">&gt; access granted.</p><p className="kv-ok">&gt; initializing hidden channel...</p><p className="kv-ok">&gt; redirecting...</p></>)}
          {phase === 'fail' && (<><p className="kv-no">&gt; access denied. nice try.</p><p className="kv-no">&gt; connection terminated.</p></>)}
        </div>
      </div>
    </>
  );
}
