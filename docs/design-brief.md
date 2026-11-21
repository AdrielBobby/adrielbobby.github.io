# Design brief: Adriel Bobby portfolio rebuild

Status: **approved by Adriel.** Desktop only. Details and history live in `plan.md`; this page is the single source for the build.

## 1. Goal
A technical-editorial portfolio that shows real, checkable work first and personality second. Easy to read, one clear path to projects and contact. Replaces the current purple-gradient React site.

## 2. Scope
- **Pages:** `/` (the scroll site) and four case files: `/projects/thaalam`, `/projects/calm-cockpit`, `/projects/medledger`, `/projects/thangan`. Resume is a PDF link. A simple 404.
- **Desktop only.** Phones get their own planning pass later.
- **Not included:** blog, theme toggle, analytics, 3D scene, sound.

## 3. Visual system
- **Type:** Young Serif (headlines, one weight, no italic), Manrope (body, nav, buttons), JetBrains Mono (metadata labels). Self-hosted woff2.
- **Colour:** graphite `#0f1211` and `#1a1f1d`, pale grey `#e7e9e6`, patina green `#4fb08a` on dark and `#337058` on light. Project accents come from each project's own screenshots, applied as a soft page tint plus an accent: Thaalam amber (#835d00 on #efe9d9), Calm Cockpit orange (#a54500 on #f6e6dd), MedLedger forest green (#1e5c47 on #dcefe7), Thangan blue (#2d63ba on #e1eaf9), each 4.8:1 or better. The old purple gradient is gone.
- **Marks:** the **kv mark** (notched tile, kv cut out) for the nav and favicon; the **face logo** (version B, recoloured) at the end of the opening. Final SVGs are made at build time with text converted to outlines.
- **Surfaces:** flat colour, ruled lines, mono captions. No glass, no gradients as decoration.

## 4. Home page, top to bottom
1. **Opening** (graphite, green, pale grey). Loads on green `kv` letters on black; after about a second the green tile blooms behind them and the letters turn black (skipped if the visitor scrolls, and with reduced motion). Scrolling then grows the tile to a green page, the kv becomes stroke letters, the brush strokes paint on, the page fades to pale grey. About 5.6 screens, eased scroll. "Skip intro" link. Prototype: `hero-sketch.html`.
2. **Who I am** (pale grey). The finished face logo breaks into `. , : - + *` symbols that sweep left to right and settle into the symbol portrait on the right (no zoom). The text enters scroll-linked: label, then a very large Young Serif headline whose words rise out of a mask, then the role line, then two stat tiles. Faint scroll-linked halftone field behind. Copy (Adriel's picks): headline "I build things end to end, then try to break them."; role line "Cybersecurity and software student who builds things end to end."; tiles **10+ Projects built** and **3 Awards won** (numbers only, no detail lines). A certificates tile is added later if more come. Prototypes: `transition-sketch.html` (full opening plus handoff), `portrait-sketch.html`.
3. **Projects** (pale grey, page takes each project's accent as reached). The four featured projects as a pinned horizontal strip: scrolling down slides the cards sideways, one project per screen, with a thin progress line and the page tint changing per card; the strip slides in as the stage rises and drifts off as it lets go. Each card opens its case file. With reduced motion the cards stack vertically. Then **Other projects**: a three-column tile grid (name, GitHub arrow when public, two or three line description, stack chips), opening GitHub. Tiles (11, in this order): ESP32 Marauder, PoolDetect AI, Mis-Communication-Nater, Mend Your Heart, RSMS-Reimagined, Student Marks Tracker, Spotify Tracks Data Analysis, Pong Game, Gemini Context Monitor, SkyBrief, Vaccine Dispatch Tracker. Wording comes from the current site where it exists. Prototype: `projects-sketch.html`.
4. **Skills** (graphite). A large headline, then a vertical list of the six branches on the left and the selected branch's clusters on the right as icon tiles on branch lines (76 skills; 34 real logos, 42 custom glyphs). Click a tile for where it was used. On first arrival the draw-in is scroll-linked: branch lines draw, then each tile's outline is drawn round, then the icon and caption fade in (and reverse on scroll back). Switching branch replays a quick version. Prototypes: `skills-scene-sketch.html`, `skill-tree.html`, `glyph-sketch.html`.
5. **Experience** (pale grey). A sticky headline column on the left; on the right, plain ruled rows in four groups (Experience, Credentials, Awards, Education), each with a mono date or prize, a Young Serif title, an org line and an optional caption. Not a timeline. Skills becomes this scene through a ripple: a graphite cover over the top of the scene clears outward from the middle of the window as a ring of `. , : - + *` symbols, scroll-linked, revealing the pale page (not drawn with reduced motion). Rows fade up once. The first group's label is hidden visually (it repeats the section tag) but kept for screen readers. Prototype: `experience-sketch.html`. Hackathons and credentials sit here (VAWT and KruizeX prizes belong in these rows; Mis-Communication-Nater does not).
6. **Contact** (halftone dissolve to black). A pale "Let's talk." screen, then black dots grow across the page, scroll-linked, until it is black. A `contact.sh` terminal then types itself in once. It is live: `help`, `email`, `github`, `linkedin`, `resume`, `projects`, `message` (name, optional email, message, posted to the existing Formspree form), `clear`, and one hidden easter egg. Open mail client and Copy email buttons stay for people who will not type. Prototype: `contact-sketch.html`.
7. **Easter egg: the axolotl** (replaces the footer "psst" line as the visible hint). Appears bottom-right once the Contact terminal has finished typing, pinned to the bottom of the window so it stays in view (not cut off) when the page scrolls on into the footer. A green axolotl (site green) whose face is the kv logo. First only its head pops up over the bottom edge with its hands on the ledge, and a comic bubble says "psst psst"; the head bobs and the bubble pulses gently while it waits. Clicking (or Enter) makes the bubble pop away and the axolotl climb up and lift a poster: "know what kv stands for? click here to type". Clicking the poster opens the existing "what does kv stand for?" terminal, which checks the answer and redirects to the hidden page (the current soft gate is kept; the answer is never written into docs). There is no visible footer hint line (Adriel's call); a "psst, know what kv stands for?" footer button stays in the page but is invisible until reached with the Tab key, so keyboard and screen-reader users still have a way in. Reduced motion: head and bubble sit still, click goes straight to the poster. Prototype: `axolotl-sketch.html`.

Rhythm: light, light, dark, light, black, so no two heavy scenes touch.

## 4b. Cursor
Mouse and trackpad only (not touch screens, not with reduced motion). The pointer becomes a blinking green terminal caret (solid while moving, blinking when still) that turns into `[ ]` over links and buttons, and it leaves a trail of the site's own symbols (`. , : - + *`) as it moves: about two symbols every 4 px, 10 to 19 px tall, fading over about a second. The colour follows the surface (green on dark, deep green on pale, graphite on the opening's green tile). In typing areas (the contact and kv terminals, inputs) the normal text cursor returns and the trail pauses. Constants for density, size and fade are at the top of `src/components/Cursor.jsx`.

## 4c. Phone layout
Under 700 px wide the site switches to simpler, stacked layouts (`src/lib/phone.js`, plus `@media (max-width: 700px)`); tablets and landscape phones keep the desktop layout.
- **Opening and Who I am:** a shorter track (340vh) that ends with the finished face logo; the symbol handoff is dropped. Who I am is a plain stacked section (text, stat tiles, then the symbol portrait drawn once by `staticPortrait.js`).
- **Nav:** tap the kv mark for a vertical menu; it closes on a link tap, a tap outside, or Escape. Hover only counts where a device can hover.
- **Projects:** the four cards stack (the same layout reduced motion uses), with the tint changing as each reaches the middle. The other projects are one column.
- **Skills:** the branch tabs scroll sideways above a single column of tiles; the detail line sits above the tiles; a quick entrance replaces the scroll-linked draw-in.
- **Experience:** one column, dates above titles; the Skills-to-Experience ripple stays with smaller symbols.
- **Contact:** the 200vh dissolve; the terminal has a 16px input (no iOS zoom), stacked prompts, a `<form>` so the keyboard's Go/Send key works, an email keyboard on the email step, and tappable command chips (message, help, resume, projects, email).
- **Axolotl and kv dialog:** a smaller axolotl (150px) clear of the buttons; the kv dialog sits near the top so the keyboard does not cover it, locks page scroll, and has a 44px close button.
- **Case files:** the picture first, then the file card, then the story; the process steps stack with down arrows; screenshots open full size in a new tab.
- **Everywhere:** stage heights use `svh` and `scroll.js` takes its viewport height from a `100svh` probe, so a phone's sliding URL bar does not shift the pinned scenes; `:hover` styles only apply where hover exists; touch targets are 44px or more.

## 5. Navigation
Fixed top-centre kv pill. Collapsed: the mark only. Expanded (hover or focus; click pins): About, Projects, Skills | kv | Experience, Contact, Resume (outlined, opens the PDF). Active section gets the surface accent and a dot. Pill colour follows the scene. Only the mark shows during the opening. On load the mark draws itself on once: its outline is drawn round, then the tile, letters and pill fill in (after the opening intro on the home page). On case files the same pill, Projects active, plus a back link. Prototype: `navbar-sketch.html`.

## 6. Case file page
Always dark graphite with the project accent. Sticky "file card" on the left (status, context, stack, links) with scroll-spy contents; content on the right in this order: Outcome, Problem, What was built, My part, Key decisions, Evidence, Links. Previous and next move between files; "Back to projects" returns to the right scroll position. Prototype: `casefile-sketch.html`.

- **Media:** Adriel supplies pictures for all four. Each has a lead image on the file card and an Evidence gallery of captioned photos, screenshots and short silent looping clips. Thaalam shows both the hardware (glove, drums) and the UI.
- **Copy:** `case-files.md`. Wording rule: no "built it all from scratch myself" claims; talk about ideas, design and decisions; credit others' code (Ryyan Safar's ESE calculator in Calm Cockpit).
- **Thangan:** private repo, so writing only, no repo link, marked in progress; its "honest limits" (Discord replies pass through Discord, no per-user allowlist) stay on the page.

## 7. Motion
- Three kinds only: scroll-linked, triggered once, hover or focus.
- Timing: hover 150 ms; small state 250 to 400 ms; scene entrance 500 to 700 ms; ease `cubic-bezier(.2,.8,.2,1)`; no bounce.
- Global eased scroll (factor about 0.12); no scroll-jacking.
- Never animates: body text, anything shifting layout while reading, loops (except the terminal cursor and the axolotl's small idle bob, bubble pulse and gill sway, which stop with reduced motion), flashing, sound.
- Reduced motion: finished logo and portrait, instant colour changes, straight cut to dark, instant terminal, no eased scroll.
- Home to case file is a plain cut for now.
- Only transform, opacity and canvas animate; 60 fps target.

## 8. Technical
- React 18 + Vite, GitHub Pages via `gh-pages`, `react-router-dom` with a `404.html` redirect for deep links.
- Drop `three`, `postprocessing`, `react-github-calendar`, `framer-motion`.
- One scroll hook plus IntersectionObserver for the nav; two canvases (portrait, dissolve).
- Logos bundled locally from Simple Icons; trademark line sits in the Skills scene, under the tiles, so it is seen where the logos are shown. Fonts self-hosted, licences kept in the repo.
- WebP images sized to display width, lazy-loaded; clips muted and paused off screen.
- Resume at `public/Resume.pdf` (replaces `Resume_v3.pdf`).
- Metadata: per-page titles, description, Open Graph card (kv tile), theme colour, favicon (SVG plus PNG), `robots.txt`, sitemap.
- No analytics, cookies or third-party requests. `content-inventory.md` is never published.
- Budget: first load under about 150 KB gzipped JS, LCP under 1.5 s, no layout shift.
- Accessibility: landmarks, skip link, visible focus, 4.5:1 contrast on every accent, text alternatives for the canvases.

## 9. What Adriel still supplies
- Resume PDF (new version).
- Pictures and clips for all four projects (Thaalam: hardware and UI).
- Your own wording for the 11 Other projects tiles (current-site wording is used until then).
- Resume link, the real email address and the Formspree endpoint carry over from the current site.
- Review of all four case-file drafts once before launch.
- Evidence for three Thangan figures (114 of 115, 91 of 115, about 0.1 s median), or they stay off the page.
- Optional: more detail for MedLedger's "My part"; Torn view for Calm Cockpit once it exists.

## 10. Build order
1. Project scaffold: routing, fonts, tokens, 404 redirect, deploy check.
2. Nav and scroll hook.
3. Opening.
4. Who I am with portrait.
5. Projects list, other-projects tiles.
6. Case-file template, then the four files.
7. Skills.
8. Experience.
9. Contact and dissolve, then the axolotl easter egg.
10. Metadata, accessibility, performance and link checks, deploy.

## 11. Approval
Approved by Adriel after the axolotl was added (the brief now covers every scene). The build is a fresh React/Vite structure, section by section, in the order above. Changes to this brief are made here and in `plan.md` first.

### 4d. GitHub contributions
At the end of Projects, under the smaller builds: a skyline of the last year, one column of symbols per week (`:` body, `*` top; heights follow the square root of the week's count so quiet weeks show). The columns rise left to right when it scrolls into view. Numbers are saved in `src/data/contributions.json` by `scripts/fetch-contributions.mjs`, which runs before every deploy through the GitHub CLI (no token on the site, no request from the page; if the fetch fails the saved numbers are kept). Phones show the last 28 weeks so each column fits its symbol.
