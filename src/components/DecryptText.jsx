// DecryptText.jsx — Uses native IntersectionObserver instead of Framer Motion's
// useInView, which can be unreliable for small inline elements like headings.

import { useEffect, useRef, useState } from 'react';

const CHARS = '!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export default function DecryptText({ 
  text, 
  speed = 40, 
  startDelay = 0, 
  className = '', 
  style = {},
  animate = true // New prop to control when animation starts
}) {

  const [displayed, setDisplayed] = useState('');
  const [hasRun, setHasRun] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !animate) return; // Wait for animate to be true

    // IntersectionObserver watches when the element enters the viewport.
    // threshold: 0 means "fire as soon as even 1px is visible".
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting is true when the element is on screen
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);

          // Wait startDelay ms before beginning the decrypt animation
          setTimeout(() => {
            // Immediately show scrambled version
            setDisplayed(
              text.split('').map(char =>
                char === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]
              ).join('')
            );

            let iteration = 0;

            const interval = setInterval(() => {
              setDisplayed(
                text.split('').map((char, index) => {
                  if (char === ' ') return ' ';
                  if (index < iteration) return char;
                  return CHARS[Math.floor(Math.random() * CHARS.length)];
                }).join('')
              );

              iteration += 0.5;

              if (iteration >= text.length) {
                clearInterval(interval);
                setDisplayed(text); // snap to real text at the end
              }
            }, speed);
          }, startDelay);
        }
      },
      { threshold: 0 } // fire as soon as any part is visible
    );

    observer.observe(element); // start watching the element

    // Cleanup: stop observing when component unmounts
    return () => observer.disconnect();
  }, [text, speed, startDelay, animate, hasRun]); // Added animate to dependencies

  return (
    <span 
      ref={ref} 
      className={className} 
      style={{ fontFamily: 'monospace', ...style }}
    >
      {displayed || '\u00A0'}
    </span>
  );
}
