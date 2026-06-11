// Experience.jsx — Professional internship experience section.
// Uses a vertical timeline layout with animated scroll reveal cards.
import ScrollReveal from './ScrollReveal';
import DecryptText from './DecryptText';
import GlowCard from './GlowCard';

const experiences = [
  {
    role: 'Cybersecurity Intern',
    org: 'Kerala Police Cyberdome',
    location: 'Thiruvananthapuram, Kerala',
    date: 'May 2026 – Jun 2026',
    bullets: [
      'Conducted Android malware analysis using MobSF, Frida, Genymotion, and ADB in a secure lab environment.',
      'Performed static and dynamic analysis of APK samples to identify malicious behaviors, suspicious API calls, and data exfiltration patterns.',
      'Documented findings in structured analysis reports aligned with cybercrime investigation workflows.',
      'Gained hands-on exposure to incident response procedures and digital forensics practices used in law enforcement.',
    ],
    tech: ['MobSF', 'Frida', 'Genymotion', 'ADB', 'Android Security', 'Digital Forensics'],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">
          <DecryptText text="Experience" speed={35} />
        </h2>

        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.role + exp.org} direction="up" delay={index * 0.15}>
              <div className="exp-timeline-item">
                {/* Card content */}
                <GlowCard className="exp-card">
                  {/* Header row: role + date badge */}
                  <div className="exp-card-header">
                    <div>
                      <h3>{exp.role}</h3>
                      <p className="exp-org">
                        {exp.org}
                        <span className="exp-location"> · {exp.location}</span>
                      </p>
                    </div>
                    <span className="exp-date-badge">{exp.date}</span>
                  </div>

                  {/* Bullet points */}
                  <ul className="exp-bullets">
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  {/* Tech chips */}
                  <div className="project-tech exp-tech">
                    {exp.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </GlowCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
