import { useEffect, useRef, useState } from 'react';
import data from '../../data/contributions.json';
import './contributions.css';

// The year of GitHub activity as a skyline: one column per week, taller means a busier week,
// (heights follow the square root of the week's count, so quiet weeks still show) drawn with the site's symbols (: for the body, * for the top). The numbers are saved by
// scripts/fetch-contributions.mjs before each deploy, so the page makes no request.
const ROWS = 9;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const fmt = new Intl.NumberFormat('en-GB');
const shortDate = (iso) => new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

export default function Contributions() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setShown(true); io.disconnect(); }
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const { weeks } = data;
  const max = Math.max(1, ...weeks.map((w) => w.count));
  // a month label sits over the first week that starts in that month
  const labels = weeks.map((w, i) => {
    const m = new Date(`${w.start}T00:00:00`).getMonth();
    const prev = i > 0 ? new Date(`${weeks[i - 1].start}T00:00:00`).getMonth() : -1;
    return m !== prev && i > 1 && i < weeks.length - 3 ? MONTHS[m] : null;
  });

  return (
    <div ref={ref} className={shown ? 'cx is-in' : 'cx'}>
      <p className="projects-tag">The code behind all of it</p>
      <h2 className="cx-big">{fmt.format(data.total)} contributions in the last year.</h2>
      <div
        className="cx-chart"
        role="img"
        aria-label={`GitHub contributions over the last year, one bar per week. ${fmt.format(data.total)} in total; the busiest week had ${data.busiestWeek.count}.`}
      >
        <div className="cx-cols" aria-hidden="true">
          {weeks.map((w, i) => {
            const h = w.count ? Math.max(1, Math.round(Math.sqrt(w.count / max) * ROWS)) : 0;
            return (
              <span key={w.start} className="cx-col" style={{ '--i': i }} title={`Week of ${shortDate(w.start)}: ${w.count}`}>
                {h ? `*${'\n:'.repeat(h - 1)}` : ''}
              </span>
            );
          })}
        </div>
        <div className="cx-base" aria-hidden="true" />
        <div className="cx-months" aria-hidden="true">
          {labels.map((l, i) => (l ? <span key={i} style={{ gridColumn: i + 1 }}>{l}</span> : null))}
        </div>
      </div>
      <ul className="cx-stats">
        <li>Busiest week <b>{data.busiestWeek.count}</b> <span>(from {shortDate(data.busiestWeek.start)})</span></li>
        <li>Longest streak <b>{data.longestStreak} days</b></li>
        <li>Active on <b>{data.activeDays} days</b></li>
        <li><a href="https://github.com/AdrielBobby" target="_blank" rel="noopener noreferrer">github.com/AdrielBobby<span className="visually-hidden"> (opens in a new tab)</span></a></li>
      </ul>
      <p className="cx-note">Showing the last 28 weeks. The full year is {fmt.format(data.total)}.</p>
    </div>
  );
}
