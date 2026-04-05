import { useEffect, useRef } from 'react';

export default function Loader({ onDone }) {
  const typedRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const TEXT = "kv";
    const TYPING_DELAY = 100; // Even faster typing (was 150)
    const START_DELAY = 250;
    const ENTER_DELAY = 250; // Shorter pause (was 300)

    const loaderEl = document.getElementById('loader');
    if (!loaderEl || !gridRef.current || !typedRef.current) return;

    // GRID SETUP
    const CELL = window.innerWidth <= 768 ? 20 : 14;
    const cols = Math.ceil(window.innerWidth / CELL);
    const rows = Math.ceil(window.innerHeight / CELL);
    
    loaderEl.style.setProperty('--grid-cols', cols);
    loaderEl.style.setProperty('--grid-rows', rows);

    // Generate grid cells
    const totalCells = cols * rows;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < totalCells; i++) {
      const span = document.createElement('span');
      // Spread dissolve over 600ms for high speed (was 800)
      const randomDelay = Math.random() * 600; 
      span.style.setProperty('--delay', `${randomDelay}ms`);
      fragment.appendChild(span);
    }
    gridRef.current.appendChild(fragment);

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

      // Step 2 & 3: Wait ENTER_DELAY after typing, then add "dissolving" class
      const totalTypeTime = (TEXT.length - 1) * TYPING_DELAY;
      const dissolveStartTimeout = setTimeout(() => {
        loaderEl.classList.add('dissolving');
        
        // Step 4: After total dissolve duration (600ms spread + 800ms base = 1400ms)
        const doneTimeout = setTimeout(() => {
          onDone();
        }, 1400);
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
      <div className="pixel-grid" ref={gridRef}></div>
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
