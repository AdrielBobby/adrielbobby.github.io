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
  if (target instanceof HTMLElement && target.tagName === 'A') {
    const href = target.getAttribute('href');
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

