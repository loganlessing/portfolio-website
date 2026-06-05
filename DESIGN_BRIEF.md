# Design Brief — Logan Lessing Portfolio

## Reference Site
https://jacobschwartz.framer.ai/ — use this as the primary visual and structural reference. Study every page before building.

---

## Visual Style
- White background, clean and minimal throughout
- Small muted steel-blue accent color (`#2c6e9e`) used sparingly on links, tags, and hover states
- Generous whitespace — never crowd elements
- System font stack, clean weights
- Subtle scroll animations: elements fade/slide in as they enter the viewport (use Intersection Observer or AOS)
- Subtle card hover effect (slight lift or shadow)

---

## Navigation
Three items, minimal, same across all pages:

```
Projects    About    Contact
```

No resume link in the nav.

---

## Pages

### `index.html` — Homepage

**Hero section** (above the fold):
- Left: square or rounded photo of Logan
- Right: name, title/tagline (one strong line like "Engineer focusing on X"), 2–3 sentence bio, LinkedIn button

**Project grid** (below hero):
- Small label above the grid: "Click project photos to learn more"
- Grid of clickable photo cards — each shows a cover photo, project title, and year
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
- Resume download button (links to `assets/resume.pdf`) — this is the only place the resume appears

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

## What Not to Build
- No dark theme
- No separate resume page
- No embedded PDF in the page
- No heavy JavaScript frameworks
- No auto-playing video or audio
- Do not add nav items beyond Projects, About, Contact
