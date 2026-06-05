# Design Brief — Logan Lessing Portfolio

## Content Reference
All bio text, tool lists, and experience context live in `CONTENT.md`. Claude Code should pull copy directly from there rather than writing placeholder text.

---

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
- **Tech/tools tags** on project pages: small pill badges with a light blue tint background and accent blue text — displayed immediately below the project title and year, before any body content. Below the badges, add a short italic line indicating the experience source (e.g. "Michigan State Formula Racing — Formula SAE" or "Independent Project")
- **Tool names in body text**: when a tool is first mentioned in the project narrative, style it in accent blue inline so it pops in context
- **Project card year label**: year displayed in accent color next to the project title on each card
- **Nav hover**: nav items turn accent blue on hover
- **Project page section headings (h3)**: thin 3px left border in accent color, giving each process section a structured, engineered feel

- **Divider lines** (`<hr>` and section borders): use `#c8c8c8` — slightly more visible than the default but still subtle
- **Decorative overlapping circles**: Translucent steel-blue circles distributed across the full width of the hero section — not clustered only on the left. Aim for balanced visual weight: 2–3 larger circles anchored behind/around the photo on the left, and 2–3 medium/smaller circles on the right side of the hero. Circles should be partially cut off by the edge — low opacity (~10–20%), z-index behind all content. Use CSS, not images.
- **Circles are parallax-animated**: Each circle must move at a noticeably different scroll speed. Use a JS scroll listener with `requestAnimationFrame` and `transform: translateY()` tied to `window.scrollY`. Assign `data-speed` values with a wide spread — for example: large circles slow (-0.08 to -0.12), medium circles mid (-0.18 to -0.24), small circles fast (-0.32 to -0.42). The speed difference should be clearly visible — not subtle. Do NOT use `background-attachment: fixed`.
- **Fill blank hero space**: the hero should not feel empty. Use a combination of subtle floating geometric elements (additional faint circles, arcs, or dot grids) in the negative space around the photo and bio text. These also move on scroll at their own distinct speeds. Keep everything low opacity and secondary to the actual content — the motion fills the space without cluttering it.

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
- Resume download button (links to `assets/resume.pdf`)
- Resume embedded directly in the page using an `<iframe>` pointing to `assets/resume.pdf` — the PDF file now exists in `assets/`. The iframe is currently commented out; uncomment it and remove the placeholder div. Make the embed **70% wide and horizontally centered** on the page (not full width). Height should be tall enough to show the full resume without internal scrolling — around 1050px. No border radius needed, keep a subtle border.

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

**Before starting any session:** Read DESIGN_BRIEF.md, CONTENT.md, and WORKFLOW.md in full. Then scan all project files in the `projects/` folder, all images in the `images/` folder, and `assets/` for any resume or file updates. Check for any changes across the entire project directory since the last session and implement them. When Logan asks for something to be changed, it must be fully implemented — not partially done or skipped. After completing work, confirm which files were changed and what was updated.

---

## What Not to Build
- No dark theme
- No separate resume page — resume lives on the About page
- No heavy JavaScript frameworks
- No auto-playing video or audio
- Do not add nav items beyond Projects, About, Contact
- Do not spread the nav to the edges of the page — keep it centered
