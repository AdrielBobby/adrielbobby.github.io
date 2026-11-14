import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects, findProject } from '../data/projects.js';
import { caseFiles } from '../data/caseFiles.js';
import { useTitle } from '../useTitle.js';
import NotFound from './NotFound.jsx';
import './caseFile.css';

const SECTIONS = [
  ['outcome', 'Outcome'],
  ['problem', 'The problem'],
  ['built', 'What was built'],
  ['mypart', 'My part'],
  ['decisions', 'Key decisions'],
  ['evidence', 'Evidence'],
  ['links', 'Links'],
];

function Para({ p }) {
  if (typeof p === 'string') return <p>{p}</p>;
  return <p><b>{p.lead}</b> {p.text}</p>;
}

function Picture({ pic, className, eager }) {
  return (
    <img
      className={`cf-pic ${className || ''}`}
      src={pic.src}
      width={pic.w}
      height={pic.h}
      alt={pic.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

// One case file: dark graphite with the project's accent. A sticky file card
// with contents on the left, the story on the right.
export default function CaseFile() {
  const { slug } = useParams();
  const project = findProject(slug);
  const file = caseFiles[slug];
  useTitle(project ? `${project.name} | Adriel Bobby` : 'Page not found | Adriel Bobby');
  const [current, setCurrent] = useState('outcome');
  const mainRef = useRef(null);

  // Scroll spy: the section crossing a line a third of the way down is current.
  useEffect(() => {
    if (!file) return undefined;
    setCurrent('outcome');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: '-32% 0px -67% 0px' },
    );
    mainRef.current.querySelectorAll('section[id]').forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [slug, file]);

  if (!project || !file) return <NotFound />;

  const index = projects.findIndex((p) => p.slug === slug);
  const number = String(index + 1).padStart(2, '0');
  const prev = projects[index - 1];
  const next = projects[index + 1];
  const head = (id, n) => <span className="cf-label">{String(n).padStart(2, '0')} / {SECTIONS.find((s) => s[0] === id)[1]}</span>;

  return (
    <main id="main" className="cf surface surface-dark" data-case={slug} data-nav-theme="dark">
      <div className="wrap">
        <header className="cf-hero">
          <p className="cf-stamp"><i aria-hidden="true" /> Case file {number} / {file.stamp}</p>
          <h1>{project.name}</h1>
          <p className="cf-sub">{file.sub}</p>
        </header>

        <div className="cf-layout">
          <aside className="cf-aside">
            <div className="cf-card">
              <p className="cf-card-head"><span>File {number}</span><span>{file.status}</span></p>
              <dl>
                {file.card.map(([k, v]) => (
                  <div key={k} className="cf-card-row"><dt>{k}</dt><dd>{v}</dd></div>
                ))}
                <div className="cf-card-row">
                  <dt>Stack</dt>
                  <dd><ul className="cf-tags">{file.stack.map((s) => <li key={s}>{s}</li>)}</ul></dd>
                </div>
              </dl>
            </div>
            <nav className="cf-toc" aria-label="On this page">
              {SECTIONS.map(([id, label]) => (
                <a key={id} href={`#${id}`} className={current === id ? 'is-on' : undefined} aria-current={current === id ? 'true' : undefined}>{label}</a>
              ))}
            </nav>
          </aside>

          <div ref={mainRef} className="cf-body">
            {/* Lead image at the top of the story; the sticky card beside it stays short enough to fit the window. */}
            <Picture pic={file.lead} className="cf-lead" eager />
            <section id="outcome">
              {head('outcome', 1)}
              <h2>{file.outcome.title}</h2>
              {file.outcome.stats && (
                <dl className="cf-outcome">
                  {file.outcome.stats.map(([n, l]) => <div key={l}><dt>{l}</dt><dd>{n}</dd></div>)}
                </dl>
              )}
              {file.outcome.paras?.map((p, i) => <Para key={i} p={p} />)}
            </section>

            <section id="problem">
              {head('problem', 2)}
              <h2>{file.problem.title}</h2>
              {file.problem.paras.map((p, i) => <Para key={i} p={p} />)}
            </section>

            <section id="built">
              {head('built', 3)}
              <h2>{file.built.title}</h2>
              {file.built.paras.map((p, i) => <Para key={i} p={p} />)}
              {file.built.flow && (
                <ol className="cf-flow">
                  {file.built.flow.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
                </ol>
              )}
            </section>

            <section id="mypart">
              {head('mypart', 4)}
              <h2>{file.mypart.title}</h2>
              {file.mypart.paras.map((p, i) => <Para key={i} p={p} />)}
            </section>

            <section id="decisions">
              {head('decisions', 5)}
              <h2>{file.decisions.title}</h2>
              <ol className="cf-decisions">
                {file.decisions.items.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
              </ol>
            </section>

            <section id="evidence">
              {head('evidence', 6)}
              <h2>What backs it up.</h2>
              <div className="cf-evidence">
                {file.evidence.items.map(([t, d]) => (
                  <div key={t} className="cf-ev"><h3>{t}</h3><p>{d}</p></div>
                ))}
              </div>
              <ul className="cf-gallery">
                {file.evidence.gallery.map(([pic, caption]) => (
                  <li key={caption}><figure><Picture pic={pic} /><figcaption>{caption}</figcaption></figure></li>
                ))}
              </ul>
            </section>

            <section id="links">
              {head('links', 7)}
              <h2>Look closer.</h2>
              {file.links.length > 0 ? (
                <p className="cf-links">
                  {file.links.map(([label, href, primary]) => (
                    <a key={label} className={primary ? 'cf-btn is-solid' : 'cf-btn'} href={href} target="_blank" rel="noopener noreferrer">
                      {label}<span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  ))}
                </p>
              ) : (
                <p>{file.privateNote}</p>
              )}
            </section>

            <nav className="cf-next" aria-label="Other case files">
              {prev ? <Link to={`/projects/${prev.slug}`}><span aria-hidden="true">&larr;</span> Previous: {prev.name}</Link> : <span />}
              {next ? <Link to={`/projects/${next.slug}`}>Next: {next.name} <span aria-hidden="true">&rarr;</span></Link> : <span />}
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
