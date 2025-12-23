// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Smooth scroll for same-page links
document.addEventListener('click', (e) => {
  const target = e.target;
  if (target instanceof HTMLElement) {
    const link = target.closest('a');
    if (link) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Close mobile menu if open
          if (links && links.classList.contains('show')) {
            links.classList.remove('show');
            toggle.setAttribute('aria-expanded', 'false');
          }
        }
      }
    }
  }
});

// Sliding Navbar Animation
const navLinksContainer = document.querySelector('.nav-links');
const navBackground = document.querySelector('.nav-background');
const navItems = document.querySelectorAll('.nav-links a');

if (navLinksContainer && navBackground && navItems.length > 0) {
  function moveBackground(element) {
    const rect = element.getBoundingClientRect();
    const containerRect = navLinksContainer.getBoundingClientRect();

    const left = rect.left - containerRect.left;
    const width = rect.width;

    navBackground.style.width = `${width}px`;
    navBackground.style.transform = `translateX(${left}px)`;
    navBackground.style.opacity = '1';
  }

  navItems.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
      moveBackground(e.target);
    });
  });

  navLinksContainer.addEventListener('mouseleave', () => {
    navBackground.style.opacity = '0';
  });
}

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

// Copy Email Functionality
const emailPill = document.getElementById('copyEmail');
if (emailPill) {
  emailPill.addEventListener('click', () => {
    const email = 'adrielbobby3@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const feedback = emailPill.querySelector('.copy-feedback');
      if (feedback) {
        feedback.classList.add('show');
        setTimeout(() => {
          feedback.classList.remove('show');
        }, 2000);
      }
    }).catch(err => {
      console.error('Failed to copy email:', err);
    });
  });

  // Add keyboard support
  emailPill.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      emailPill.click();
    }
  });
}

// Loading Screen Logic
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const typedTextSpan = document.querySelector('.typed-text');
  const cursorSpan = document.querySelector('.cursor');

  if (loader && typedTextSpan) {
    const textToType = "kv";
    const typingDelay = 200; // ms per char
    const startDelay = 500; // ms before typing starts
    const enterDelay = 300; // ms before "enter" effect

    // Function to type text
    function typeText(text, index) {
      if (index < text.length) {
        typedTextSpan.textContent += text.charAt(index);
        setTimeout(() => typeText(text, index + 1), typingDelay);
      } else {
        // Typing finished, simulate Enter
        setTimeout(() => {
          // Visual feedback for Enter
          if (cursorSpan) cursorSpan.style.animationDuration = '0.1s';

          // Trigger exit animation (Move to Navbar)
          setTimeout(() => {
            const navbarBrand = document.querySelector('.brand');

            if (navbarBrand) {
              // 1. Get positions
              const startRect = typedTextSpan.getBoundingClientRect();
              const endRect = navbarBrand.getBoundingClientRect();

              // 2. Calculate deltas
              const deltaX = endRect.left - startRect.left;
              const deltaY = endRect.top - startRect.top;

              // 3. Add exiting class to fade out other elements
              loader.classList.add('loader-exiting');

              // 4. Animate the text
              typedTextSpan.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
              typedTextSpan.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

              // 5. Cleanup after transition
              typedTextSpan.addEventListener('transitionend', () => {
                loader.remove();

                // Trigger hero reveal
                const heroSection = document.getElementById('home');
                if (heroSection) {
                  heroSection.classList.add('hero-animate-in');
                }
              }, { once: true });

            } else {
              // Fallback if navbar brand not found
              loader.classList.add('loader-hidden');
              setTimeout(() => loader.remove(), 500);
            }

          }, 500); // Short delay after "Enter"

        }, enterDelay);
      }
    }

    // Start sequence
    setTimeout(() => {
      typeText(textToType, 0);
    }, startDelay);
  }
});

// --- Custom Cursor & Spotlight Logic ---
document.addEventListener('DOMContentLoaded', () => {
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  const heroContainer = document.querySelector('.hero-ascii-container');
  const heroAscii = document.querySelector('.hero-ascii');
  const spotlightMask = document.querySelector('.spotlight-mask');

  // Only activate on desktop
  if (window.matchMedia("(min-width: 769px)").matches) {

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    // Track mouse position globally
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows immediately
      if (cursorDot) {
        cursorDot.style.top = `${mouseY}px`;
        cursorDot.style.left = `${mouseX}px`;
      }
    });

    // Decryption / Scramble Effect
    if (heroContainer && heroAscii) {
      // Robust extraction: Get text from spans if they exist (cleanest), or fallback to textContent
      // This avoids capturing raw HTML indentation which causes shifting
      const spans = heroAscii.querySelectorAll('.ascii-line');
      const originalText = spans.length > 0
        ? Array.from(spans).map(s => s.textContent).join('\n')
        : heroAscii.textContent;

      // Removed '—' (em-dash) as it often has different width/rendering issues
      const letters = "!<>-_\\/[]{}#________";
      let interval = null;

      heroContainer.addEventListener('mouseenter', () => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
          heroAscii.textContent = originalText
            .split("")
            .map((letter, index) => {
              if (letter.match(/\s/)) return letter; // Preserve spaces/newlines exactly!

              if (index < iteration) {
                return '#'; // Lock to filled char
              }

              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");

          if (iteration >= originalText.length) {
            clearInterval(interval);
            heroAscii.classList.add('decrypted'); // Add glow
          }

          // Speed of scramble
          iteration += 1 / 3;
        }, 10);
      });

      heroContainer.addEventListener('mouseleave', () => {
        clearInterval(interval);
        heroAscii.classList.remove('decrypted');
        // Restore structure immediately
        heroAscii.textContent = originalText;
      });
    }

    // Unified Animation Loop
    const animate = () => {
      // 1. Cursor Outline Physics
      if (cursorOutline) {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        cursorOutline.style.top = `${outlineY}px`;
        cursorOutline.style.left = `${outlineX}px`;
      }

      // 2. Spotlight Position (Performance Optimization)
      if (heroContainer) {
        const rect = heroContainer.getBoundingClientRect();
        // Calculate relative coordinates
        const relativeX = mouseX - rect.left;
        const relativeY = mouseY - rect.top;

        // Update CSS variables
        heroContainer.style.setProperty('--x', `${relativeX}px`);
        heroContainer.style.setProperty('--y', `${relativeY}px`);
      }

      requestAnimationFrame(animate);
    };
    animate();

    // Hover effects
    const interactables = document.querySelectorAll('a, button, .card, .email-pill, .social-icons a, .hero-ascii-container, .scan-card');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    // Click Animation (Lock-On)
    document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
    document.addEventListener('mouseup', () => document.body.classList.remove('cursor-click'));
  }
});
