// main.jsx — The very first JavaScript file that runs when the page loads.
// Its only job is to find the <div id="root"> in index.html and mount React into it.

// 'React' must be imported in every file that uses JSX (the HTML-looking syntax).
// Even though you can't see it used directly, Babel/Vite uses it behind the scenes.
import React from 'react';

// ReactDOM is the part of React that knows how to work with the browser's DOM (the page).
// React itself is platform-agnostic — ReactDOM is the web-specific glue.
import ReactDOM from 'react-dom/client';

// Our root component. App.jsx pulls together every section of the portfolio.
import App from './App.jsx';

// Our global stylesheet. Importing it here makes it apply to every component on the page.
import './index.css';

// ReactDOM.createRoot() creates a React "root" — a managed container for our React tree.
//   document.getElementById('root') finds the <div id="root"> in index.html.
// .render() tells React to draw your <App /> component (and everything inside it) there.
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> is a development helper — it doesn't change what's rendered.
  // It activates extra warnings that help you catch bugs early while coding.
  // You can safely remove it; the app works the same without it in production.
  <React.StrictMode>
    {/* <App /> is your root component — written like an HTML tag, but it's a React component. */}
    <App />
  </React.StrictMode>
);
