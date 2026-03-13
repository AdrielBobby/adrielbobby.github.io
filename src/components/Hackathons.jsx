// Hackathons.jsx — Highlights your hackathon submissions.

// --- Hackathons Data ---
// Changed to an array of objects to map over multiple hackathon entries.
// Each object contains title, prize status, bullets, and tech stack.
const hackathons = [
  {
    title: 'High Torque Vertical Axis Wind Turbine Street Lamp',
    prize: '3rd Prize',
    bullets: [
      'The project involves the development of a High Torque Vertical Axis Wind Turbine (VAWT) Street Lamp system.',
      'The system uses a VAWT to convert wind energy into mechanical rotation, which then powers a generator to produce electricity. This electricity is stored in a battery and used to power an LED streetlight.',
      'The key components include the VAWT, generator, battery storage, LDR control system, and LED streetlight. The design aims to automate the streetlight operation based on ambient light levels.',
      'The initial low starting torque issue was addressed with a kickstarter system, and the over-speeding issue was resolved using a pitch control system.'
    ],
    tech: ['VAWT', 'Generator', 'Battery', 'LDR Control', 'LED']
  },
  {
    title: 'KruizeX Ideathon – Smart Multimodal Transit Queue System',
    prize: '1st Prize',
    bullets: [
      'Proposed a digital queue-number system with clear lane demarcation to remove “I was first” conflicts at busy jetties, and a unified live-tracking layer that brings Water Metro and feeder buses into the Kochi One app alongside Metro Rail.',
      'The goal was to improve predictability, reduce peak-hour stress, and increase trust in multimodal public transport.',
    ],
    tech: ['Ideathon', 'Research using Kochi One and KSRTC tracking data', 'Systems mapping'] // inferred
  }
];

// Returns a color based on prize rank
function getPrizeColor(prize) {
  if (prize.includes('1st')) return '#D4AF37';   // gold
  if (prize.includes('2nd')) return '#C0C0C0';   // silver
  if (prize.includes('3rd')) return '#CD7F32';   // bronze
  return '#c4a1ff';                              // default purple for others
}

export default function Hackathons() {
  return (
    // id="hackathons" — Navbar "Hackathons" link scrolls here.
    <section id="hackathons">
      <div className="container">

        <h2 className="section-title">Hackathon Submissions</h2>

        {/* .edu-cards is reused because it provides a neat flex column with gaps
            between consecutive cards. */}
        <div className="edu-cards">

          {/* Loop over the hackathons array with .map() */}
          {hackathons.map((hack) => (
            <div key={hack.title} className="hackathon-card">

              {/* Flex header spanning title and prize: We'll put Prize inline to match the flow */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ margin: 0 }}>{hack.title}</h3>
                <span style={{ fontSize: '0.9rem', color: getPrizeColor(hack.prize), fontStyle: 'italic' }}>
                  {hack.prize}
                </span>
              </div>

              {/* Loop over bullets and render each as a list item. */}
              <ul>
                {hack.bullets.map((b) => (
                  // key={b} uses the bullet string as its own unique identifier.
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {/* Tech tag row — reuses the same 'project-tech' CSS class from index.css
                  so the badges match the style in the Projects section. */}
              <div className="project-tech">
                {hack.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
