// Certifications.jsx — Displays your professional certifications.

// --- Certification Bullet Points ---
// Stored as an array of strings so we can loop over them with .map()
// instead of writing three separate <li> tags by hand.
// To add more bullet points, just push a new string into this array.
const bullets = [
  'Hands-on ethical hacking, vulnerability scanning, and system exploitation.',
  'Used Nmap, Burp Suite, and Metasploit; privilege escalation and post-exploitation labs.',
  'Structured documentation and reporting of findings.',
];

export default function Certifications() {
  return (
    // id="certifications" — the Navbar "Certifications" link scrolls here.
    <section id="certifications">
      <div className="container">

        <h2 className="section-title">Certifications</h2>

        {/* A single card for now. If you earn more certifications,
            you could convert this to an array + .map() like Education.jsx. */}
        <div className="cert-card">

          {/* Certification name as a sub-heading. */}
          <h3>Certified Penetration Tester</h3>

          {/* Issuer and date range.
              &mdash; is the HTML entity for an em dash (—), which is wider than a regular dash (-).
              JSX doesn't support HTML entities natively in all places, but inside text content
              they work fine. Alternatively you could just type the — character directly. */}
          <p className="cert-issuer">RedTeam Academy &mdash; May 2025 – Aug 2025</p>

          {/* Unordered list of learning outcomes.
              We loop over the 'bullets' array using .map().
              'b' is our chosen variable name for each bullet string in the loop.
              'key={b}' uses the string itself as the key — fine here since all strings are unique. */}
          <ul>
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
