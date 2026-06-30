# Charu Soni — Interactive 3D Cinematic Portfolio

A scroll-driven 3D portfolio built with **React + Vite**, **Three.js**, **GSAP/ScrollTrigger**, and **Tailwind CSS**, populated entirely with content from the provided resume and PRD.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL. To build for production:

```bash
npm run build
npm run preview
```

## What's inside

- `src/components/Scene3D.jsx` — the full-page WebGL background: a particle "neural network" universe that the camera flies through as you scroll, with mouse parallax and a High Quality / Eco Mode performance toggle (PRD §4.2).
- `src/components/Nav.jsx` — sticky glass navbar with scroll-spy active states and the performance toggle.
- `src/components/Hero.jsx` — Section 1, The Gateway.
- `src/components/About.jsx` — Section 2, The Core Node (skill "shards": Frontend, Backend, Core Concepts, Tools, Soft Skills).
- `src/components/Experience.jsx` — Section 3, The Pathway (Ternovate Labs + Coding Blocks timeline).
- `src/components/Projects.jsx` — Section 4, the interactive gallery (Verde Depths, NCAP Portal, AegisTalent, Rakshak Dashboard, Green Roots) with a click-through detail modal.
- `src/components/Education.jsx` — Section 5, The Constellation (education + certifications).
- `src/components/Contact.jsx` — Section 6, validated contact form (opens a pre-filled email) + quick links.
- `src/components/AIAssistant.jsx` — Section 4.3, the cursor-following AI particle with a terminal popup (falls back to a tap button on touch devices).
- `src/hooks/useScrollReveal.js` — shared GSAP ScrollTrigger fade/rise reveal used across sections.
- `src/data/resumeData.js` — single source of truth for every resume fact used across the site; edit this file to update content anywhere.

## Notes & next steps

- All resume content (experience, projects, education, certifications, skills, contact details) is centralized in `src/data/resumeData.js` — update links (`links.github`, `links.linkedin`, `links.resume`) with real URLs before deploying.
- Respects `prefers-reduced-motion`, uses semantic HTML, visible focus rings, and keyboard-accessible nav/modal/form to meet the PRD's WCAG goals.
- The 3D scene automatically reduces particle count and pixel ratio on screens under 768px, matching the PRD's mobile fallback (decorative background + glassmorphic content).
- Swap the placeholder `tech`/`links` URLs in `resumeData.js` with real GitHub/live links per project.
- For deployment, any static host works (Vercel, Netlify, GitHub Pages) — run `npm run build` and deploy the `dist/` folder.
