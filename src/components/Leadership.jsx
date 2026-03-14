import ScrollReveal from './ScrollReveal';
import DecryptText from './DecryptText';

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
        <div className="edu-cards">
          {roles.map((role, index) => (
            <ScrollReveal key={role.title} direction="up" delay={index * 0.15}>
              <div className="leadership-card">
                <h3>{role.title}</h3>
                <p className="leadership-org">{role.org} — {role.date}</p>
                <ul>{role.bullets.map(b => <li key={b}>{b}</li>)}</ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
