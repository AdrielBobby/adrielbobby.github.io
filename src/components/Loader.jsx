import { useEffect, useRef } from 'react';

export default function Loader({ onDone }) {
  const typedRef = useRef(null);

  useEffect(() => {
    const TEXT = "kv";
    const TYPING_DELAY = 180; // Each character takes 180ms — deliberate and readable
    const START_DELAY = 400;  // Pause before typing — builds anticipation
    const ENTER_DELAY = 500;  // Pause after "kv" typed — let it land before dissolve

    const loaderEl = document.getElementById('loader');
    if (!loaderEl || !typedRef.current) return;

    let typeTimeouts = [];
    
    // SEQUENCE
    // Step 1: Type TEXT after START_DELAY
    const typeStartTimeout = setTimeout(() => {
      for (let i = 0; i < TEXT.length; i++) {
        const timeout = setTimeout(() => {
          if (typedRef.current) {
            // Wrap in span to trigger the CSS 'typing-fade' animation
            const charSpan = document.createElement('span');
            charSpan.textContent = TEXT[i];
            typedRef.current.appendChild(charSpan);
          }
        }, i * TYPING_DELAY);
        typeTimeouts.push(timeout);
      }

      // Step 2 & 3: Wait ENTER_DELAY after typing, then trigger morph and dissolve
      const totalTypeTime = (TEXT.length - 1) * TYPING_DELAY;
      const dissolveStartTimeout = setTimeout(() => {
        // Step 3: Call onDone() first — this adds hero-animate-in to #hero,
        // which triggers the .hero-ascii CSS scale transition (cursor → ASCII morph).
        // The ASCII block expands from scaleX(0.04) scaleY(0) over 350ms.
        onDone();

        // Step 4: Dissolve the loader 400ms later, while ASCII art is already
        // mid-expand — overlap prevents any black gap between states.
        const dissolveTimeout = setTimeout(() => {
          loaderEl.classList.add('dissolving');
        }, 400);
        typeTimeouts.push(dissolveTimeout);
        
      }, totalTypeTime + ENTER_DELAY);
      
      typeTimeouts.push(dissolveStartTimeout);
    }, START_DELAY);

    typeTimeouts.push(typeStartTimeout);

    return () => {
      typeTimeouts.forEach(clearTimeout);
    };
  }, [onDone]);

  return (
    <div id="loader">
      <div className="terminal-loader">
        <div className="terminal-line">
          <span className="prompt-path">C:\Users\Adriel&gt;</span>
          <span className="loader-typed-text" ref={typedRef}></span>
          <span className="loader-cursor">▋</span>
        </div>
      </div>
    </div>
  );
}
