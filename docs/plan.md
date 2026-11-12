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
1. **After the logo:** what the next scenes are. Ideas raised: Death Scroll style palette switches per section, and a Moynihan-style ending (dollar-bill bait that changes, symbol art that switches to an ocean scene). Needs the Moynihan symbol-art screenshot Adriel mentioned (it did not arrive). Open: who makes any illustration (Adriel, an illustrator, or generated and edited); whether one optional 3D moment (Thaalam's chenda stage) is wanted.
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
- `skill-tree.html`: the final skill tree (70 skills in six branches, icon tiles on branch lines; 42 logos and 28 custom glyphs; click a tile for where it was used).
Earlier sketches (font specimen, palette sketches and comparison, logo sketches, older skill-tree sketches) were removed from the project at Adriel's request. Notes in `reference-reactions.md` that mention those older pages are history.

## After approval
Build: fresh React/Vite structure, section by section.
