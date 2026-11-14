import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects, otherProjects } from '../../data/projects.js';
import './projects.css';

// Projects: the four featured projects as large rows, then the other projects
// as a tile grid. The page takes on the tint and accent of the row in view.
export default function Projects() {
  const sectionRef = useRef(null);

  // The row crossing the middle of the window sets data-project on the
  // section, which swaps the tint and accent (tokens.css). Outside the rows
  // the section keeps the site's pale grey and green.
  useEffect(() => {
    const section = sectionRef.current;
    const rows = [...section.querySelectorAll('[data-row]')];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) section.dataset.project = e.target.dataset.row;
          else if (section.dataset.project === e.target.dataset.row) delete section.dataset.project;
        });
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="projects surface surface-light" data-nav-theme="light" aria-labelledby="projects-title">
      <div className="wrap">
        <header className="projects-head">
          <p className="projects-tag">03 / Projects</p>
          <h2 id="projects-title" className="projects-big">Four builds I would show first.</h2>
        </header>

        {projects.map((p, i) => (
          <article key={p.slug} className="project-row" data-row={p.slug} aria-labelledby={`${p.slug}-name`}>
            <div>
              <p className="project-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</p>
              <h3 id={`${p.slug}-name`} className="project-name">{p.name}</h3>
              <p className="project-summary">{p.summary}</p>
              <ul className="project-meta">
                {p.meta.map((m) => <li key={m}>{m}</li>)}
              </ul>
              <Link className="project-open" to={`/projects/${p.slug}`}>
                Open case file<span className="visually-hidden">: {p.name}</span> <span className="project-arrow" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className={p.media.length > 1 ? 'project-media is-pair' : 'project-media'}>
              {/* Placeholders until Adriel's pictures arrive. */}
              {p.media.map((m) => (
                <div key={m.kind} className={`project-ph project-ph-${m.kind}`} role="img" aria-label={`Placeholder. ${m.label}`}>
                  <span aria-hidden="true">{m.label}</span>
                </div>
              ))}
            </div>
          </article>
        ))}

        <section className="others" aria-labelledby="others-title">
          <p className="projects-tag">Other projects</p>
          <h2 id="others-title" className="others-big">Smaller builds and experiments.</h2>
          <ul className="others-grid">
            {otherProjects.map((t) => (
              <li key={t.name} className="tile">
                <h3 className="tile-name">
                  {t.url ? (
                    <a href={t.url} target="_blank" rel="noopener noreferrer">
                      {t.name}
                      <span className="tile-arrow" aria-hidden="true">&#8599;</span>
                      <span className="visually-hidden"> (GitHub, opens in a new tab)</span>
                    </a>
                  ) : t.name}
                </h3>
                <p className="tile-text">{t.text}</p>
                <ul className="tile-chips" aria-label="Built with">
                  {t.stack.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
