# Adriel Bobby — Portfolio

Personal portfolio of Adriel Bobby, a Computer Science Engineering student specializing in cybersecurity and ethical hacking.

**Live site:** https://adrielbobby.github.io/

## Overview

A single-page site with a terminal-inspired design that presents my background, work, and security interests.

### Sections

- **Boot sequence:** a fullscreen terminal loader that transitions into the hero.
- **Hero:** an interactive WebGL pixel-grid background with animated entrance.
- **About:** background, technical skills, focus areas in offensive security, web application security, and network security, and a GitHub contribution calendar.
- **Education:** B.Tech in Computer Science Engineering at Rajagiri School of Engineering and Technology (2024–2028), plus CBSE Class X and XII.
- **Experience:** Cybersecurity Intern at Kerala Police Cyberdome (Android malware analysis with MobSF, Frida, Genymotion, and ADB).
- **Leadership and Communities:** Electronic Communications Coordinator and Technical Coordinator at IEEE RSET Student Branch.
- **Certifications:** including the Certified Penetration Tester course from RedTeam Academy.
- **Projects:** Vaccine Dispatch Tracker, ESP32 Marauder, a cybersecurity homelab, PoolDetect AI, Calm-Cockpit, and other builds.
- **Hackathons:** prize-winning submissions, including a vertical-axis wind turbine street lamp and the KruizeX transit queue ideathon.
- **Contact:** an interactive "Secure Uplink" console with an ASCII satellite and a decryption animation that reveals email and social links.

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 18, Vite |
| Animation | Framer Motion, CSS animations |
| Graphics | Three.js, postprocessing (WebGL) |
| Data | react-github-calendar (contribution graph) |
| Deployment | GitHub Pages via `gh-pages` |

## Getting Started

**Prerequisites:** Node.js 20.19 or later and npm.

```bash
# Clone the repository
git clone https://github.com/AdrielBobby/adrielbobby.github.io.git
cd adrielbobby.github.io

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Publish `dist/` to GitHub Pages |

## Project Structure

```
├── public/            Static assets (resume PDF, favicon)
├── src/
│   ├── components/    Section and UI components
│   ├── App.jsx        App shell and loader state machine
│   ├── main.jsx       Entry point
│   └── index.css      Global styles and theme variables
├── index.html
└── vite.config.js
```

## Deployment

Run `npm run deploy` to build the site and publish `dist/` to the `gh-pages` branch.

## Contact

Reach me through the contact section on the [live site](https://adrielbobby.github.io/).
