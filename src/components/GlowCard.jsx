// GlowCard.jsx — A wrapper that produces a cursor-tracking "spotlight" border glow.
//
// HOW IT WORKS:
//   1. onMouseMove tracks the cursor position relative to the card's bounding box.
//   2. It writes --mouse-x / --mouse-y as inline CSS custom properties.
//   3. CSS uses those vars in a radial-gradient on ::before, then masks it so
//      ONLY the 1px border ring is visible — not the card fill.
//   4. Result: only the strip of border nearest to your cursor glows.
//
// USAGE:
//   <GlowCard className="project-card">…content…</GlowCard>
//   (replaces <div className="base-card project-card">)
//
// ADVANCED: Pass as={motion.div} + Framer Motion props to combine animations.
//   <GlowCard as={motion.div} ref={ref} initial={...} animate={...} className="project-card">

import { useRef, useCallback, forwardRef } from 'react';

const GlowCard = forwardRef(function GlowCard(
  { className = '', children, style = {}, as: Tag = 'div', onMouseMove, onMouseLeave, ...props },
  forwardedRef
) {
  // Internal ref for CSS variable updates; forwardedRef is for the parent (e.g. Framer Motion).
  const internalRef = useRef(null);

  // Merge both refs into the element
  const setRef = (node) => {
    internalRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  const handleMouseMove = useCallback((e) => {
    const card = internalRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    onMouseMove?.(e); // forward original handler if any
  }, [onMouseMove]);

  const handleMouseLeave = useCallback((e) => {
    const card = internalRef.current;
    if (!card) return;
    // Push coords off-screen so the glow disappears
    card.style.setProperty('--mouse-x', '-9999px');
    card.style.setProperty('--mouse-y', '-9999px');
    onMouseLeave?.(e);
  }, [onMouseLeave]);

  return (
    <Tag
      ref={setRef}
      className={`base-card glow-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': '-9999px',
        '--mouse-y': '-9999px',
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
});

export default GlowCard;
