# Portfolio rebuild plan

Status: still planning. Nothing is built until the design brief is approved.

## Decided so far
- **Content inventory** (`content-inventory.md`): projects, resume, LinkedIn posts, GitHub repos compared and reconciled.
- **Direction:** mostly 2D technical-editorial site, dark and light sections used for different content modes, technical credibility first, personality second. Projects feel like case files; the site stays easy to read. Style reference for motion and palette switching: Death Scroll (not Sunny's Journey: no storytelling or timeline walk).
- **Type:** Young Serif (headlines, one weight, no italic), Manrope (body, nav, buttons), JetBrains Mono (metadata labels). All open-licensed per web sources; license files still to be read.
- **Palette:** graphite + patina green (`#0f1211` / `#1a1f1d` / `#e7e9e6`, green `#4fb08a` on dark and `#337058` on light). Project accents rebuilt as a matched set.
- **Skill tree:** the tech stack and skills (70 nodes, six branches), shown as game-style icon tiles on branch lines, click for detail. Security tools are "learned", not tied to projects. Real logos where they exist (42 of 70), custom-drawn glyphs for the other 28 (approved, including the redrawn Hydra and Netcat).
- **Logo:** two marks. The **kv mark** is the solid notched tile with kv cut out (Young Serif letters), used top-centre in the nav and as the favicon. The **logo** is the hand-drawn face, version B (cleaned face, original brush strokes, recoloured). Final SVG and favicon files are made at build time (text converted to outlines). The old purple gradient goes.
- **Opening sequence (approved, prototype: `hero-sketch.html`):** the page loads on the kv tile (Young Serif kv). Scrolling grows the green tile until the page is green. Near 20% the serif kv hands over to stroke letters; the k becomes an X eye, the v bends into the tongue, the second eye splits off. Your own brush strokes then paint on, the tongue fills like liquid, and the page blends from green to white. No black stage. Scroll is eased every frame so it never looks choppy. Reduced motion shows the finished logo. Death Scroll does this kind of thing with hand-authored Rive animations; we keep code-driven SVG and can revisit Rive.

## Still to plan
1. **After the logo (PROPOSED, awaiting Adriel's reaction):** the scenes. Moynihan's ending checked live: the page starts cream with a dollar bill hanging on a fishing line as bait; scrolling dissolves the page through a halftone/dither pattern into black, like descending into the deep, ending on an anglerfish with a glowing lure and bubbles (its scripts are named lure, fish, koi, bubbles, liquid, mark). Proposed scene order, all under a fixed top-centre kv mark and a visible fast path to projects and contact:
   1. Opening (approved): dark, green, pale grey, face logo.
   2. Who I am (pale grey): one headline, role, and three real proof points (Cyberdome internship, Best Use of Gemma, IEEE technical coordinator). No timeline walk. **Adriel's addition:** a portrait of Adriel beside the text, rendered as symbol art (+ - characters), which reveals on scroll: it starts as noise or blank and resolves into the portrait as the section arrives. Needs a photo from Adriel (high contrast, plain background). Approach: canvas 2D, brightness mapped to a character ramp, reveal driven by scroll progress; reduced motion shows the finished portrait; alt text on the canvas.
   3. Projects as case files: the page takes each project's accent colour (Death Scroll style palette switching), scannable list first, case file on click. **Decided:** only select, best projects are featured; hardware projects use a photo of the build as their image. Which projects: still to choose together.
   4. Skill tree (graphite): the approved icon-tile tree. **Open, to discuss:** how it behaves in the page.
   5. Experience and credentials (pale grey): plain ruled rows with a one-line mono caption each, in the Moynihan index style. Not a timeline.
   6. Contact ending (Moynihan style dissolve to dark kept as a candidate): **the phishing lure idea is parked.** Adriel likes the current site's contact section (a `contact.sh` terminal window: `ping adriel`, status online, email / github / linkedin / tinkerhub lines, "press enter to start a conversation", Open Mail Client and Copy Email buttons) and could not think of a replacement. Research on footers found mostly generic advice. **Decided:** keep the terminal, bring it forward in the new palette, reached after a halftone dissolve to dark. The terminal types itself in; visitors can type `help`, `email`, `resume`, `projects` (each prints a real link); buttons stay for people who won't type; on phones, tappable command chips; one hidden easter egg (e.g. `sudo hire adriel`). The portrait photo is `Gemini_Generated_Image_...png` in Downloads (stranger removed with Gemini; face checked against the original, looks unchanged).
   No new illustration is needed in this plan: it uses the face logo, halftone dither and accent palettes. Still open: whether an illustrator or generated art is wanted anyway, and whether one optional 3D moment (Thaalam's chenda stage) is wanted.
2. **Project case-file page:** layout and template. We have no reference for this yet.
3. **Sitemap and page rhythm:** sections and their order, which are green, white or dark, navigation, the fast path to projects and contact, where the skill tree sits.
4. **Content gaps:** final project list (TEDxRSET and Bharat Gas exclusions versus "all projects on GitHub"), how each fork is described, hardware project photos or diagrams, the corrected Cyberdome wording from the updated resume, which resume skills (Prisma, Next.js, pfSense) stay.
5. **Motion rules:** what animates, what never does, reduced-motion behaviour, mobile behaviour of the opening sequence, a skip link or short scroll length, no loader on repeat visits (the current terminal loader and pixel grid go).
6. **Technical decisions:** keep React/Vite and GitHub Pages, bundle Simple Icons locally, read the font license files, trademark footer line for logos, metadata and favicon, resume PDF link, performance budget.
7. **Design brief:** one document that collects all of the above, then approval before any build.

## Pages kept in this folder
- `palette.html`: the final palette (core colours, page sequence, project accents with live contrast).
- `glyph-sketch.html`: the 28 custom skill glyphs.
- `logo.html`: the kv mark and the face logo (version B) on dark, green and light, with size tests.
- `hero-sketch.html`: the opening animation prototype.
- `portrait-sketch.html`: the approved "Who I am" portrait (hoodie photo, sun flattened, hair outline traced by hand, 200x139 grid of `. , : - + *` symbols, scroll reveal from noise). Open items for the build: a coarser grid on phones, alt text, and the final headline and role copy (placeholders now).
- `skill-tree.html`: the final skill tree (70 skills in six branches, icon tiles on branch lines; 42 logos and 28 custom glyphs; click a tile for where it was used).
Earlier sketches (font specimen, palette sketches and comparison, logo sketches, older skill-tree sketches) were removed from the project at Adriel's request. Notes in `reference-reactions.md` that mention those older pages are history.

## After approval
Build: fresh React/Vite structure, section by section.
