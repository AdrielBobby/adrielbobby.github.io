// Contact.jsx — Terminal-themed contact card (contact.sh)
// Features: macOS-style topbar, monospace body, DecryptText on first lines,
// blinking cursor, copy-email button with 1.5s toast, spotlight glow card.
// Interactive terminal form submits to Formspree — no backend needed.
import { useState, useRef, useEffect } from 'react';
import DecryptText from './DecryptText';

const EMAIL    = 'adrielbobby3@gmail.com';
const GITHUB   = 'https://github.com/AdrielBobby';
const LINKEDIN = 'https://linkedin.com/in/adrielbobby';
const TINKER   = 'https://tinkerhub.org/@adriel_bobby';
const FORMSPREE = 'https://formspree.io/f/mdavbvzg';

// The terminal form goes through these steps in order.
// 'idle'    — showing ">press [enter] to start a conversation"
// 'name'    — asking for the user's name
// 'message' — asking for the message
// 'sending' — POST to Formspree in progress
// 'done'    — success confirmation
// 'error'   — something went wrong
const STEPS = ['idle', 'name', 'message', 'sending', 'done', 'error'];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // Which step of the terminal form we're on
  const [step, setStep] = useState('idle');

  // Values collected from the user
  const [name, setName]       = useState('');
  const [message, setMessage] = useState('');

  // The current value in the active input field
  const [inputVal, setInputVal] = useState('');

  // Ref to auto-focus the hidden input whenever the form is active
  const inputRef = useRef(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  // Auto-focus the input whenever the step changes to an input step
  useEffect(() => {
    if (step === 'name' || step === 'message') {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [step]);

  // Called when the user presses Enter on the prompt line (idle state)
  const handlePromptEnter = (e) => {
    if (e.key === 'Enter') {
      setStep('name');
      setInputVal('');
    }
  };

  // Called on every keystroke in the active input
  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  // Called when user presses Enter to submit each field
  const handleFieldSubmit = async (e) => {
    if (e.key !== 'Enter') return;
    if (!inputVal.trim()) return; // don't allow empty submissions

    if (step === 'name') {
      setName(inputVal.trim());
      setInputVal('');
      setStep('message');
    } else if (step === 'message') {
      const finalMessage = inputVal.trim();
      setMessage(finalMessage);
      setInputVal('');
      setStep('sending');

      // Submit to Formspree
      try {
        const res = await fetch(FORMSPREE, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ name, message: finalMessage }),
        });
        if (res.ok) {
          setStep('done');
        } else {
          setStep('error');
        }
      } catch {
        setStep('error');
      }
    }
  };

  // Reset the form back to idle
  const handleReset = () => {
    setStep('idle');
    setName('');
    setMessage('');
    setInputVal('');
  };

  return (
    <section id="contact">
      <div className="container">

        <h2 className="section-title">Contact</h2>

        {/* ── Terminal card ── */}
        <div className="contact-terminal base-card">

          {/* macOS-style topbar */}
          <div className="contact-terminal-topbar">
            <span className="dot red"    />
            <span className="dot yellow" />
            <span className="dot green"  />
            <span className="contact-terminal-title">contact.sh</span>
          </div>

          {/* Terminal body */}
          <div className="contact-terminal-body">

            {/* Line 1 — command (DecryptText animates on scroll into view) */}
            <p className="ct-line">
              <span className="ct-prompt">&gt; </span>
              <DecryptText text="ping adriel" speed={35} />
            </p>

            {/* Line 2 — status */}
            <p className="ct-line">
              <span className="ct-prompt">&gt;</span>{' '}
              status: <span className="ct-online">online ●</span>
            </p>

            {/* Contact rows */}
            <p className="ct-line ct-row">
              <span className="ct-key">email</span>
              <span className="ct-sep">&nbsp;&nbsp;&nbsp;:</span>
              <a href={`mailto:${EMAIL}`} className="ct-val">{EMAIL}</a>
            </p>
            <p className="ct-line ct-row">
              <span className="ct-key">github</span>
              <span className="ct-sep">&nbsp;&nbsp;&nbsp;:</span>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="ct-val">github.com/AdrielBobby</a>
            </p>
            <p className="ct-line ct-row">
              <span className="ct-key">linkedin</span>
              <span className="ct-sep">&nbsp;:</span>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="ct-val">linkedin.com/in/adrielbobby</a>
            </p>
            <p className="ct-line ct-row">
              <span className="ct-key">tinkerhub</span>
              <span className="ct-sep">:</span>
              <a href={TINKER} target="_blank" rel="noopener noreferrer" className="ct-val">@adriel_bobby</a>
            </p>

            {/* ── Interactive terminal form ── */}

            {/* IDLE: prompt line — pressing Enter starts the form */}
            {step === 'idle' && (
              <p
                className="ct-line ct-prompt-line"
                tabIndex={0}
                onKeyDown={handlePromptEnter}
                onClick={() => inputRef.current?.focus()}
              >
                <span className="ct-prompt">&gt;</span>
                {' '}press [enter] to start a conversation
                <span className="ct-cursor">▮</span>
                {/* Hidden input captures Enter key when the line is focused */}
                <input
                  ref={inputRef}
                  className="ct-hidden-input"
                  onKeyDown={handlePromptEnter}
                  readOnly
                  aria-label="Press Enter to start conversation"
                />
              </p>
            )}

            {/* NAME step: show initializing message and name prompt */}
            {(step === 'name' || step === 'message' || step === 'sending' || step === 'done' || step === 'error') && (
              <p className="ct-line">
                <span className="ct-prompt">&gt;</span> initializing secure channel...
              </p>
            )}

            {/* Show completed name line once name is collected */}
            {(step === 'message' || step === 'sending' || step === 'done' || step === 'error') && (
              <p className="ct-line">
                <span className="ct-prompt">&gt;</span> enter your name:{' '}
                <span className="ct-val">{name}</span>
              </p>
            )}

            {/* NAME input line */}
            {step === 'name' && (
              <p className="ct-line ct-input-line">
                <span className="ct-prompt">&gt;</span> enter your name:{' '}
                <span className="ct-input-val">{inputVal}</span>
                <span className="ct-cursor">▮</span>
                <input
                  ref={inputRef}
                  className="ct-hidden-input"
                  value={inputVal}
                  onChange={handleInput}
                  onKeyDown={handleFieldSubmit}
                  autoComplete="off"
                  aria-label="Enter your name"
                />
              </p>
            )}

            {/* Show completed message line once sent */}
            {(step === 'sending' || step === 'done' || step === 'error') && (
              <p className="ct-line">
                <span className="ct-prompt">&gt;</span> enter your message:{' '}
                <span className="ct-val">{message}</span>
              </p>
            )}

            {/* MESSAGE input line */}
            {step === 'message' && (
              <p className="ct-line ct-input-line">
                <span className="ct-prompt">&gt;</span> enter your message:{' '}
                <span className="ct-input-val">{inputVal}</span>
                <span className="ct-cursor">▮</span>
                <input
                  ref={inputRef}
                  className="ct-hidden-input"
                  value={inputVal}
                  onChange={handleInput}
                  onKeyDown={handleFieldSubmit}
                  autoComplete="off"
                  aria-label="Enter your message"
                />
              </p>
            )}

            {/* SENDING state */}
            {step === 'sending' && (
              <p className="ct-line">
                <span className="ct-prompt">&gt;</span> sending...
                <span className="ct-cursor">▮</span>
              </p>
            )}

            {/* DONE state */}
            {step === 'done' && (
              <>
                <p className="ct-line ct-success">
                  <span className="ct-prompt">&gt;</span> message delivered ✓
                </p>
                <p className="ct-line ct-success">
                  <span className="ct-prompt">&gt;</span> connection closed.
                </p>
                <p
                  className="ct-line ct-reset"
                  tabIndex={0}
                  onClick={handleReset}
                  onKeyDown={(e) => e.key === 'Enter' && handleReset()}
                >
                  <span className="ct-prompt">&gt;</span> send another message?
                  <span className="ct-cursor">▮</span>
                </p>
              </>
            )}

            {/* ERROR state */}
            {step === 'error' && (
              <>
                <p className="ct-line ct-error">
                  <span className="ct-prompt">&gt;</span> transmission failed. try again.
                </p>
                <p
                  className="ct-line ct-reset"
                  tabIndex={0}
                  onClick={handleReset}
                  onKeyDown={(e) => e.key === 'Enter' && handleReset()}
                >
                  <span className="ct-prompt">&gt;</span> retry?
                  <span className="ct-cursor">▮</span>
                </p>
              </>
            )}

          </div>
        </div>

        {/* ── Action buttons — kept as fallback ── */}
        <div className="contact-actions">
          <a href={`mailto:${EMAIL}`} className="btn btn-primary">Open Mail Client</a>
          <button className="btn btn-secondary" onClick={copyEmail}>
            {copied ? 'copied! ✓' : 'Copy Email'}
          </button>
        </div>

      </div>
    </section>
  );
}
