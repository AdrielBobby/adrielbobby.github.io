// Projects.jsx — Neon pulse on scroll entry + stagger reveal per card.

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import DecryptText from './DecryptText';

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
    bullets: ['Setup and customization for wireless auditing: deauth, sniffing, scanning.'],
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
      'Built an end-to-end pipeline that turns zip codes into satellite tiles and automatically detects swimming pools.',
      'Replaced heavy YOLO-style models with a custom OpenCV pipeline using morphology and heuristics — sub‑0.1s per image on CPU.',
      'Added multi-stage false-positive filters, four-way pool classification, and change detection.',
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

// ProjectCard is a separate component so each card can have its own useInView hook.
// (You can't call hooks inside .map() directly — React rules require hooks at the
// top level of a component function.)
function ProjectCard({ project, index }) {
  const ref = useRef(null);

  // Watch this individual card.
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="project-card"
      // initial state: invisible, slightly below final position
      initial={{ opacity: 0, y: 40 }}
      // animate to: visible + normal position, with stagger delay
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12, // stagger — each card is 120ms behind the previous
        ease: 'easeOut',
      }}
      // whileHover triggers when the mouse is over the card.
      // boxShadow adds the neon purple glow on hover.
      whileHover={{
        scale: 1.02,  // slightly enlarges the card
        boxShadow: '0 0 24px rgba(139, 92, 246, 0.5)', // purple neon glow
        borderColor: '#8b5cf6', // purple border
        transition: { duration: 0.2 },
      }}
    >
      <h3>{project.title}</h3>
      <ul>
        {project.bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
      <div className="project-tech">
        {project.tech.map((t) => <span key={t}>{t}</span>)}
      </div>
    </motion.div>
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
