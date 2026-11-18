import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ICONS, BRANCHES } from '../../data/skills.js';
import { subscribeScroll } from '../../lib/scroll.js';
import { usePhone } from '../../lib/phone.js';
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
  const phone = usePhone();
  const [arrived, setArrived] = useState(false); // phones: the quick entrance has played
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const tabRefs = useRef([]);
  const [current, setCurrent] = useState(START >= 0 ? START : 0);
  const [picked, setPicked] = useState(null); // { branch, name }
  const [replay, setReplay] = useState(0); // bumps on branch switch, for the quick replay
  const replayRef = useRef(0);
  replayRef.current = replay;

  // First arrival: the branch lines, tile outlines and icons are drawn on as the
  // section scrolls in (--draw, 0 to 1, read by skills.css). Switching branch
  // afterwards plays the quick replay instead.
  useEffect(() => {
    const section = sectionRef.current;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setArrived(true); return undefined; }
    // Phones skip the per-frame scrub: the quick entrance plays once when the section comes into view.
    if (phone) {
      const io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) { setArrived(true); io.disconnect(); }
      }, { threshold: 0.15 });
      io.observe(section);
      return () => io.disconnect();
    }
    const clamp = (t) => Math.max(0, Math.min(1, t));
    return subscribeScroll(({ y, eased, vh }) => {
      const panel = panelRef.current;
      if (!panel || replayRef.current > 0) return;
      const top = section.getBoundingClientRect().top + y - eased;
      panel.style.setProperty('--draw', clamp((vh * 0.95 - top) / (vh * 1.0)).toFixed(4));
    });
  }, [phone]);

  // One branch line per visual line of tiles: find where each wrapped line of
  // a cluster starts and put a rule through the middle of its tiles.
  useLayoutEffect(() => {
    const panel = panelRef.current;
    const measure = () => {
      panel.querySelectorAll('.sk-row').forEach((row) => {
        const cells = [...row.children];
        const tops = [...new Set(cells.map((c) => c.offsetTop))];
        const solid = 'linear-gradient(var(--c), var(--c))';
        const dashed = 'repeating-linear-gradient(90deg, var(--c) 0 6px, transparent 6px 11px)';
        const bg = [];
        const pos = [];
        const size = [];
        // Learning tiles sit at the end of their line: the line is solid up to the first one
        // and dashed from there on, so the unfinished part reads as unfinished.
        tops.forEach((t) => {
          const first = cells.find((c) => c.offsetTop === t && c.classList.contains('is-learning'));
          const split = first ? first.offsetLeft : row.clientWidth;
          bg.push(solid); pos.push(`0 ${t + 29}px`); size.push(`${split}px 2px`);
          if (first) { bg.push(dashed); pos.push(`${split}px ${t + 29}px`); size.push(`${row.clientWidth - split}px 2px`); }
        });
        row.style.setProperty('--line-bg', bg.join(', '));
        row.style.setProperty('--line-pos', pos.join(', '));
        row.style.setProperty('--line-size', size.join(', '));
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(panel);
    return () => ro.disconnect();
  }, [current, replay]);

  const choose = (i, focus) => {
    if (i === current) return;
    setCurrent(i);
    setReplay((r) => r + 1);
    if (focus) tabRefs.current[i]?.focus();
    // on a phone the tabs scroll sideways: keep the chosen one in view
    if (phone) tabRefs.current[i]?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  };
  const onTabKey = (e) => {
    const last = BRANCHES.length - 1;
    const to = { ArrowDown: current + 1, ArrowRight: current + 1, ArrowUp: current - 1, ArrowLeft: current - 1, Home: 0, End: last }[e.key];
    if (to === undefined) return;
    e.preventDefault();
    choose((to + BRANCHES.length) % BRANCHES.length, true);
  };

  const branch = BRANCHES[current];
  const chosen = picked && picked.branch === current
    ? branch.clusters.flatMap((c) => c.skills).find((s) => s.name === picked.name)
    : null;
  let index = 0;
  const panelClass = replay > 0 || (phone && arrived) ? 'sk-panel is-entering is-fast'
    : phone ? 'sk-panel is-waiting' : 'sk-panel is-scrub';

  return (
    <section ref={sectionRef} id="skills" className="skills surface surface-dark" data-nav-theme="dark" aria-labelledby="skills-title">
      <div className="wrap">
        <header className="sk-head">
          <div>
            <p className="sk-tag">04 / Skills</p>
            <h2 id="skills-title" className="sk-big">What I build with.</h2>
          </div>
          <p className="sk-legend">
            <span><i className="sk-key" aria-hidden="true" />learned to use</span>
            <span><i className="sk-key is-learning" aria-hidden="true" />learning now</span>
            <span>{TOTAL} skills in {BRANCHES.length} branches</span>
          </p>
        </header>

        <div className="sk-layout">
          <div className="sk-side">
          <div className="sk-rail" role="tablist" aria-orientation={phone ? 'horizontal' : 'vertical'} aria-label="Skill branches">
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

          {/* Under the branch list, so it is seen with the logos and the whole scene still fits one screen. */}
          <p className="sk-note">
            Logos are from the Simple Icons set (CC0). All trademarks belong to their owners and are shown
            only to name tools I have used. The other icons are drawn for this site.
          </p>
          </div>

          <div className="sk-stage">
            <div key={replay} ref={panelRef} id="sk-panel" role="tabpanel" aria-labelledby={`sk-tab-${current}`} className={panelClass} style={{ '--c': branch.colour }}>
              {branch.clusters.map((c) => (
                <div key={c.title} className="sk-cluster">
                  <h3>{c.title}</h3>
                  <ul className="sk-row">
                    {/* learned skills first, the ones still being learned at the end of the row */}
                    {[...c.skills].sort((x, y) => Boolean(x.learning) - Boolean(y.learning)).map((s) => {
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
      </div>
    </section>
  );
}
