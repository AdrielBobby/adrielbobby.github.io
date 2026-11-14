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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
