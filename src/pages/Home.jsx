import { useTitle } from '../useTitle.js';
import Opening from '../scenes/opening/Opening.jsx';
import Projects from '../scenes/projects/Projects.jsx';
import Skills from '../scenes/skills/Skills.jsx';
import Experience from '../scenes/experience/Experience.jsx';

// Built so far: the opening and Who I am (one component), Projects, Skills and Experience.
// Contact is still a scaffold placeholder.
const scenes = [
  { id: 'contact', surface: 'surface-black', label: '06 Contact', title: "Let's talk.", note: 'The dissolve and the contact.sh terminal go here.' },
];

export default function Home() {
  useTitle('Adriel Bobby');
  return (
    <main id="main">
      <Opening />
      <Projects />
      <Skills />
      <Experience />
      {scenes.map((s) => (
        <section key={s.id} id={s.id} className={`scene surface ${s.surface}`} data-nav-theme={s.surface === 'surface-light' ? 'light' : 'dark'} aria-labelledby={`${s.id}-title`}>
          <div className="wrap">
            <p className="label">{s.label}</p>
            <h2 id={`${s.id}-title`}>{s.title}</h2>
            {s.note && <p className="note">{s.note}</p>}
          </div>
        </section>
      ))}
    </main>
  );
}
