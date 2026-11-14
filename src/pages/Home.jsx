import { useTitle } from '../useTitle.js';
import Opening from '../scenes/opening/Opening.jsx';
import Projects from '../scenes/projects/Projects.jsx';
import Skills from '../scenes/skills/Skills.jsx';
import Experience from '../scenes/experience/Experience.jsx';
import Contact from '../scenes/contact/Contact.jsx';

// The scroll site: opening and Who I am (one component), Projects, Skills,
// Experience, Contact, then the footer.
export default function Home() {
  useTitle('Adriel Bobby');
  return (
    <>
      <main id="main">
        <Opening />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="site-footer" data-nav-theme="dark" data-nav-id="contact">
        <p>
          Logos are from the Simple Icons set (CC0). All trademarks belong to their owners and are shown
          only to name tools I have used. The other icons are drawn for this site.
        </p>
      </footer>
    </>
  );
}
