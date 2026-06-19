// Footer.jsx — A simple site-wide footer at the very bottom of the page.
// It shows a copyright line and nothing else — keeping things clean.

import { useState } from 'react';
import EasterEgg from './EasterEgg';

export default function Footer() {
  const [showEgg, setShowEgg] = useState(false);

  return (
    // <footer> is a semantic HTML5 element for the bottom-of-page content.
    // It mirrors <header> — both are recognized by browsers and screen readers
    // as structural landmarks of the page.
    <footer className="footer">

      {/* .container keeps the text centered within the same max-width as other sections,
          so it doesn't look misaligned on wide screens. */}
      <div className="container">

        {/* &copy; is the HTML entity for the © copyright symbol.
            You could also type © directly — both work the same in JSX.
            Update the year here whenever you want to refresh the copyright line. */}
        <p>&copy; 2026 Adriel Bobby</p>

        <p
          className="footer-psst"
          onClick={() => setShowEgg(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setShowEgg(true)}
        >
          psst — know what kv stands for?
        </p>
        {showEgg && <EasterEgg onClose={() => setShowEgg(false)} />}

      </div>
    </footer>
  );
}
