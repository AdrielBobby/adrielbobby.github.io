import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import KvMark from './KvMark.jsx';
import { onNavTheme } from './navTheme.js';
import './nav.css';

const LEFT = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];
const RIGHT = [
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];
const IDS = [...LEFT, ...RIGHT].map((i) => i.id);
const RESUME = '/Resume_v3.pdf'; // becomes /Resume.pdf when the new resume arrives
const PILL_CENTRE = 38; // px from the top of the window to the middle of the pill

export default function Nav() {
  const { pathname } = useLocation();
  const onCaseFile = pathname.startsWith('/projects/');
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState(null); // id of the section in view
  const [pinned, setPinned] = useState(false);
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const [closed, setClosed] = useState(false);
  const navRef = useRef(null);

  // Two thin observation lines: one under the pill (which surface is behind
  // it, for its colours) and one near the middle of the window (which section
  // is being read, for the active link).
  useEffect(() => {
    const areas = [...document.querySelectorAll('[data-nav-theme]')];
    setCurrent(null);
    if (!areas.length) return undefined;
    let themeIO;
    let activeIO;
    const build = () => {
      themeIO?.disconnect();
      activeIO?.disconnect();
      themeIO = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setTheme(e.target.dataset.navTheme)),
        { rootMargin: `-${PILL_CENTRE}px 0px -${Math.max(window.innerHeight - PILL_CENTRE - 1, 0)}px 0px` },
      );
      activeIO = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id || null)),
        { rootMargin: '-45% 0px -54% 0px' },
      );
      areas.forEach((el) => { themeIO.observe(el); activeIO.observe(el); });
    };
    build();
    window.addEventListener('resize', build);
    return () => {
      window.removeEventListener('resize', build);
      themeIO.disconnect();
      activeIO.disconnect();
    };
  }, [pathname]);

  // A scene can override the colours while it is under the pill (see navTheme.js).
  const [override, setOverride] = useState(null);
  useEffect(() => onNavTheme(setOverride), []);

  // The right group is wider than the left (it holds Resume). Measure both so
  // each opens to its exact width and the pill shifts by half the difference,
  // which keeps the kv mark still at the centre of the window.
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [widths, setWidths] = useState(null);
  useLayoutEffect(() => {
    // First link's left edge to last link's right edge. (scrollWidth reads 0
    // for the left group, because it overflows towards the left when closed.)
    const span = (el) =>
      Math.ceil(el.lastElementChild.getBoundingClientRect().right - el.firstElementChild.getBoundingClientRect().left);
    const measure = () => leftRef.current && rightRef.current && setWidths({ left: span(leftRef.current), right: span(rightRef.current) });
    measure();
    document.fonts?.ready.then(measure);
  }, []);

  // A pinned menu closes on Escape and when the page changes.
  useEffect(() => { setPinned(false); }, [pathname]);
  useEffect(() => {
    if (!pinned) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setPinned(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [pinned]);

  // Open while hovered, while reached with the keyboard, or while pinned.
  // Clicking the mark on an open menu closes it at once; `closed` keeps it
  // shut until the pointer or the focus has left, so it does not spring back.
  const open = !closed && (pinned || focus || hover);
  const onMark = () => {
    if (open) { setPinned(false); setClosed(true); }
    else { setClosed(false); setPinned(true); }
  };
  const active = onCaseFile ? 'projects' : IDS.includes(current) ? current : null;

  // Clicking the link for the section already in the address bar would not
  // change the route, so move there directly as well.
  const jump = (id) => () => {
    if (pathname === '/') document.getElementById(id)?.scrollIntoView();
  };

  const item = ({ id, label }) => (
    <Link
      key={id}
      to={`/#${id}`}
      className={id === active ? 'nav-link is-active' : 'nav-link'}
      aria-current={id === active ? (onCaseFile ? 'true' : 'location') : undefined}
      onClick={jump(id)}
    >
      {label}
    </Link>
  );

  return (
    <header className="nav" data-theme={override ?? theme}>
      {onCaseFile && (
        <Link className="nav-back" to={`/#project-${pathname.split('/')[2] || ''}`}>
          <span aria-hidden="true">&larr;</span> Back to projects
        </Link>
      )}
      <nav
        ref={navRef}
        className={open ? 'nav-pill is-open' : 'nav-pill'}
        aria-label="Main"
        style={widths ? { '--w-left': `${widths.left}px`, '--w-right': `${widths.right}px` } : undefined}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => { setHover(false); setClosed(false); }}
        onFocus={(e) => { if (e.target.matches(':focus-visible')) setFocus(true); }}
        onBlur={(e) => {
          if (!navRef.current.contains(e.relatedTarget)) { setFocus(false); if (!hover) setClosed(false); }
        }}
      >
        <div ref={leftRef} className="nav-group nav-group-left">{LEFT.map(item)}</div>
        <button
          type="button"
          className="nav-mark"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={onMark}
        >
          <KvMark />
        </button>
        <div ref={rightRef} className="nav-group nav-group-right">
          {RIGHT.map(item)}
          <a className="nav-link nav-resume" href={RESUME} target="_blank" rel="noopener">
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
