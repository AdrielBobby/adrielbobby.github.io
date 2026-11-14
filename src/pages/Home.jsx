import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';
import { useTitle } from '../useTitle.js';

// Scaffold: the six scenes in order, on their surfaces. Each one is replaced by the real scene as it is built.
const scenes = [
  { id: 'opening', surface: 'surface-dark', label: '01 Opening', title: 'kv', note: 'The kv tile grows into the face logo here.' },
  { id: 'about', surface: 'surface-light', label: '02 Who I am', title: 'I build things end to end, then try to break them.', note: 'Cybersecurity and software student who builds things end to end.' },
  { id: 'projects', surface: 'surface-light', label: '03 Projects', title: 'Projects' },
  { id: 'skills', surface: 'surface-dark', label: '04 Skills', title: 'Skills', note: 'The six-branch skill tree goes here.' },
  { id: 'experience', surface: 'surface-light', label: '05 Experience', title: 'Experience', note: 'Experience, credentials, awards and education rows go here.' },
  { id: 'contact', surface: 'surface-black', label: '06 Contact', title: "Let's talk.", note: 'The dissolve and the contact.sh terminal go here.' },
];

export default function Home() {
  useTitle('Adriel Bobby');
  return (
    <main id="main">
      {scenes.map((s) => (
        <section key={s.id} id={s.id} className={`scene surface ${s.surface}`} aria-labelledby={`${s.id}-title`}>
          <div className="wrap">
            <p className="label">{s.label}</p>
            <h2 id={`${s.id}-title`}>{s.title}</h2>
            {s.note && <p className="note">{s.note}</p>}
            {s.id === 'projects' && (
              <p className="links">
                {projects.map((p) => (
                  <Link key={p.slug} to={`/projects/${p.slug}`}>{p.name}</Link>
                ))}
              </p>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
