// About.jsx — The "About Me" section with a bio and a technical skills breakdown.

// --- Data Arrays ---
// Defining data as arrays outside the component is a React best practice.
// It keeps your JSX clean (no long lists cluttering the return statement) and
// makes it easy to add/remove items without touching the HTML structure.

// Languages you code in. To add a new one, just add a string to this array.
const languages = ['C', 'Python', 'C++', 'Java'];

// Security tools you use. Edit here to update your portfolio — no HTML needed.
const tools = [
  'MySQL', 'Linux', 'Nmap', 'Gobuster', 'WPSCan', 'Joomscan',
  'SQLMap', 'Metasploit', 'Searchsploit', 'Hydra', 'John the Ripper',
  'Hashcat', 'Netcat', 'Tor', 'Burp Suite', 'Steghide', 'Stegseek',
];

// Areas of expertise / domain knowledge.
const domains = [
  'Cybersecurity',
  'Web Application Security',
  'Network Security',
  'Social Media Management',
];

export default function About() {
  return (
    // id="about" lets the Navbar's <a href="#about"> scroll here.
    <section id="about">
      <div className="container">

        {/* Section heading with the left blue border styling from index.css. */}
        <h2 className="section-title">About</h2>

        {/* Subheading / tagline shown just below the section title. */}
        <p className="about-intro">Cybersecurity enthusiast focused on ethical hacking</p>

        {/* The bio text is wrapped in a div so we can control spacing between paragraphs via CSS.
            &apos; is the JSX-safe way to write an apostrophe character. */}
        <div className="about-body">
          <p>
            I&apos;m a Computer Science Engineering student with a passion for cybersecurity,
            digital communication, and social media management. My goal is to become a
            cybersecurity specialist with a focus on ethical hacking and cyber-threat analysis.
          </p>
          <p>
            My curiosity about how things break is what drives me to protect them. I enjoy
            setting up labs, hosting websites, and exploring how systems can be compromised —
            and then hardened. I value clear communication, continuous learning, and hands-on
            experimentation above all.
          </p>
        </div>

        {/* ---- Technical Skills subsection ---- */}
        <div className="skills-section">
          {/* This is a plain paragraph styled to look like a subtitle heading. */}
          <p className="skills-title">Technical Skills</p>

          {/* CSS Grid via the 'skills-grid' class lays these three columns out side-by-side.
              On narrow screens the grid collapses to a single column automatically. */}
          <div className="skills-grid">

            {/* ---- Languages column ---- */}
            <div className="skill-category">
              {/* <h4> is a level-4 heading — appropriate here since h2 is the section title. */}
              <h4>Languages</h4>
              <ul>
                {/* .map() is an array method. It loops over 'languages' and for each
                    string ('lang') it returns a <li> element containing that string.
                    This is how React renders lists — no for-loops in JSX, just .map().
                    'key={lang}' is REQUIRED by React for lists. It helps React efficiently
                    update only the items that change when the list is re-rendered. */}
                {languages.map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>

            {/* ---- Tools column ---- */}
            <div className="skill-category">
              <h4>Tools</h4>
              <ul>
                {/* Same .map() pattern — loops over the 'tools' array to build list items. */}
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>

            {/* ---- Domains column ---- */}
            <div className="skill-category">
              <h4>Domains</h4>
              <ul>
                {domains.map((domain) => (
                  <li key={domain}>{domain}</li>
                ))}
              </ul>
            </div>

          </div>{/* end .skills-grid */}
        </div>{/* end .skills-section */}

      </div>{/* end .container */}
    </section>
  );
}
