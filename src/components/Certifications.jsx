import ScrollReveal from './ScrollReveal';
import DecryptText from './DecryptText';
import GlowCard from './GlowCard';

const bullets = [
  'Offensive security fundamentals: reconnaissance, exploitation, post-exploitation.',
  'Web application penetration testing: SQLi, XSS, file inclusion.',
  'Network security: port scanning, traffic analysis, firewall evasion.',
  'Practical labs and CTF-style challenges.',
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <h2 className="section-title">
          <DecryptText text="Certifications" speed={35} />
        </h2>
        {/* Single cert card wrapped in ScrollReveal */}
        <ScrollReveal direction="up" delay={0}>
          <GlowCard className="cert-card">
            <h3>Certified Penetration Tester</h3>
            <p className="cert-issuer">RedTeam Academy — May 2025 – Aug 2025</p>
            <ul>{bullets.map(b => <li key={b}>{b}</li>)}</ul>
          </GlowCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
