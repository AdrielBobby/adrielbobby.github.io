import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import DecryptText from './DecryptText';
import GlowCard from './GlowCard';

// Optional: add a `url` field if you want this project card to show
// the top-right external-link / GitHub arrow.
// Example:
// url: 'https://github.com/yourusername/your-repo'
// If `url` is omitted, no arrow will be shown for that project.
const projects = [
  {
    title: 'Vaccine Dispatch Tracker',
    blurb: ' A full-stack vaccine inventory and logistics management system featuring a modern GUI, automated order tracking, and real-time data visualization.',
    tech: ['Python', 'MySQL', 'Matplotlib', 'MySQL', 'CustomTkinter'],
    url: 'https://github.com/AdrielBobby/vaccine-dispatch-project'
  },
  {
    title: 'ESP32 Marauder',
    blurb: 'Wi‑Fi/Bluetooth pentesting toolkit built on ESP32 with Marauder firmware for wireless auditing.',
    tech: ['ESP32', 'Arduino IDE', 'Marauder Firmware', 'Wireshark'],
  },
  {
    title: 'Homelab for Cybersecurity',
    blurb: 'Self-hosted lab environment with VMs and vulnerable boxes for hands-on penetration testing practice.',
    tech: ['VirtualBox', 'Ubuntu Server', 'Kali Linux', 'pfSense', 'Docker'],
  },
  {
    title: 'PoolDetect AI – High-Speed Satellite Pool Detection',
    blurb: 'End-to-end satellite image pipeline that detects swimming pools using a custom OpenCV morphology approach—sub‑0.1 s per image on CPU.',
    tech: ['Python', 'OpenCV', 'NumPy', 'Nominatim API', 'Esri World Imagery'],
    url: 'https://github.com/AdrielBobby/ai-swimming-pool-detection'
  },
  {
    title: 'MIS-COMMUNICATION-NATER',
    blurb: 'Experimental AI communication system on Raspberry Pi where two models talk to each other instead of answering user queries.',
    tech: ['Raspberry Pi 4B', 'Raspberry OS Lite', 'StableLM Zephyr 3B', 'LEDs', 'Web UI'],
  },
  {
    title: 'Mend Your Heart Game',
    blurb: 'A cozy Valentine’s Day pixel art adventure where players mend a broken heart through meaningful NPC interactions, acts of kindness, and a series of charming minigames.',
    tech: ['Love 2D', 'Lua', 'Pixel Art'],
    url: 'https://github.com/AdrielBobby/Mend-your-heart-game'
  },
  {
    title: 'Pong Game',
    blurb: 'Face‑powered two‑player Pong game that uses webcam face capture as the in‑game ball and winner animation, built with a custom Tkinter GUI and basic physics.',
    tech: ['Python', 'tkinter', 'OpenCV', 'Pillow', 'NumPy']
  },
  {
    title: 'Spotify Tracks Data Analysis',
    blurb: 'Exploratory data analysis of a Spotify tracks dataset, cleaning audio‑feature data and generating insight‑driven visualisations on popularity, tempo, genre, and correlations.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
  },
  {
    title: 'Calm-Cockpit',
    blurb: 'An elegant, all-encompassing dashboard for tracking academics, finances, and goals. Features a custom-built responsive sidebar navigation, dark-mode glassmorphism, and secure, encrypted local data storage',
    tech: ['Python', 'Flask', 'SQL', 'JS', 'CSS Grid'],
    url: 'https://github.com/AdrielBobby/calm-cockpit-multipage-version'
  }
];

// ProjectCard is a separate component so each card can have its own useInView hook.
// (You can't call hooks inside .map() directly — React rules require hooks at the
// top level of a component function.)
function ProjectCard({ project, index }) {
  const ref = useRef(null);

  // Watch this individual card.
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <GlowCard
      as={motion.div}
      ref={ref}
      className="project-card"
      // initial state: invisible, slightly below final position
      initial={{ opacity: 0, y: 40 }}
      // animate to: visible + normal position, with stagger delay
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      // transition stagger helps items animate in sequentially
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: 'easeOut',
      }}
    >
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-link"
            aria-label={`Open ${project.title} on GitHub`}
            style={{ top: '0', right: '0' }}
          >
            ↗
          </a>
        )}
        <h3>{project.title}</h3>
        <p className="project-blurb">{project.blurb}</p>
        <div className="project-tech">
          {project.tech.map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
    </GlowCard>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">
          <DecryptText text="Projects" speed={35} />
        </h2>
        <div className="projects-grid">
          {/* Pass the index so each card gets its own stagger delay */}
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
