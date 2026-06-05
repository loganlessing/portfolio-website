# Design Brief — Logan Lessing Portfolio

## Reference Site
Jacob Schwartz's portfolio (https://jacobschwartz.framer.ai/) is the primary visual reference.
Study his layout, typography, card grid, and individual project page structure before building.

---

## Visual Style
- **Background:** White
- **Theme:** Clean and minimal — let the work speak
- **Accent color:** Muted steel blue (e.g. `#2c6e9e`) — used sparingly for links, tags, hover states
- **Typography:** System font stack, clean weights
- **Whitespace:** Generous — do not crowd elements

---

## Animations & Interactivity
- **Scroll animations:** Subtle fade/slide-in as sections enter the viewport (use Intersection Observer or a lightweight library like AOS)
- **No heavy animations** — keep it fast and clean
- **3D model support:** Three.js is already wired up in `js/main.js` — individual project pages may include an interactive `.glb` model viewer in a canvas element
- **Card hover:** Subtle lift or shadow on project cards

---

## Site Structure

### Navigation
Three items only — no resume in the nav:
```
Projects | About | Contact
```

### Pages

#### `index.html` — Homepage
1. **Hero section:** Photo (left), name + title + 2–3 sentence bio (right), LinkedIn link
2. **Project grid:** Clickable photo cards, each showing project title + year
   - Each card links to its own dedicated project page

#### `projects/[project-name].html` — Individual Project Pages
Laid out in workflow/process order:
1. Project title + year
2. Problem statement — what was being solved
3. Process — approach, decisions, key steps (with images/diagrams)
4. Outcome — result, what was learned
5. Tech/tools tags
6. Optional: interactive Three.js 3D model viewer

#### `about.html` — About Page
- Short bio
- Contact links (LinkedIn, email)
- Resume download button (PDF link) — **not** a separate resume page

---

## File Structure for Projects
Each project gets its own folder under `images/`:
```
images/
├── project-name/
│   ├── cover.jpg       ← used for the homepage card
│   ├── photo-1.jpg
│   ├── photo-2.jpg
│   └── diagram-1.png
```

And its own HTML page:
```
projects/
├── project-name.html
```

---

## What NOT to Build
- No separate `resume.html` page — resume is a download link only
- No dark theme
- No heavy JavaScript frameworks
- No auto-playing video or audio
- Do not embed a PDF in the page

---

## Decision Log
| Decision | Choice |
|---|---|
| Project layout | Card grid → individual pages (like Jacob Schwartz) |
| Resume | Download link on About page only |
| Animations | Subtle scroll fade/slide only |
| 3D models | Three.js, per-project, optional |
| Nav items | Projects, About, Contact |
