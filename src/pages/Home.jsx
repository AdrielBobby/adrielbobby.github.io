import { useTitle } from '../useTitle.js';
import Opening from '../scenes/opening/Opening.jsx';
import Projects from '../scenes/projects/Projects.jsx';

// Built so far: the opening and Who I am (one component), and Projects.
// The other three scenes are still scaffold placeholders, each replaced as it is built.
const scenes = [
  { id: 'skills', surface: 'surface-dark', label: '04 Skills', title: 'Skills', note: 'The six-branch skill tree goes here.' },
  { id: 'experience', surface: 'surface-light', label: '05 Experience', title: 'Experience', note: 'Experience, credentials, awards and education rows go here.' },
  { id: 'contact', surface: 'surface-black', label: '06 Contact', title: "Let's talk.", note: 'The dissolve and the contact.sh terminal go here.' },
];

export default function Home() {
  useTitle('Adriel Bobby');
  return (
    <main id="main">
      <Opening />
      <Projects />
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
