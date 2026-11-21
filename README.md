# Adriel Bobby: portfolio

Personal portfolio of Adriel Bobby, a cybersecurity and software student who builds things end to end.

**Live site:** https://adrielbobby.github.io/

## What it is

A scroll site plus four case-file pages, with a simpler stacked layout on phones (under 700 px). Plain React, no animation or 3D libraries, no analytics, no cookies and no third-party requests.

| Scene | What it does |
| --- | --- |
| Opening | Green `kv` letters on black, then the green tile blooms behind them. Scrolling grows it into a green page that redraws itself as a hand-drawn face logo (scroll-linked). Skip link included. |
| Who I am | The logo breaks into `. , : - + *` symbols that settle into a symbol portrait while the headline and two stat tiles enter. |
| Projects | Four featured projects as a pinned horizontal strip (each opens a case file) and eleven smaller ones. The page takes each project's colour as you reach it. |
| Skills | Six branches, 76 skills as icon tiles (34 logos from Simple Icons, 42 custom glyphs), drawn in on scroll. |
| Experience | Roles, credentials, awards and education as ruled rows, reached through a symbol ripple from Skills. |
| Contact | A halftone dissolve to black, then a live `contact.sh` terminal. Messages post to a Formspree form. |

With a mouse or trackpad the pointer is a blinking terminal caret that leaves a trail of symbols (`src/components/Cursor.jsx`); touch screens and reduced motion keep the normal cursor.

Case files live at `/projects/thaalam`, `/projects/calm-cockpit`, `/projects/medledger` and `/projects/thangan`. There is also a hidden easter egg.

## Tech

| Area | Tools |
| --- | --- |
| Framework | React 18, Vite 7, `react-router-dom` |
| Fonts | Young Serif, Manrope, JetBrains Mono (self-hosted, SIL OFL; licences in `src/fonts`) |
| Icons | Simple Icons (CC0), bundled locally |
| Hosting | GitHub Pages (`gh-pages` branch) |

## Getting started

Node.js 20.19 or later and npm.

```bash
npm install
npm run dev
```

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run contributions` | Save the last year of GitHub activity to `src/data/contributions.json` (needs the GitHub CLI, signed in) |
| `npm run deploy` | Refresh the contributions numbers, build, then publish `dist/` to the `gh-pages` branch |

## Structure

```
public/            Static files: resume PDF, favicons, social card, robots.txt, sitemap.xml, 404.html
src/
  components/      Nav, kv mark, scroll-driven helpers
  data/            Project, case-file and skill content
  lib/scroll.js    The one scroll hook (eased scroll for animations)
  pages/           Home, CaseFile, NotFound
  scenes/          One folder per scene (opening, projects, skills, experience, contact, axolotl)
  styles/          Fonts, design tokens, base styles
docs/              Planning notes and prototypes from the redesign (not part of the site)
```

## Deep links

GitHub Pages has no server routing, so `public/404.html` stores the requested path and redirects to `/`; `src/main.jsx` restores it before the router starts.

## Deploying

`npm run deploy` publishes only the built `dist/` folder. The hidden `/kv` page is a separate repository (`AdrielBobby/kv`) and is not affected.

Before merging this work into `main` or pushing planning branches, remove `docs/content-inventory.md`: it holds private details and must not be published.
