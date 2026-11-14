import { useEffect } from 'react';

const DEFAULT_DESCRIPTION = 'Adriel Bobby. Cybersecurity and software student who builds things end to end. Projects, skills, experience and contact.';

function setMeta(selector, create, content) {
  let el = document.head.querySelector(selector);
  if (!el) { el = document.createElement('meta'); create(el); document.head.appendChild(el); }
  el.setAttribute('content', content);
}

// Per-page title and description (and noindex for the not-found page).
export function useTitle(title, description = DEFAULT_DESCRIPTION, { noindex = false } = {}) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', (el) => el.setAttribute('name', 'description'), description);
    setMeta('meta[property="og:title"]', (el) => el.setAttribute('property', 'og:title'), title);
    setMeta('meta[property="og:description"]', (el) => el.setAttribute('property', 'og:description'), description);
    const robots = document.head.querySelector('meta[name="robots"]');
    if (noindex) setMeta('meta[name="robots"]', (el) => el.setAttribute('name', 'robots'), 'noindex');
    else if (robots) robots.remove();
  }, [title, description, noindex]);
}
