# Portfolio Website Workflow

## Overview

Two tools work on the same local folder to build this site:

- **Cowork** — planning, content, and file organization
- **Claude Code (VS Code)** — coding and building the site
- **GitHub Desktop** — pushing changes to GitHub to update the live site

---

## What Cowork Does

### File Organization
- Accepts raw project photos, screenshots, and documents
- Renames files cleanly and sorts them into the correct folders (e.g. `images/project1/`, `images/project2/`)
- So Claude Code can reference them without any hunting around

### Content Preparation
- Drafts project descriptions, problem statements, and tech tags for each project
- Brainstorms which projects to include and how to frame them
- Refines copy until it's ready to hand off

### Planning & Decisions
- Holds the design brief for Claude Code
- Flags decisions that need to be made (e.g. resume embed yes/no)
- Tracks what's been done and what's next

---

## What Claude Code Does

- Reads the organized files and prepared content
- Writes and edits HTML, CSS, and JavaScript
- Builds and updates the site structure and layout
- Previews changes in the browser via Live Server

---

## The Loop

1. Drop raw files and notes into Cowork
2. Cowork organizes files and prepares content
3. Hand off to Claude Code with a clear brief
4. Claude Code builds it
5. Review in the browser
6. Push to GitHub via GitHub Desktop

---

## File Structure

```
portfolio-website/
├── index.html          # Homepage
├── portfolio.html      # Projects page
├── resume.html         # Resume page
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── project1/       # Photos for project 1
│   ├── project2/       # Photos for project 2
│   └── ...
├── assets/
│   └── resume.pdf
└── WORKFLOW.md         # This file
```
