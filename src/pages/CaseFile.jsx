import { Link, useParams } from 'react-router-dom';
import { findProject } from '../data/projects.js';
import { useTitle } from '../useTitle.js';
import NotFound from './NotFound.jsx';

// Scaffold: the route and the dark surface. The file card and sections arrive in step 6.
export default function CaseFile() {
  const { slug } = useParams();
  const project = findProject(slug);
  useTitle(project ? `${project.name} | Adriel Bobby` : 'Page not found | Adriel Bobby');
  if (!project) return <NotFound />;
  return (
    <main id="main" className="page surface surface-dark">
      <div className="wrap">
        <p className="label">Case file</p>
        <h1>{project.name}</h1>
        <p className="note">This case file is not written into the site yet.</p>
        <p className="links"><Link to="/#projects">Back to projects</Link></p>
      </div>
    </main>
  );
}
