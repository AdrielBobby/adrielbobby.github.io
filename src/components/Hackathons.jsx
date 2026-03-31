import ScrollReveal from './ScrollReveal';
import DecryptText from './DecryptText';
import GlowCard from './GlowCard';
import PixelCard from './PixelCard';

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

// Returns a pixel color palette matching the prize tier.
function getPrizePixelColors(prize) {
  if (prize.includes('1st')) return [
    'rgba(212, 175,  55, 0.95)',  // #D4AF37 gold
    'rgba(245, 197,  66, 0.75)',  // bright gold
    'rgba(253, 224,  71, 0.55)',  // light gold
    'rgba(180, 140,  20, 0.85)',  // deep gold
    'rgba(255, 215,   0, 0.65)',  // pure gold
    'rgba(140, 100,  10, 0.70)',  // dark gold
  ];
  if (prize.includes('2nd')) return [
    'rgba(192, 192, 192, 0.95)',  // silver
    'rgba(220, 220, 220, 0.75)',  // light silver
    'rgba(148, 163, 184, 0.85)',  // slate silver
    'rgba(241, 245, 249, 0.55)',  // near white
    'rgba(100, 116, 139, 0.80)',  // dark silver
    'rgba(203, 213, 225, 0.65)',  // cool silver
  ];
  if (prize.includes('3rd')) return [
    'rgba(205, 127,  50, 0.95)',  // #CD7F32 bronze
    'rgba(230, 150,  60, 0.75)',  // light bronze
    'rgba(180, 100,  35, 0.85)',  // deep bronze
    'rgba(245, 160,  50, 0.60)',  // bright bronze
    'rgba(140,  80,  25, 0.80)',  // dark bronze
    'rgba(210, 130,  45, 0.65)',  // mid bronze
  ];
  // Default — site purple palette
  return [
    'rgba(139,  92, 246, 0.95)',
    'rgba(167, 139, 250, 0.75)',
    'rgba(196, 181, 253, 0.55)',
    'rgba( 91,  45, 142, 0.85)',
    'rgba( 45,  27,  78, 0.90)',
    'rgba( 93, 124, 253, 0.60)',
  ];
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
              <GlowCard className="hackathon-card">
                <PixelCard colors={getPrizePixelColors(hack.prize)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <h3>{hack.title}</h3>
                    <span style={{ color: getPrizeColor(hack.prize), fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                      {hack.prize}
                    </span>
                  </div>
                  <ul>{hack.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                  <div className="project-tech">
                    {hack.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                </PixelCard>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
