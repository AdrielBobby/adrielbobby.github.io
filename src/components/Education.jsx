// Education.jsx — Stagger card reveal + decrypt heading.

import ScrollReveal from './ScrollReveal';
import DecryptText from './DecryptText';

const education = [
  {
    degree: 'B.Tech., Computer Science Engineering',
    school: 'Rajagiri School of Engineering and Technology',
    location: 'Kochi',
    year: '2024 – 2028',
    cgpa: '8.0',
  },
  {
    degree: 'Class 12, CBSE',
    school: 'Rajagiri Public School',
    location: 'Kalamassery',
    year: '2022 – 2024',
    cgpa: '8.9',
  },
  {
    degree: 'Class 10, CBSE',
    school: 'The Charter School',
    location: 'Pukattupady',
    year: '2021 – 2022',
    cgpa: '8.9',
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">

        {/* DecryptText scrambles "Education" into random chars and then resolves it
            when this section scrolls into view. */}
        <h2 className="section-title">
          <DecryptText text="Education" speed={35} />
        </h2>

        <div className="edu-cards">
          {education.map((item, index) => (
            // ScrollReveal wraps each card.
            // direction="up" → card slides up into position.
            // delay={index * 0.15} → each card waits a bit longer than the previous one.
            // This creates the "stagger" effect where cards appear one after another.
            <ScrollReveal key={item.degree} direction="up" delay={index * 0.15}>
              <div className="edu-card">
                <h3>{item.degree}</h3>
                <p className="edu-school">{item.school}, {item.location}</p>
                <div className="edu-meta">
                  <span>{item.year}</span>
                  <span>CGPA: {item.cgpa}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
