// Navbar.jsx — The navigation bar that sticks to the top of the page as you scroll.
// It shows your name on the left and anchor links on the right.

// Every React component file that uses JSX must import React (or at least have JSX transform support).
// With modern Vite + React 18, the import isn't strictly required but is a good habit.
export default function Navbar() {
  // This is JSX (JavaScript XML). It looks like HTML but it's actually JavaScript.
  // React transforms it into calls like React.createElement('nav', ...) under the hood.
  return (
    // <nav> is a semantic HTML element for navigation. It helps screen readers and SEO.
    // 'className' is used instead of 'class' because 'class' is a reserved word in JS.
    // These class names match the styles defined in index.css.
    <nav className="navbar" aria-label="Primary navigation">
      {/* 'aria-label' is an accessibility attribute — screen readers speak it aloud
          so visually impaired users know what this nav region is for. */}

      {/* .container is a CSS class in index.css that adds max-width and horizontal padding,
          keeping content from stretching too wide on large monitors. */}
      <div className="container">

        {/* Clicking the brand name scrolls to the top (#hero) of the page.
            href="#hero" is an anchor link — it scrolls in-page, not to another URL. */}
        <a href="#hero" className="navbar-brand">Adriel Bobby</a>

        {/* This div groups all the nav links together so they can be styled as a row.
            role="list" is another accessibility hint for screen readers. */}
        <div className="navbar-links" role="list">

          {/* Each anchor scrolls to the section with that matching id on the page.
              For example, href="#about" jumps to <section id="about"> in About.jsx. */}
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#projects">Projects</a>
          <a href="#hackathons">Hackathons</a>
          <a href="#leadership">Leadership</a>
          <a href="#contact">Contact</a>

          {/* This link opens the PDF resume in a new browser tab.
              target="_blank" opens in a new tab.
              rel="noopener noreferrer" is a security best practice when using target="_blank"
              — it prevents the new tab from having access to this window via JS. */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume-nav"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
