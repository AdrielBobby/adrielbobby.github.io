import ScrollReveal from './ScrollReveal';
import DecryptText from './DecryptText';
import GlowCard from './GlowCard';

const roles = [
  {
    title: 'Electronic Communications Coordinator',
    org: 'IEEE RSET Student Branch',
    date: 'March 2025 – March 2026',
    bullets: ['Responsible for all official announcements and communication for the Student Branch.'],
  },
  {
    title: 'Technical Coordinator',
    org: 'IEEE RSET Student Branch',
    date: 'March 2026 – Present',
    bullets: ['Supporting technical side of IEEE RSET SB events — hardware demos, speaker support, hands-on workshops.'],
  },
];

export default function Leadership() {
  return (
    <section id="leadership">
      <div className="container">
        <h2 className="section-title">
          <DecryptText text="Leadership & Communities" speed={30} />
        </h2>
        <div className="exp-timeline">
          {roles.map((role, index) => (
            <ScrollReveal key={role.title} direction="up" delay={index * 0.15}>
              <div className="exp-timeline-item">
                <GlowCard className="exp-card">
                  <div className="exp-card-header">
                    <div>
                      <h3>{role.title}</h3>
                      <p className="exp-org">{role.org}</p>
                    </div>
                    <span className="exp-date-badge">{role.date}</span>
                  </div>
                  <ul className="exp-bullets">
                    {role.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </GlowCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
