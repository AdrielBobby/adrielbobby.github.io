// App.jsx — The root component of the entire portfolio.
// Think of it like the "blueprint" of your page: it decides what sections exist
// and in what order they appear, but doesn't contain the actual content itself.
// Each section is its own component imported from the components/ folder.

// Import each section component. The path './components/Navbar' means
// "look in the same folder as this file, inside the 'components' sub-folder".
// Vite automatically adds the '.jsx' extension so we don't need to write it.
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

// 'export default' means other files can import this component by any name they like.
// Here we define a function called App that returns JSX — the page structure.
// In React, every component is just a function that returns JSX.
export default function App() {
  const [loading, setLoading] = useState(true);
  const [heroReady, setHeroReady] = useState(false);

  // Restore <main> visibility after loader finishes.
  // We hide it in index.html to prevent a flash before React mounts.
  useEffect(() => {
    if (!loading) {
      const main = document.querySelector('main');
      if (main) main.style.visibility = 'visible';
    }
  }, [loading]);

  return (
    // The empty angle brackets <> </> are called a "Fragment".
    // React components must return a single root element, but we don't want
    // an extra unnecessary <div> wrapping everything — so we use a Fragment instead.
    <>
      {loading && <Loader onDone={() => { setLoading(false); setHeroReady(true); }} />}
      
      {/* <header> is a semantic HTML5 element that tells browsers (and screen readers)
          this area contains navigation / introductory content for the page. */}
      <header>
        {/* Render the Navbar component here. React will call the Navbar function
            and insert the returned JSX at this position. */}
        <Navbar />
      </header>

      {/* <main> is another semantic HTML5 element — it wraps the primary content of the page.
          Screen readers and Google use it to jump straight to the main content. */}
      <main>
        {/* Each component below maps to one visible section on the page.
            To reorder sections on the site, just move these lines around. */}
        <Hero animateIn={heroReady} />
        <About />
        <Education />
        <Certifications />
        <Experience />
        <Projects />
        <Hackathons />
        <Leadership />
        <Contact />
      </main>

      {/* Footer lives outside <main> because it's site-wide, not page-content. */}
      <Footer />
    </>
  );
}
