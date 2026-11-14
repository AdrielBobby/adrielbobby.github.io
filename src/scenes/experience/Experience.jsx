import { useEffect, useRef } from 'react';
import './experience.css';

// Facts from the resume and the Cyberdome LinkedIn post (see docs/experience-sketch.html).
// Award dates aren't recorded, so their left column shows the prize instead.
const GROUPS = [
  {
    title: 'Experience',
    rows: [
      { when: 'Mar 2026 to present', title: 'Technical Coordinator', org: 'IEEE RSET Student Branch' },
      { when: 'May to Jun 2026', title: 'Cybersecurity Intern', org: 'Kerala Police Cyberdome', cap: 'A month of hands-on work: web flaws, an Android malware lab and network traffic analysis, on controlled vulnerable apps and PortSwigger labs.' },
      { when: 'Mar 2025 to Mar 2026', title: 'Electronic Communications Coordinator', org: 'IEEE RSET Student Branch' },
    ],
  },
  {
    title: 'Credentials',
    rows: [
      { when: 'May to Aug 2025', title: 'Certified Penetration Tester', org: 'RedTeam Academy', cap: 'Nmap, Burp Suite, Metasploit, privilege escalation and report writing.' },
    ],
  },
  {
    title: 'Awards',
    rows: [
      { when: 'Winner', title: 'Best Use of Gemma', org: 'Google Physical AI Hackathon, Onam Edition', cap: 'For Thaalam, the glove that teaches chenda rhythms.' },
      { when: '1st prize', title: 'KruizeX Ideathon', cap: 'A token-based boarding queue for Kochi Water Metro and feeder buses.' },
      { when: '3rd prize', title: 'VAWT Street Lamp', cap: 'A vertical-axis wind turbine powering an LED street lamp.' },
    ],
  },
  {
    title: 'Education',
    rows: [
      { when: '2024 to present', title: 'B.Tech, Computer Science and Engineering', org: 'RSET Kochi', cap: 'CGPA 8.' },
      { when: 'CBSE', title: 'Class 12', org: 'Rajagiri Public School, Kalamassery', cap: '8.9.' },
      { when: 'CBSE', title: 'Class 10', org: 'The Charter School, Pukattupady', cap: '8.9.' },
    ],
  },
];

// Experience: a sticky headline on the left, plain ruled rows on the right.
// Each group's rows fade up once when the group is reached.
export default function Experience() {
  const listRef = useRef(null);

  useEffect(() => {
    const groups = [...listRef.current.querySelectorAll('.ex-group')];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      groups.forEach((g) => g.classList.add('is-in'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      }),
      { threshold: 0.2 },
    );
    groups.forEach((g) => io.observe(g));
    return () => io.disconnect();
  }, []);

  return (
    <section id="experience" className="experience surface surface-light" data-nav-theme="light" aria-labelledby="experience-title">
      <div className="wrap ex-inner">
        <div className="ex-side">
          <p className="ex-tag">05 / Experience</p>
          <h2 id="experience-title" className="ex-big">Where I&rsquo;ve worked and what I&rsquo;ve earned.</h2>
          <p className="ex-lede">Roles, certifications and awards, newest first.</p>
        </div>
        <div ref={listRef}>
          {GROUPS.map((g) => (
            <section key={g.title} className="ex-group" aria-labelledby={`ex-${g.title}`}>
              <h3 id={`ex-${g.title}`}>{g.title}</h3>
              <ol className="ex-rows">
                {g.rows.map((r, i) => (
                  <li key={r.title} className="ex-row" style={{ '--i': i }}>
                    <p className="ex-when">{r.when}</p>
                    <div>
                      <h4 className="ex-title">{r.title}</h4>
                      {r.org && <p className="ex-org">{r.org}</p>}
                      {r.cap && <p className="ex-cap">{r.cap}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
