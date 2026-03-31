import ScrollReveal from './ScrollReveal';
import DecryptText from './DecryptText';

const hackathons = [
  {
    title: 'High Torque Vertical Axis Wind Turbine Street Lamp',
    prize: '3rd Prize',
    bullets: [
      'Development of a High Torque VAWT Street Lamp system.',
      'VAWT converts wind energy into electricity stored in a battery to power an LED streetlight.',
      'Key components: VAWT, generator, battery storage, LDR control system, LED streetlight.',
      'Low starting torque addressed with kickstarter; over-speeding resolved with pitch control.',
    ],
    tech: ['VAWT', 'Generator', 'Battery', 'LDR Control', 'LED'],
  },
  {
    title: 'KruizeX Ideathon – Smart Multimodal Transit Queue System',
    prize: '1st Prize',
    bullets: [
      'Proposed a digital queue system with lane demarcation for busy jetties.',
      'Unified live-tracking layer bringing Water Metro and feeder buses into Kochi One app.',
    ],
    tech: ['Ideathon', 'Kochi One & KSRTC tracking data', 'Systems mapping'],
  },
];

// Returns a medal color based on prize rank.
function getPrizeColor(prize) {
  if (prize.includes('1st')) return '#D4AF37'; // gold
  if (prize.includes('2nd')) return '#C0C0C0'; // silver
  if (prize.includes('3rd')) return '#CD7F32'; // bronze
  return '#c4a1ff';                            // default purple
}

export default function Hackathons() {
  return (
    <section id="hackathons">
      <div className="container">
        <h2 className="section-title">
          <DecryptText text="Hackathon Submissions" speed={30} />
        </h2>
        <div className="edu-cards">
          {hackathons.map((hack, index) => (
            // Each card staggered by 0.15s
            <ScrollReveal key={hack.title} direction="up" delay={index * 0.15}>
              <div className="base-card hackathon-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <h3>{hack.title}</h3>
                  {/* Prize badge with dynamic color from getPrizeColor() */}
                  <span style={{ color: getPrizeColor(hack.prize), fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                    {hack.prize}
                  </span>
                </div>
                <ul>{hack.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                <div className="project-tech">
                  {hack.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
