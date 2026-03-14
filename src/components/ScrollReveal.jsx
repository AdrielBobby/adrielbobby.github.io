// ScrollReveal.jsx — A reusable wrapper that animates any child element
// when it scrolls into the viewport. We use this across all sections.

// Import motion and useInView from framer-motion.
// 'motion' lets us animate HTML elements.
// 'useInView' watches whether an element is visible on screen.
import { motion, useInView } from 'framer-motion';

// useRef creates a "reference" to a DOM element so we can watch it.
import { useRef } from 'react';

// Props explanation:
// children   → whatever JSX is wrapped inside <ScrollReveal>...</ScrollReveal>
// direction  → which direction the element slides in from: 'up', 'down', 'left', 'right'
// delay      → how many seconds to wait before starting the animation (used for stagger)
// duration   → how long the animation takes in seconds
export default function ScrollReveal({ children, direction = 'up', delay = 0, duration = 0.6 }) {

  // useRef() creates a reference we attach to the wrapper div below.
  // This lets useInView "watch" the exact DOM element.
  const ref = useRef(null);

  // useInView returns true when the element enters the screen.
  // once: true → animate only the first time (not every time you scroll past it).
  // margin: '-80px' → triggers slightly before the element fully enters view,
  //   so the animation is already playing when your eyes land on it.
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // 'variants' define two named animation states: 'hidden' and 'visible'.
  // Framer Motion transitions between these based on the 'animate' prop below.
  const variants = {
    // 'hidden' is the starting state — invisible and shifted in the chosen direction.
    hidden: {
      opacity: 0,    // fully transparent
      // y controls vertical position. Positive y = moved DOWN. Negative = moved UP.
      // If direction is 'up', we start 50px below the final position.
      // If direction is 'down', we start 50px above.
      // Otherwise y stays at 0 (no vertical shift).
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      // x controls horizontal position.
      // If direction is 'left', we start 50px to the RIGHT (slides in from right).
      // If direction is 'right', we start 50px to the LEFT (slides in from left).
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    // 'visible' is the end state — fully visible, back in normal position.
    visible: {
      opacity: 1,  // fully visible
      y: 0,        // back to original vertical position
      x: 0,        // back to original horizontal position
      transition: {
        duration,        // how long the animation takes (passed as prop)
        delay,           // how long to wait before starting (used for stagger effect)
        ease: 'easeOut', // the animation curve — starts fast, slows down at the end
      },
    },
  };

  return (
    // motion.div is just a regular <div> with animation superpowers from Framer Motion.
    // ref={ref} attaches our reference so useInView can watch this element.
    // variants={variants} gives it our two states defined above.
    // initial="hidden" → start in the 'hidden' state.
    // animate → switch to 'visible' when isInView is true, otherwise stay 'hidden'.
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {/* children renders whatever was placed between the opening and closing tags */}
      {children}
    </motion.div>
  );
}
