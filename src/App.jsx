import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';

// Case files (their copy and pictures) load only when one is opened, keeping the home page light.
const CaseFile = lazy(() => import('./pages/CaseFile.jsx'));

// A new page starts at the top, unless the link names a section (/#projects).
// Returning to the exact Projects scroll position comes with the case files.
function ScrollOnNavigate() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollOnNavigate />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<Suspense fallback={<div className="route-loading surface surface-dark" />}><CaseFile /></Suspense>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
