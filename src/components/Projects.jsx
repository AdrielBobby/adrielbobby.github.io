// Projects.jsx — Neon pulse on scroll entry + stagger reveal per card.

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import DecryptText from './DecryptText';

const projects = [
  {
    title: 'Vaccine Dispatch Tracker',
    blurb: 'Python and MySQL based system for managing vaccine inventory, order placement, and distribution workflow.',
    tech: ['Python', 'MySQL'],
  },
  {
    title: 'ESP32 Marauder (Wi-Fi & Bluetooth Pentesting Tool)',
    blurb: 'Wi‑Fi/Bluetooth pentesting toolkit built on ESP32 with Marauder firmware for wireless auditing.',
    tech: ['ESP32', 'Arduino IDE', 'Marauder Firmware', 'Wireshark'],
  },
  {
    title: 'MIS-COMMUNICATION-NATER',
    blurb: 'Experimental AI communication system on Raspberry Pi where two models talk to each other instead of answering user queries.',
    tech: ['Raspberry Pi 4B', 'Raspberry OS Lite', 'StableLM Zephyr 3B', 'LEDs', 'Web UI'],
  },
  {
    title: 'PoolDetect AI – High-Speed Satellite Pool Detection',
    blurb: 'End-to-end satellite image pipeline that detects swimming pools using a custom OpenCV morphology approach—sub‑0.1 s per image on CPU.',
    tech: ['Python', 'OpenCV', 'NumPy', 'Nominatim API', 'Esri World Imagery'],
  },
  {
    title: 'Homelab for Cybersecurity',
    blurb: 'Self-hosted lab environment with VMs and vulnerable boxes for hands-on penetration testing practice.',
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
      // transition stagger helps items animate in sequentially
      transition={{
        duration: 0.5,
        delay: index * 0.12, // stagger — each card is 120ms behind the previous
        ease: 'easeOut',
      }}
    >
      <h3>{project.title}</h3>
      <p className="project-blurb">{project.blurb}</p>
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
