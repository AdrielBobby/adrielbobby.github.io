import { Link } from 'react-router-dom';
import { useTitle } from '../useTitle.js';

export default function NotFound() {
  useTitle('Page not found | Adriel Bobby');
  return (
    <main id="main" className="page surface surface-dark" data-nav-theme="dark">
      <div className="wrap">
        <p className="label">404</p>
        <h1>That page isn't here.</h1>
        <p className="note">The link may be old, or the address may have a typo.</p>
        <p className="links"><Link to="/">Go to the home page</Link></p>
      </div>
    </main>
  );
}
