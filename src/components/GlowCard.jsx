import { useRef, forwardRef } from 'react';
import './BorderGlow.css';

/**
 * GlowCard — Performance Fix Update
 * 
 * Removed the high-cost pointer-tracking JavaScript that updated CSS variables
 * on every pointermove event. The radial-gradient spotlight effect is replaced
 * with a simple, GPU-composited CSS transition for hover and focus states.
 */
const GlowCard = forwardRef(function GlowCard({
  children,
  className = '',
  style = {},
  as: Tag = 'div',
  
  // Forward traditional mouse events for Framer Motion or older usage
  onMouseMove,
  onMouseLeave,
  
  // Props kept for compatibility, though some visual features are now CSS-only
  glowColor = '258 84 66',
  backgroundColor = 'var(--color-surface, #050505)',
  borderRadius = 8,
  
  ...props
}, forwardedRef) {
  const internalRef = useRef(null);

  const setRef = (node) => {
    internalRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  return (
    <Tag
      ref={setRef}
      className={`base-card glow-card ${className}`}
      style={{
        '--card-bg': backgroundColor,
        '--border-radius': `${borderRadius}px`,
        ...style,
      }}
      {...props}
    >
      <div className="border-glow-inner">
        {children}
      </div>
    </Tag>
  );
});

export default GlowCard;
