import { useEffect, useRef } from 'react';
import { createAxolotl } from './axolotl.js';
import { openKv } from './KvTerminal.jsx';
import './axolotl.css';

// The easter egg: a green axolotl with the kv logo for a face. It appears in
// the corner of the Contact stage once the terminal has finished typing.
// `active` starts it; `visible` hides it while the terminal is off screen.
export default function Axolotl({ active, visible }) {
  const rootRef = useRef(null);
  const axRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    axRef.current = createAxolotl(rootRef.current, { reduce });
    return () => axRef.current.destroy();
  }, []);
  useEffect(() => {
    if (!active) return undefined;
    const t = setTimeout(() => axRef.current.play(), 900); // a beat after the terminal settles
    return () => clearTimeout(t);
  }, [active]);

  const onPosterKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openKv(); }
  };

  return (
    <div ref={rootRef} className={visible ? 'axo is-visible' : 'axo'} inert={visible ? undefined : ''}>
      <svg viewBox="-50 0 440 440" focusable="false">
        <defs>
          <clipPath id="axo-tonguec"><path data-ax="tongueclip" d="" /></clipPath>
          <linearGradient id="axo-tgf" x1="423" y1="399" x2="604" y2="608" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e3f8ee" /><stop offset="1" stopColor="#a8e6cf" />
          </linearGradient>
        </defs>
        <g data-ax="body" aria-hidden="true">
          <g data-ax="gillsL" /><g data-ax="gillsR" />
          <path d="M92 285 C78 335 70 430 68 530 L272 530 C270 430 262 335 248 285 Z" fill="#4fb08a" />
          <path d="M122 330 C118 380 118 450 120 530 L220 530 C222 450 222 380 218 330 C196 345 144 345 122 330 Z" fill="#8fd3b5" />
          <ellipse cx="170" cy="194" rx="122" ry="92" fill="#4fb08a" />
          <g fill="#3f9a76" opacity=".45">
            <circle cx="96" cy="150" r="5" /><circle cx="112" cy="128" r="3.5" /><circle cx="244" cy="152" r="5" /><circle cx="230" cy="126" r="3.5" />
            <circle cx="170" cy="112" r="4" /><circle cx="150" cy="118" r="2.8" /><circle cx="190" cy="118" r="2.8" />
          </g>
          <ellipse cx="100" cy="238" rx="21" ry="12" fill="#f4a6a6" opacity=".62" /><ellipse cx="240" cy="238" rx="21" ry="12" fill="#f4a6a6" opacity=".62" />
          <ellipse cx="118" cy="130" rx="30" ry="11" fill="#fff" opacity=".2" transform="rotate(-24 118 130)" />
          <g data-ax="face" transform="translate(170 194) scale(0.22) translate(-471 -354)" />
        </g>
        <g data-ax="arms" aria-hidden="true" />
        <g data-ax="posterwrap">
          <g data-ax="poster" className="axo-poster" role="button" tabIndex={-1} aria-label="Know what kv stands for? Click here to type." onClick={openKv} onKeyDown={onPosterKey}>
            <g className="axo-poster-inner" transform="rotate(-2 170 328)">
              <rect className="axo-poster-box" x="42" y="262" width="256" height="126" rx="6" fill="#e7e9e6" stroke="#0f1211" strokeWidth="2.5" />
              <text x="170" y="298" textAnchor="middle" fontFamily="'Young Serif',serif" fontSize="23" fill="#1b201e">know what kv</text>
              <text x="170" y="326" textAnchor="middle" fontFamily="'Young Serif',serif" fontSize="23" fill="#1b201e">stands for?</text>
              <text x="170" y="364" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="12.5" fontWeight="700" fill="#337058">click here to type &#9646;</text>
            </g>
          </g>
        </g>
        <g data-ax="hands" aria-hidden="true" />
        <g data-ax="peek" className="axo-peek" role="button" tabIndex={-1} aria-label="Psst. A small axolotl is peeking out. Press to see what it is holding.">
          <rect className="axo-ring" x="30" y="258" width="280" height="182" rx="14" fill="transparent" stroke="none" />
        </g>
        <g data-ax="bubble" className="axo-bubble" aria-hidden="true">
          <g className="axo-bubble-inner">
            <rect x="34" y="260" width="190" height="62" rx="31" fill="#e7e9e6" stroke="#0f1211" strokeWidth="2.5" />
            <polygon points="150,320 186,320 168,354" fill="#e7e9e6" />
            <path d="M150 321 L168 354 L186 321" fill="none" stroke="#0f1211" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
            <text x="129" y="300" textAnchor="middle" fontFamily="'Young Serif',serif" fontSize="25" fill="#1b201e">psst psst</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
