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

// Other projects, in Adriel's order. Wording is shortened from the current site
// (RSMS-Reimagined and SkyBrief from their GitHub pages) until Adriel rewrites it.
// No url means the repo is not public, so the tile has no GitHub arrow.
const GH = 'https://github.com/AdrielBobby/';
export const otherProjects = [
  { name: 'ESP32 Marauder', text: 'Wi-Fi and Bluetooth pentesting toolkit built on an ESP32 with Marauder firmware, for wireless auditing.', stack: ['ESP32', 'Arduino IDE', 'Wireshark'] },
  { name: 'PoolDetect AI', url: GH + 'ai-swimming-pool-detection', text: 'Finds swimming pools in satellite imagery with a custom OpenCV morphology approach, under 0.1 s per image on CPU.', stack: ['Python', 'OpenCV', 'NumPy'] },
  { name: 'Mis-Communication-Nater', text: 'Experimental AI system on a Raspberry Pi where two models talk to each other instead of answering user queries.', stack: ['Raspberry Pi 4B', 'StableLM Zephyr 3B', 'LEDs'] },
  { name: 'Mend Your Heart', url: GH + 'Mend-your-heart-game', text: 'A cozy Valentine’s Day pixel art adventure: mend a broken heart through NPC interactions, kindness and minigames.', stack: ['Love2D', 'Lua', 'Pixel art'] },
  { name: 'RSMS-Reimagined', url: GH + 'RSMS-Reimagined', text: 'A privacy-safe student-portal demo with timetable, attendance eligibility and a leave planner, using fictional data.', stack: ['React', 'Express', 'SQLite'] },
  { name: 'Student Marks Tracker', url: GH + 'student-marks-tracker', text: 'Internship performance dashboard with holiday-aware mark entry, student visibility windows and scorecards with performance bands.', stack: ['TypeScript', 'SQLite'] },
  { name: 'Spotify Tracks Data Analysis', text: 'Exploratory analysis of a Spotify tracks dataset: cleaning audio features and charting popularity, tempo, genre and correlations.', stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'] },
  { name: 'Pong Game', text: 'Face-powered two-player Pong that uses webcam face capture as the ball and winner animation, with a custom Tkinter GUI.', stack: ['Python', 'tkinter', 'OpenCV', 'Pillow', 'NumPy'] },
  { name: 'Gemini Context Monitor', url: GH + 'gemini_context_monitor', text: 'Developer dashboard for real-time tracking, history and token optimisation of Gemini CLI context windows.', stack: ['Python', 'CustomTkinter', 'SQLite'] },
  { name: 'SkyBrief', url: GH + 'skybrief', text: 'A simple weather dashboard.', stack: ['HTML', 'CSS', 'JavaScript', 'Open-Meteo'] },
  { name: 'Vaccine Dispatch Tracker', url: GH + 'vaccine-dispatch-project', text: 'Full-stack vaccine inventory and logistics system with a GUI, automated order tracking and real-time visualisation.', stack: ['Python', 'MySQL', 'CustomTkinter', 'Matplotlib'] },
];
