import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/fonts.css';
import './styles/tokens.css';
import './styles/base.css';

// Deep links on GitHub Pages arrive through public/404.html, which stores the
// requested path and sends the browser to '/'. Put that path back first.
const saved = sessionStorage.getItem('spa-path');
if (saved) {
  sessionStorage.removeItem('spa-path');
  if (saved.startsWith('/') && !saved.startsWith('//')) window.history.replaceState(null, '', saved);
}

// A reload starts clean: no section hash in the address, no restored scroll, back at the top.
try {
  if (performance.getEntriesByType('navigation')[0]?.type === 'reload') {
    window.history.scrollRestoration = 'manual';
    window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
    // later Back/Forward steps (a case file to Projects) restore their scroll as usual
    window.addEventListener('load', () => { window.history.scrollRestoration = 'auto'; }, { once: true });
  }
} catch { /* an unusual browser: keep the default behaviour */ }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
