// Hero.jsx — The first thing visitors see: your name, title, tagline, and call-to-action buttons.
// "Hero section" is a web design term for the large intro area at the top of a page.

export default function Hero() {
  return (
    // <section> is a semantic HTML5 element that groups related content.
    // 'id="hero"' gives this section a unique identifier so the Navbar's href="#hero"
    // can scroll directly here.
    // The CSS class "hero" applies the background color and padding from index.css.
    <section id="hero" className="hero">

      {/* .container centers the content and limits its width on wide screens. */}
      <div className="container">

        {/* This mimics a terminal command prompt — purely decorative/stylistic.
            &gt; is an HTML entity for the '>' character (it's escaped so the browser
            doesn't confuse it with an HTML tag). */}
        <p className="hero-prompt">C:\Users\Adriel&gt;</p>

        {/* <h1> is the most important heading on the page — there should only be one per page.
            Search engines give it the most weight for SEO.
            'clamp()' in the CSS makes the font size fluid between mobile and desktop. */}
        <h1 className="hero-name">Adriel Bobby</h1>

        {/* <p> is a paragraph tag. These aren't headings, just styled text blocks. */}
        <p className="hero-subtitle">Computer Science Engineer</p>

        {/* &apos; is the HTML entity for an apostrophe — safe to use inside JSX strings. */}
        <p className="hero-tagline">Breaking into cybersecurity one packet at a time.</p>

        {/* This div holds the two action buttons side-by-side (or stacked on mobile via CSS). */}
        <div className="hero-actions">

          {/* Clicking "View My Work" scrolls to the Projects section.
              The CSS classes 'btn' and 'btn-primary' together make it a solid blue button. */}
          <a href="#projects" className="btn btn-primary">View My Work</a>

          {/* Opens the resume PDF in a new tab.
              'btn-outline' gives it a border-only (outlined) style as a secondary button. */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
