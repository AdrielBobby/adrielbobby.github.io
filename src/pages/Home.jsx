import { useTitle } from '../useTitle.js';
import Opening from '../scenes/opening/Opening.jsx';
import Projects from '../scenes/projects/Projects.jsx';
import Skills from '../scenes/skills/Skills.jsx';
import Experience from '../scenes/experience/Experience.jsx';
import Contact from '../scenes/contact/Contact.jsx';
import KvTerminal, { openKv } from '../scenes/axolotl/KvTerminal.jsx';

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
        {/* The plain way into the easter egg, for keyboard and screen-reader users. */}
        <p className="kv-hint"><button type="button" onClick={openKv}>psst, know what kv stands for?</button></p>
      </footer>
      <KvTerminal />
    </>
  );
}
