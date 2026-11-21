import { pics } from './pictures.js';

// The four featured projects, in the order they appear on the home page.
// Their case-file copy lives in caseFiles.js.
export const projects = [
  {
    slug: 'thaalam',
    name: 'Thaalam',
    summary: 'A glove that teaches chenda rhythms. On-device Gemma turns a track into a finger-by-finger lesson and coaches in Malayalam.',
    meta: ['Hackathon winner', 'Best Use of Gemma', 'Python, FastAPI, Raspberry Pi'],
    media: [
      { kind: 'hardware', pic: pics.thaalamGlove },
      { kind: 'ui', pic: pics.thaalamDashboard },
    ],
  },
  {
    slug: 'calm-cockpit',
    name: 'Calm Cockpit',
    summary: 'A personal dashboard for my own student life, built because my college portal would not show me my attendance percentage.',
    meta: ['In use', 'Built for myself', 'Flask, SQLite, Chart.js'],
    media: [{ kind: 'main', pic: pics.calmOverview }],
  },
  {
    slug: 'medledger',
    name: 'MedLedger',
    summary: 'A DBMS class microproject that grew into a pharmacy stock system. The database itself refuses to sell expired or missing stock.',
    meta: ['Complete', 'Oracle 23ai in Docker', 'React, Node, TypeScript'],
    media: [{ kind: 'main', pic: pics.medOverview }],
  },
  {
    slug: 'thangan',
    name: 'Thangan',
    summary: 'A local AI second brain that answers questions about my college life in plain English. It runs on my own machine and is strictly read-only.',
    meta: ['In progress', 'Private', 'Python, Ollama, Llama 3.1'],
    media: [{ kind: 'main', pic: pics.thanganTerminal }],
  },
];

export const findProject = (slug) => projects.find((p) => p.slug === slug);

// Other projects, in Adriel's order. Wording is taken from the previous site
// (RSMS-Reimagined and SkyBrief from their GitHub pages).
// No url means the repo is not public, so the tile has no GitHub arrow.
const GH = 'https://github.com/AdrielBobby/';
export const otherProjects = [
  { name: 'Virtual SOC Lab', text: 'A virtual blue-team lab in VirtualBox: an OPNsense firewall with Suricata intrusion detection, a transparent Squid proxy and Zenarmor, plus a Wazuh SIEM collecting alerts from a Kali machine on the private network behind it. Built from a lab series, then debugged myself, from DHCP and NAT faults to why Suricata stayed silent until its rule direction matched.', stack: ['OPNsense', 'Suricata', 'Wazuh', 'VirtualBox'] },
  { name: 'Prem Predictor', url: GH + 'prem-predictor', text: 'A Premier League predictor that combines Elo, a Poisson goals model and logistic regression into win/draw/loss odds and a likely scoreline, with a local LLM explaining each pick. Predictions are frozen at the FPL deadline and later checked against real results and the bookmakers, so the record cannot be rewritten. Tracking since GW11.', stack: ['Python', 'FastAPI', 'scikit-learn', 'Ollama'] },
  { name: 'Disk Declutter', url: GH + 'Disk-Declutter', text: 'A Windows CLI that scans for unused apps, stale files, duplicates and cache junk, ranks them by how safe they are to clear, and moves your picks to the Recycle Bin from an interactive HTML report. An optional local LLM gives a second opinion.', stack: ['Python', 'Ollama', 'send2trash', 'pytest'] },
  { name: 'ESP32 Marauder', text: 'Wi‑Fi/Bluetooth pentesting toolkit built on ESP32 with Marauder firmware for wireless auditing.', stack: ['ESP32', 'Arduino IDE', 'Wireshark'] },
  { name: 'PoolDetect AI', url: GH + 'ai-swimming-pool-detection', text: 'End-to-end satellite image pipeline that detects swimming pools using a custom OpenCV morphology approach, sub‑0.1 s per image on CPU.', stack: ['Python', 'OpenCV', 'NumPy'] },
  { name: 'Mis-Communication-Nater', text: 'Experimental AI communication system on Raspberry Pi where two models talk to each other instead of answering user queries.', stack: ['Raspberry Pi 4B', 'StableLM Zephyr 3B', 'LEDs'] },
  { name: 'Mend Your Heart', url: GH + 'Mend-your-heart-game', text: 'A cozy Valentine’s Day pixel art adventure where players mend a broken heart through meaningful NPC interactions, acts of kindness, and a series of charming minigames.', stack: ['Love2D', 'Lua', 'Pixel art'] },
  { name: 'RSMS-Reimagined', url: GH + 'RSMS-Reimagined', text: 'A privacy-safe student-portal demo with timetable, attendance eligibility and a leave planner, using fictional data.', stack: ['React', 'Express', 'SQLite'] },
  { name: 'Student Marks Tracker', url: GH + 'student-marks-tracker', text: 'An internship performance dashboard featuring holiday-aware mark entry (skipping Sundays and 2nd Saturdays), active-window student visibility, and aggregate scorecards with qualitative performance bands.', stack: ['TypeScript', 'SQLite'] },
  { name: 'Spotify Tracks Data Analysis', text: 'Exploratory data analysis of a Spotify tracks dataset, cleaning audio‑feature data and generating insight‑driven visualisations on popularity, tempo, genre, and correlations.', stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'] },
  { name: 'Pong Game', text: 'Face‑powered two‑player Pong game that uses webcam face capture as the in‑game ball and winner animation, built with a custom Tkinter GUI and basic physics.', stack: ['Python', 'tkinter', 'OpenCV', 'Pillow', 'NumPy'] },
  { name: 'Gemini Context Monitor', url: GH + 'gemini_context_monitor', text: 'A high-performance developer dashboard for real-time tracking, historical analytics, and token optimization of Gemini CLI context windows.', stack: ['Python', 'CustomTkinter', 'SQLite'] },
  { name: 'SkyBrief', url: GH + 'skybrief', text: 'A simple weather dashboard.', stack: ['HTML', 'CSS', 'JavaScript', 'Open-Meteo'] },
  { name: 'Vaccine Dispatch Tracker', url: GH + 'vaccine-dispatch-project', text: 'A full-stack vaccine inventory and logistics management system featuring a modern GUI, automated order tracking, and real-time data visualization.', stack: ['Python', 'MySQL', 'CustomTkinter', 'Matplotlib'] },
];
