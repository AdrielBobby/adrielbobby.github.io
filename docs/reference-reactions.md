# Reference reactions (batch 1)

| Reference | Reaction notes (Adriel) | Classification |
|---|---|---|
| Persepolis Reimagined (persepolis.getty.edu) | Liked the font and the **2D UI animations** (not the 3D). Liked the **lighting changing as you scroll**. Likes that a 3D world can be explored. | Partial: type, 2D UI motion, scroll-driven lighting. Not 3D. |
| Messenger (messenger.abeto.co) | Liked the **vibrant colors** and the **art style**. Likes the explorable 3D world. Unsure how to use it. | Inspiration: color and illustration; "world" idea needs a 2D translation. |
| Chems.Studio | Site looked broken, skipped. | Skipped (metadata-strip idea stays as my suggestion only, unreacted). |
| Lando Norris (landonorris.com) | Liked the **centered top logo mark** and the **fonts**. Wants his own `kv` logo reworked. | Partial: logo placement, type. |
| PouyaOS (pouyashahri.com) | Liked how interactive it is. Nothing to borrow. | Inspiration only. |

## Fonts found (read from each live page's CSS)

| Site | Role | Font | Notes |
|---|---|---|---|
| Lando Norris | Headings and UI sans | **Mona Sans Variable** (weights 200-900) | Open-source (GitHub's Mona Sans); license to be confirmed before use. |
| Lando Norris | Serif accent words | **Brier** (700 and 400) | Licensing not checked. |
| Persepolis | Headline serif (the one Adriel liked) | **Maghfirea** | Decorative display serif; licensing not checked. |
| Persepolis | UI and small text | **Graphik** (400, 500) | Commercial typeface (Commercial Type), likely paid. |
| Persepolis | Declared but not loaded | Sabon Next, Noto families, Vazirmatn, Martel | Fallbacks and language support. |

## Font licenses (checked via web search, not from the license files themselves)

| Font | Status | Note |
|---|---|---|
| Mona Sans | Free, SIL OFL 1.1 (GitHub repo) | Safe to use. Keep the license file if redistributing. |
| Maghfirea | **Not free for commercial use**; personal-use on download sites, sold by Salsabiyl Studios on MyFonts (from $15 per style) | A personal portfolio can count as commercial. Buy it or pick an alternative. Based on third-party listings. |
| Brier | License not found | Foundry unknown, so treat as paid until verified. |
| Graphik | Commercial (Commercial Type) | Paid. |
| Inter, Libre Baskerville (Areeb Ali's site) | Free, OFL | Not license-checked in this pass, but both are well-known open-source families. |

## Reference batch 2 (live-checked in Chrome; awaiting Adriel's reactions)

| Reference | What I verified | Fonts read from CSS |
|---|---|---|
| Areeb Ali, ree\|b handheld portfolio (areebali.com) | Light grey-blue page with a white handheld device in the center. Press P or the power button and a dark screen lists projects as `01 Resonance 2023-2025`, `02 Echo 2025`, etc., with tabs WORK / AI FILMS / PLAYGROUND, an orange accent, keyboard hints, and a real changelog of site edits. | Inter, Libre Baskerville, system monospace |
| CrowdStrike Adversary Universe (adversary.crowdstrike.com) | Red-on-black world map with a scrollable list of named threat groups ("X Spider") in a red-outlined panel; hero with a masked illustrated figure. Cookie banner and chatbot overlay it. | Neue Haas Grotesk Display, CrowdStrike Sharp Sans |
| Igloo Inc. (igloo.inc) | A 3D igloo of stone blocks in a grey snow landscape; scroll disassembles it. Monospace labels ("// Copyright", "////// Manifesto", "Sound: Off"), small numbered node markers. | Fonts not readable (canvas/WebGL) |
| Neverhack (neverhack.com) | Clean white corporate security site: "AI-native cyber defence.", cards, purple and cyan accents. | Roobert |
| Species in Pieces | Site was down (error page). Not reviewed. | n/a |

Not found or not reviewed yet: Campground, Make Me Pulse, Noth, Lisa, PrimeSec, S0 Animation, Because Recollection, Synchronized, PX Push (PX Push write-up found, site not opened), Orano (URL found, not opened).

### Batch 2 reactions (Adriel)
- Areeb Ali: skipped, and no longer likes it as much.
- CrowdStrike: skipped.
- Igloo: "cool and all but nothing to borrow."
- Neverhack: "really generic," rejected.
- Species in Pieces: site errors, not reviewed.
- Net result: batch 2 added no new references. Fonts are the next concrete decision (see `font-specimen.html`).

### Font choices (Adriel, from font-specimen.html)
- Serif: likes **Fraunces** and **Young Serif**. Dislikes Instrument Serif and thin serifs like Cormorant Garamond.
- Sans: likes **Hanken Grotesk** and **Manrope** (Mona Sans not picked).
- Mono: no preference; use JetBrains Mono.
- Working pairing: Fraunces (headlines) + Hanken Grotesk (body, nav, buttons) + JetBrains Mono (metadata). Young Serif and Manrope are the alternates.

### Final type choice (Adriel, after specimen)
- **Young Serif** (headlines) + **Manrope** (body, nav, buttons) + JetBrains Mono (metadata).
- Licenses: both SIL Open Font License 1.1 per web sources (Young Serif by Bastien Sozeau / NoirBlancRouge; Manrope by Mikhail Sharanda). Both load from Google Fonts in the specimen. License files not read directly yet.
- Young Serif is a single heavy weight with no italic, so accent words must be color-only, not italic.

### Palette decision (Adriel)
- **Graphite + patina green** chosen (graphite `#0f1211`, dark 2 `#1a1f1d`, light `#e7e9e6`, green `#4fb08a` on dark / `#337058` on light). Project accents rebuilt as a matched OKLCH set (see `palette-sketch-3.html`): Security coral-red, Hardware amber, Backend sky blue, Local AI lilac, Dashboards dusty rose. Navy + burgundy was the runner-up (`palette-comparison.html`).
- The first skill-tree preview (in palette-sketch-3) was a color test only, not a design. Adriel found it "pretty bad". Three real directions are in `skill-tree-sketch.html`.

### Skill tree correction (Adriel)
- The skill tree is the **tech stack and skills**, like the current site's `ls skills/` section (languages, tools, databases and platforms, domains), but as a game-style tree (Cyberpunk / Black Myth: Wukong). It is not a project tree. `skill-tree-sketch.html` (project-based) is superseded by `skill-tree-sketch-2.html` (68 stack skills in six branches, click a node to see where it was used).
- Hollow nodes = on the resume but no project listed in the sources read (Prisma, pfSense, Next.js, many security tools).

### Hero + world research (batch 3, awaiting reaction)
- **Sidequest** (Framer template, sidequest-portfolio.framer.website; paid $59): verified live. Flat vector landscape; scrolling walks a character along while the sky and colours shift from purple dusk to teal-green daylight; signposts per section ("What I'm good at", "Where I've worked"); skills as flags with star ratings (self-rated, which conflicts with the no-levels rule). Concept reference only.
- **Folioland** (Framer template, island map with clickable regions) and **Pablo's World** (arrow-key isometric world): found by search, **not opened**.
- Logo decision: face version **B, cleaned face** chosen.

### Hero + world research, round 2 (live in Chrome; awaiting reaction)
Adriel on Sidequest: fits the idea but does not feel like his own; use the style differently.
- **Sunny's Journey** (iamsunnywang.com): verified. Painterly illustrated world; a character walks along a bridge as you scroll or press keys; each life stage is a chapter on a hanging sign ("Prologue: The Water Forest", "2008-2012 Beijing: The Inspiring City"); a progress strip of chapters (Start, College, CMU, Trulia, Google, Airbnb, Art & Jewelry, AI Lab, Thoughts, Reflection); About and Map buttons; sound toggle. Feels like the author's own story.
- **Death Scroll** (deathbyscroll.com): verified. Black page, red and white, heavy wide sans headline with an X mark, illustrated hooded figures around a candle-lit pentagram; strong authored identity. Shares the X motif with Adriel's face logo.
- **Maurice Moynihan** (mauricemoynihan.com): verified first screens. Warm off-white page, hand-drawn blobby display font for the name, huge heavy wide sans section rows separated by rules with a one-line mono descriptor on the right ("Things that made people buy other things."), playful voice. The index-of-rows nav is the transferable idea.
- **Dev in the Hood** (devinthehood.com): loader still at 98% and never reached content in my checks. Not reviewed.

### Adriel's reactions to round 2 and the hero direction (so far)
- **Death Scroll** is the favourite: smooth dynamic switching between light and dark, multiple palettes, the opening where the art is black and white and gains colour as you scroll, and the big scroll-headline moment (not wanted in his own site).
- **Maurice Moynihan:** liked the ending section, the dollar-bill bait that changes, and the symbol art used to switch to the ocean scene (screenshot was mentioned but did not arrive).
- **Sunny's Journey:** disliked; no storytelling or timeline style.
- **Hero concept (Adriel's idea):** on load, show the kv mark. On scroll, the kv *becomes* his logo (not a morph). Prototype: `hero-sketch.html`.

## Open threads
- Find a free alternative for Maghfirea (and decide whether the headline serif needs to be that decorative).
- Logo rework for `kv` is now step 3 in `plan.md`.
- Logo rework for `kv` (monogram, top-center placement).
- How to translate "explorable 3D world" into a mostly-2D site.
