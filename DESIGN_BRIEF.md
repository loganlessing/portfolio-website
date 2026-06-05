# Design Brief — Logan Lessing Portfolio

## Reference Site
https://jacobschwartz.framer.ai/ — use this as the primary visual and structural reference. Study every page before building.

---

## Visual Style
- White background, clean and minimal throughout
- Accent color: muted steel blue (`#2c6e9e`)
- Generous whitespace — never crowd elements
- System font stack, clean weights
- Subtle scroll animations: elements fade/slide in as they enter the viewport (use Intersection Observer or AOS)
- Subtle card hover effect (slight lift or shadow)

## Color Usage
Apply the accent color in these specific places only — nowhere else unless explicitly instructed:

- **Buttons** (LinkedIn, resume download): filled accent blue with white text
- **Tech/tools tags** on project pages: small pill badges with a light blue tint background and accent blue text
- **Project card year label**: year displayed in accent color next to the project title on each card
- **Nav hover**: nav items turn accent blue on hover
- **Project page section headings (h3)**: thin 3px left border in accent color, giving each process section a structured, engineered feel

All color usage should feel like punctuation — noticed when you look, not the first thing you see.

---

## Navigation
Three items, centered and floating in the middle of the page (not spread to the edges). Make the nav text slightly larger than Jacob's — it should feel like a headline element, not a small utility bar. Same across all pages:

```
        Projects    About    Contact
```

No resume link in the nav.

---

## Pages

### `index.html` — Homepage

**Hero section** (above the fold):
- Wrap the entire hero in a subtle color band (a very light tinted background — soft warm gray, pale blue, or similar — that sits behind the photo and intro text to give the section a distinct, grounded feel without being loud)
- Left: square or rounded photo of Logan — make this large, it should feel prominent
- Right: name, title/tagline (one strong line like "Engineer focusing on X"), 2–3 sentence bio, LinkedIn button

**Project grid** (below hero):
- The project grid section has a **light gray background** (`#f4f4f4` or similar) to visually separate it from the white hero above — this creates a clear two-zone layout on the homepage
- Apply a **parallax scrolling effect** to this section so the background moves at a slightly different speed than the content as the user scrolls — gives the page depth and a sense of motion without being distracting
- Small label above the grid: "Click project photos to learn more"
- Grid layout: **2 columns × 3 rows** (not wider) — cards should be tall and prominent, not small thumbnails
- Each card shows a large cover photo, project title, and year
- Clicking a card opens its individual project page

---

### `projects/[project-name].html` — Individual Project Pages

Laid out as a narrative in process order, exactly like Jacob's project pages. Each section has a named heading (h3) and content flows top to bottom:

1. Project title (large, h1) + year
2. Links to any reports, papers, or GitHub repos
3. Named sections in workflow order, for example:
   - Overview / Abstract
   - Problem Statement
   - Design & Process (with images and diagrams)
   - Results
   - Photos
   - Future Steps (if relevant)
4. Full-width images and diagrams inline within sections
5. Embedded YouTube video if there is a demo
6. Optional: Three.js interactive 3D model viewer (`.glb` file) — Three.js is already wired up in `js/main.js`
7. Tech/tools tags at the bottom

---

### `about.html` — About Page

- Short bio (3–5 sentences)
- Contact links: LinkedIn, email
- Resume embedded directly in the page (like Jacob's) — render it visually so it can be read without downloading
- Resume download button below or beside the embed (links to `assets/resume.pdf`)

---

## File Organization

```
portfolio-website/
├── index.html
├── about.html
├── projects/
│   └── [project-name].html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── [project-name]/
│       ├── cover.jpg       ← homepage card image
│       ├── photo-1.jpg
│       └── diagram-1.png
├── assets/
│   └── resume.pdf
├── DESIGN_BRIEF.md
└── WORKFLOW.md
```

---

## Iterative Development
This site is built incrementally. Claude Code should **add and refine, never replace** things that are already working. If a section looks good, leave it alone unless Logan explicitly asks for a change. When in doubt, ask before touching something. Preserve all existing structure, content, and decisions unless directly instructed otherwise.

---

## What Not to Build
- No dark theme
- No separate resume page — resume lives on the About page
- No heavy JavaScript frameworks
- No auto-playing video or audio
- Do not add nav items beyond Projects, About, Contact
- Do not spread the nav to the edges of the page — keep it centered
