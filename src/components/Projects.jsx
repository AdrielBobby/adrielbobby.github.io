// Projects.jsx — Renders a responsive grid of your project cards.

// --- Projects Data ---
// An array of OBJECTS. Each object represents one project.
// Object properties here:
//   title   → string, the project name
//   bullets → array of strings, each a bullet-point description
//   tech    → array of strings, each a technology/tool used
//
// To ADD a new project: copy+paste one of the objects below, add a comma after it,
// then fill in your new title / bullets / tech. The grid will update automatically.
const projects = [
  {
    title: 'Vaccine Dispatch Tracker',
    bullets: [
      'Manages vaccine inventory and distribution; order placement and reporting.',
      'Integrated stock updates and visualization for sales and dispatch.',
    ],
    tech: ['Python', 'MySQL'],
  },
  {
    title: 'ESP32 Marauder (Wi-Fi & Bluetooth Pentesting Tool)',
    bullets: [
      'Setup and customization for wireless auditing: deauth, sniffing, scanning.',
    ],
    // Tech tags — rendered as individual pill-shaped spans in the card footer.
    tech: ['ESP32', 'Arduino IDE', 'Marauder Firmware', 'Wireshark'],
  },
  {
    title: 'MIS-COMMUNICATION-NATER',
    bullets: [
      'Two AI models communicate with each other rather than answering user queries.',
      'Maximizes computer resources to produce unusable results.',
    ],
    tech: ['Raspberry Pi 4B', 'Raspberry OS Lite', 'StableLM Zephyr 3B', 'LEDs', 'Web UI'],
  },
  {
    title: 'PoolDetect AI – High-Speed Satellite Pool Detection',
    bullets: [
      'Built an end-to-end pipeline that turns zip codes into satellite tiles and automatically detects swimming pools for property intelligence.',
      'Replaced heavy YOLO-style models with a custom OpenCV pipeline using morphology and heuristics to hit sub‑0.1s per‑image inference on CPU.',
      'Added multi-stage false-positive filters plus four-way pool classification and change detection to spot new builds and estimate property value from SVG polygon areas.'
    ],
    tech: ['Python', 'OpenCV', 'NumPy', 'Nominatim API', 'Esri World Imagery'],
  },
  {
    title: 'Homelab for Cybersecurity',
    bullets: [
      'Self-hosted lab with VMs and vulnerable boxes for pentest practice.',
      'Workflow with Nmap, Metasploit, Burp Suite, and SIEMs.',
    ],
    tech: ['VirtualBox', 'Ubuntu Server', 'Kali Linux', 'pfSense', 'Docker'],
  },
];

export default function Projects() {
  return (
    // id="projects" — the "View My Work" button in Hero.jsx scrolls here.
    <section id="projects">
      <div className="container">

        <h2 className="section-title">Projects</h2>

        {/* .projects-grid uses CSS Grid to create a 2-column layout on desktop,
            which collapses to 1 column on narrow/mobile screens (handled in index.css). */}
        <div className="projects-grid">

          {/* Loop over the projects array.
              'project' = current object. We destructure nothing here — we access each
              field with dot notation: project.title, project.bullets, project.tech.
              'key={project.title}' uses the title as the unique React key for this card. */}
          {projects.map((project) => (
            <div key={project.title} className="project-card">

              {/* Card title */}
              <h3>{project.title}</h3>

              {/* Bullet list of what the project does.
                  Nested .map(): we're inside the outer .map() for projects,
                  and now we loop over each project's bullets array.
                  'b' = current bullet string. key={b} works because all bullets are unique. */}
              <ul>
                {project.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {/* Tech tag row — each technology gets its own <span> pill.
                  't' = current tech string. */}
              <div className="project-tech">
                {project.tech.map((t) => (
                  // Each <span> is a small badge showing one technology.
                  <span key={t}>{t}</span>
                ))}
              </div>

            </div>
          ))}

        </div>{/* end .projects-grid */}
      </div>
    </section>
  );
}
