# Premium Developer Portfolio

## Goal
Build Kiruthickrosan K’s multi-page developer portfolio as a dark, technical, recruiter-friendly experience with restrained cinematic motion, interactive particles, and a lightweight 3D backend-network centerpiece.

## Pages
- **Home:** identity-first hero, paced role cycling, interactive 3D service graph, project preview, skills snapshot, and closing CTA.
- **About:** professional introduction, configurable journey timeline, and animated statistics sourced from one data file.
- **Projects:** featured FinTrack presentation, reusable 3D-tilt project cards, filters, and animated project-detail modal views.
- **Skills:** interactive constellation grouped by programming, frontend, backend, databases, tools, and concepts.
- **Articles:** clean editorial cards with topic, date, reading time, tags, and external links.
- **Coding Profiles:** LinkedIn-adjacent professional presentation for GitHub, LeetCode, and HackerRank, without fabricated statistics.
- **Contact:** validated form with sending/success/error states, direct email fallback, social links, and resume actions.

## Shared Experience
- Persistent glass navigation with active-page indicator, scroll transformation, mobile menu, footer, and accessible keyboard behavior.
- Route-level Framer Motion transitions with a brief grid sweep and page-specific entrances.
- Fixed low-opacity perspective grid, adaptive tsParticles layer, scroll progress, cursor glow, magnetic CTAs, and reduced-motion fallbacks.
- Regular CSS architecture only; no Tailwind classes or UI framework usage in the portfolio implementation.
- Responsive layouts tuned for 320px through large desktop, with reduced particles and simplified 3D rendering on smaller devices.

## 3D Direction
- Create a procedural React Three Fiber scene showing a central backend core connected to API, database, Java, and service nodes.
- Use restrained cyan/blue/violet lighting, local environment lights, subtle pointer response, delta-time animation, and capped pixel density.
- Lazy-load the scene, pause expensive movement when hidden, and provide a styled non-WebGL fallback.

## Content and Configuration
- Centralize projects, skills, articles, profiles, social links, journey items, and statistics in structured data modules.
- Mark unknown usernames, URLs, dates, statistics, and project claims as replacement fields; do not present invented values as facts.
- Include a clearly labeled placeholder resume PDF path and make every resume action use the same view/download configuration.
- Isolate email delivery in one service using `VITE_EMAIL_SERVICE_ID`, `VITE_EMAIL_TEMPLATE_ID`, and `VITE_EMAIL_PUBLIC_KEY`; when unset, the form opens a prefilled email draft instead of silently failing.

## Technical Notes
- Keep the project’s required TanStack Start runtime and router, while using React, JavaScript/TypeScript-compatible JSX, Framer Motion, Three.js/R3F, tsParticles, and plain CSS for the requested experience.
- Add one route file per page and unique metadata for every route.
- Build reusable layout, navigation, transition, button, card, particle, 3D, form, cursor, and footer components.
- Install only the animation, 3D, particles, and icon packages needed for the requested interactions.

## Verification
- Check all routes, navigation, mobile menu, modal interactions, form validation, fallback contact behavior, resume actions, and external-link safety.
- Verify desktop and mobile screenshots, WebGL rendering, pointer interaction, reduced motion, horizontal overflow, console output, and broken asset/network requests.
