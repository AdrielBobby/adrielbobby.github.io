// Contact.jsx — Terminal-themed contact card (contact.sh)
// Features: macOS-style topbar, monospace body, DecryptText on first lines,
// blinking cursor, copy-email button with 1.5s toast, spotlight glow card.

import { useState } from 'react';
import DecryptText from './DecryptText';

const EMAIL    = 'adrielbobby3@gmail.com';
const GITHUB   = 'https://github.com/AdrielBobby';
const LINKEDIN = 'https://linkedin.com/in/adrielbobby';
const TINKER   = 'https://tinkerhub.org/@adriel_bobby';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
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

            {/* Line 2 — status (DecryptText with a slight delay) */}
            <p className="ct-line">
              <span className="ct-prompt">&gt; </span>
              <DecryptText text="status:" speed={35} startDelay={600} />
              {' '}<span className="ct-online">online ●</span>
            </p>

            <div className="ct-spacer" />

            {/* Contact rows */}
            <p className="ct-line">
              <span className="ct-key">email    </span>
              <span className="ct-sep">: </span>
              <a href={`mailto:${EMAIL}`} className="ct-link">{EMAIL}</a>
            </p>

            <p className="ct-line">
              <span className="ct-key">github   </span>
              <span className="ct-sep">: </span>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="ct-link">
                github.com/AdrielBobby
              </a>
            </p>

            <p className="ct-line">
              <span className="ct-key">linkedin </span>
              <span className="ct-sep">: </span>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="ct-link">
                linkedin.com/in/adrielbobby
              </a>
            </p>

            <p className="ct-line">
              <span className="ct-key">tinkerhub</span>
              <span className="ct-sep">: </span>
              <a href={TINKER} target="_blank" rel="noopener noreferrer" className="ct-link">
                @adriel_bobby
              </a>
            </p>

            <div className="ct-spacer" />

            {/* Prompt line with blinking cursor */}
            <p className="ct-line">
              <span className="ct-prompt">&gt; </span>
              press [enter] to start a conversation
              <span className="cursor-blink"> ▮</span>
            </p>

          </div>
        </div>

        {/* ── Action buttons ── */}
        <div className="contact-actions">
          <a href={`mailto:${EMAIL}`} className="btn btn-primary">
            Open Mail Client
          </a>
          <button className="btn btn-ghost" onClick={copyEmail}>
            {copied ? 'copied! ✓' : 'Copy Email'}
          </button>
        </div>

      </div>
    </section>
  );
}
