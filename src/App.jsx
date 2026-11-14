import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CaseFile from './pages/CaseFile.jsx';
import NotFound from './pages/NotFound.jsx';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<CaseFile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
