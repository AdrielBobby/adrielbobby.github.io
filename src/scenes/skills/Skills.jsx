import { useEffect, useRef, useState } from 'react';
import { ICONS, BRANCHES } from '../../data/skills.js';
import './skills.css';

const TOTAL = BRANCHES.reduce((n, b) => n + b.clusters.reduce((m, c) => m + c.skills.length, 0), 0);
const countOf = (b) => b.clusters.reduce((m, c) => m + c.skills.length, 0);
const START = BRANCHES.findIndex((b) => b.name === 'Security');

function Icon({ skill }) {
  if (skill.icon) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="sk-logo">
        <path d={ICONS[skill.icon]} />
      </svg>
    );
  }
  // Custom glyph markup is fixed data from src/data/skills.js, not user input.
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="sk-glyph" dangerouslySetInnerHTML={{ __html: skill.glyph }} />;
}

// Skills: six branches as vertical tabs, the selected branch's clusters as
// icon tiles on branch lines. Selecting a tile says where the skill was used.
export default function Skills() {
  const sectionRef = useRef(null);
  const tabRefs = useRef([]);
  const [current, setCurrent] = useState(START >= 0 ? START : 0);
  const [picked, setPicked] = useState(null); // { branch, name }
  const [arrived, setArrived] = useState(false); // the arrival plays once
  const [replay, setReplay] = useState(0); // bumps on branch switch, for the quick replay

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) { setArrived(true); io.disconnect(); }
      },
      { threshold: 0.3 },
    );
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const choose = (i, focus) => {
    if (i === current) return;
    setCurrent(i);
    setReplay((r) => r + 1);
    if (focus) tabRefs.current[i]?.focus();
  };
  const onTabKey = (e) => {
    const last = BRANCHES.length - 1;
    const to = { ArrowDown: current + 1, ArrowUp: current - 1, Home: 0, End: last }[e.key];
    if (to === undefined) return;
    e.preventDefault();
    choose((to + BRANCHES.length) % BRANCHES.length, true);
  };

  const branch = BRANCHES[current];
  const chosen = picked && picked.branch === current
    ? branch.clusters.flatMap((c) => c.skills).find((s) => s.name === picked.name)
    : null;
  let index = 0;
  const panelClass = ['sk-panel', !arrived && 'is-waiting', arrived && 'is-entering', replay > 0 && 'is-fast'].filter(Boolean).join(' ');

  return (
    <section ref={sectionRef} id="skills" className="skills surface surface-dark" data-nav-theme="dark" aria-labelledby="skills-title">
      <div className="wrap">
        <p className="sk-tag">04 / Skills</p>
        <h2 id="skills-title" className="sk-big">What I build with.</h2>
        <p className="sk-legend">
          <span><i className="sk-key" aria-hidden="true" />learned to use</span>
          <span><i className="sk-key is-learning" aria-hidden="true" />learning now</span>
          <span>{TOTAL} skills in {BRANCHES.length} branches</span>
        </p>

        <div className="sk-layout">
          <div className="sk-rail" role="tablist" aria-orientation="vertical" aria-label="Skill branches">
            {BRANCHES.map((b, i) => (
              <button
                key={b.name}
                ref={(el) => { tabRefs.current[i] = el; }}
                type="button"
                role="tab"
                id={`sk-tab-${i}`}
                aria-selected={i === current}
                aria-controls="sk-panel"
                tabIndex={i === current ? 0 : -1}
                className="sk-tab"
                style={{ '--c': b.colour }}
                onClick={() => choose(i)}
                onKeyDown={onTabKey}
              >
                {b.name}
                <span className="sk-tab-count">{countOf(b)} skills</span>
              </button>
            ))}
          </div>

          <div className="sk-stage">
            <div key={replay} id="sk-panel" role="tabpanel" aria-labelledby={`sk-tab-${current}`} className={panelClass} style={{ '--c': branch.colour }}>
              {branch.clusters.map((c) => (
                <div key={c.title} className="sk-cluster">
                  <h3>{c.title}</h3>
                  <ul className="sk-row">
                    {c.skills.map((s) => {
                      const on = chosen === s;
                      return (
                        <li key={s.name} className={['sk-cell', s.learning && 'is-learning', on && 'is-on'].filter(Boolean).join(' ')} style={{ '--i': index++ }}>
                          <button
                            type="button"
                            className="sk-tile"
                            aria-pressed={on}
                            aria-label={s.caption ? `${s.name}` : undefined}
                            onClick={() => setPicked(on ? null : { branch: current, name: s.name })}
                          >
                            <span className="sk-tile-face"><Icon skill={s} /></span>
                            <span className="sk-cap" aria-hidden={s.caption ? 'true' : undefined}>{s.caption || s.name}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
            <div className="sk-detail" aria-live="polite">
              {chosen ? (
                <>
                  <b style={{ color: branch.colour }}>{chosen.name}</b>
                  <p>
                    {chosen.learning ? 'Currently learning.' : 'Learned to use.'}
                    {chosen.used.length > 0 && <> Used in: <span>{chosen.used.join(', ')}</span></>}
                  </p>
                </>
              ) : (
                <p className="sk-hint">Select a tile to see where it was used.</p>
              )}
            </div>
          </div>
        </div>

        <p className="sk-note">
          Logos are from the Simple Icons set (CC0). All trademarks belong to their owners; logos only show tools I use.
          The other icons are drawn for this site.
        </p>
      </div>
    </section>
  );
}
