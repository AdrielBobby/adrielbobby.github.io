import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects, otherProjects } from '../../data/projects.js';
import { subscribeScroll } from '../../lib/scroll.js';
import './projects.css';

const N = projects.length;
const clamp = (t) => Math.max(0, Math.min(1, t));

// Projects: the four featured projects as a pinned horizontal strip (scrolling
// down slides the cards sideways), then the other projects as a tile grid.
// The page takes on the tint and accent of the card in view.
export default function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const stripRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;
    const strip = stripRef.current;
    const bar = barRef.current;
    const slugs = projects.map((p) => p.slug);
    const setProject = (slug) => {
      if (slug) { if (section.dataset.project !== slug) section.dataset.project = slug; }
      else if (section.dataset.project) delete section.dataset.project;
    };

    // Reduced motion: no pinning, the cards stack and the one crossing the middle sets the tint.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) section.dataset.project = e.target.dataset.row;
          else if (section.dataset.project === e.target.dataset.row) delete section.dataset.project;
        }),
        { rootMargin: '-50% 0px -50% 0px' },
      );
      track.querySelectorAll('[data-row]').forEach((r) => io.observe(r));
      return () => io.disconnect();
    }

    // Tabbing to a card that is off screen scrolls the page to where that card is centred.
    const onFocus = (e) => {
      const row = e.target.closest('[data-row]');
      if (!row) return;
      const i = slugs.indexOf(row.dataset.row);
      const top = track.getBoundingClientRect().top + window.scrollY;
      const max = track.offsetHeight - window.innerHeight;
      const target = top + (max * i) / (N - 1);
      if (Math.abs(window.scrollY - target) > window.innerHeight * 0.2) window.scrollTo({ top: target });
    };
    strip.addEventListener('focusin', onFocus);

    let lastIdx = -2;
    const off = subscribeScroll(({ y, eased, vh }) => {
      const top = track.getBoundingClientRect().top + y;
      const max = track.offsetHeight - vh;
      const p = clamp((eased - top) / max);
      // Lead-in and lead-out: the strip slides in from the right while the stage rises into
      // place, and drifts off to the left as it lets go, so the page never switches
      // abruptly between scrolling down and sideways.
      const W = stage.clientWidth;
      const rectTop = top - eased;
      const into = clamp(1 - rectTop / vh);
      const out = clamp(1 - (rectTop + track.offsetHeight) / vh);
      const slide = (1 - into * into * (3 - 2 * into)) * 0.35 - out * out * (3 - 2 * out) * 0.35;
      strip.style.transform = `translate3d(${((-p * (N - 1) + slide) * W).toFixed(1)}px,0,0)`;
      bar.style.transform = `scaleX(${p.toFixed(4)})`;
      const mid = eased + vh * 0.5;
      const idx = mid > top && mid < top + track.offsetHeight ? Math.round(p * (N - 1)) : -1;
      if (idx !== lastIdx) { lastIdx = idx; setProject(idx >= 0 ? slugs[idx] : null); }
    });
    return () => { off(); strip.removeEventListener('focusin', onFocus); };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="projects surface surface-light" data-nav-theme="light" aria-labelledby="projects-title">
      <div className="wrap">
        <header className="projects-head">
          <p className="projects-tag">03 / Projects</p>
          <h2 id="projects-title" className="projects-big">Four builds I would show first.</h2>
        </header>
      </div>

      <div ref={trackRef} className="ph-track">
        {/* Anchors for /#project-slug: each sits where its card is centred in the strip. */}
        {projects.map((p, i) => (
          <div key={p.slug} id={`project-${p.slug}`} className="ph-mark" style={{ '--i': i, '--n': N }} />
        ))}
        <div ref={stageRef} className="ph-stage">
          <div ref={stripRef} className="ph-strip">
            {projects.map((p, i) => (
              <article key={p.slug} className="project-row" data-row={p.slug} aria-labelledby={`${p.slug}-name`}>
                <div className="wrap project-inner">
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
                    {p.media.map((m) => (
                      <img
                        key={m.kind}
                        className={`project-pic project-pic-${m.kind}`}
                        src={m.pic.src}
                        width={m.pic.w}
                        height={m.pic.h}
                        alt={m.pic.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="ph-progress" aria-hidden="true"><i ref={barRef} /></div>
        </div>
      </div>

      <div className="wrap">
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
