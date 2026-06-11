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

      // Step 2 & 3: Wait ENTER_DELAY after typing, then animate cursor to center
      const totalTypeTime = (TEXT.length - 1) * TYPING_DELAY;
      const dissolveStartTimeout = setTimeout(() => {
        loaderEl.classList.add('dissolving');
        
        // Move the cursor to the center
        const cursorEl = document.querySelector('.loader-cursor');
        if (cursorEl) {
          const rect = cursorEl.getBoundingClientRect();
          const targetX = window.innerWidth / 2;
          const currentX = rect.left + rect.width / 2;
          cursorEl.style.transform = `translateX(${targetX - currentX}px)`;
        }

        // Wait for cursor to reach center, then unmount and reveal hero
        const doneTimeout = setTimeout(() => {
          onDone();
        }, 500);
        typeTimeouts.push(doneTimeout);
        
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
