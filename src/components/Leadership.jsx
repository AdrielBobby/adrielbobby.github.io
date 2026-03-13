// Leadership.jsx — Showcases your roles in communities and organizations.

// --- Leadership Roles Data ---
// Now stored as an array of objects so we can easily map over them.
// To add a new role, add another object to this array.
const roles = [
  {
    title: 'Electronic Communications Coordinator',
    org: 'IEEE RSET Student Branch',
    date: 'March 2025 – March 2026',
    bullets: [
      'Responsible for handling all official announcements and communication for the Student Branch.'
    ]
  },
  {
    title: 'Technical Coordinator',
    org: 'IEEE RSET Student Branch',
    date: 'March 2026 – Present',
    bullets: [
      'Supporting the technical side of IEEE RSET SB events - setting up hardware demos, assisting speakers with lab equipment, and helping run hands-on workshops.'
    ]
  }
];

export default function Leadership() {
  return (
    // id="leadership" — the Navbar "Leadership" link scrolls here.
    <section id="leadership">
      <div className="container">

        {/* &amp; is the HTML entity for the ampersand character (&). */}
        <h2 className="section-title">Leadership &amp; Communities</h2>

        {/* We now loop over the 'roles' array to render multiple cards dynamically. */}
        <div className="edu-cards"> 
          {/* Using .edu-cards here to get the flex-column gap between multiple cards, 
              which works perfectly since it was already defined in index.css. */}
          {roles.map((role) => (
            <div key={role.title} className="leadership-card">

              {/* Your role/title at the organization. */}
              <h3>{role.title}</h3>

              {/* Organization and date range interpolation.
                  &mdash; renders as an em dash (—). */}
              <p className="leadership-org">{role.org} &mdash; {role.date}</p>

              {/* List of responsibilities or achievements in this role. */}
              <ul>
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
