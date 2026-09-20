# Recruiter-focused portfolio refinement

## Goal
Strengthen the existing portfolio’s message and scannability while preserving its premium light visual identity, current animation system, 3D hero, particles, page transitions, and working interactions.

## Planned changes

### 1. Clarify the first impression
- Keep the current two-column hero and 3D technology visualization unchanged in purpose.
- Update the eyebrow and supporting sentence to the requested backend-focused copy.
- Keep the existing project and resume actions, then add a matching “Let’s Connect” action to Contact.
- Retain strict column boundaries and responsive stacking so text never overlaps the visualization.

### 2. Make About concise and recruiter-friendly
- Replace long-form copy with short professional blocks covering backend focus, Java/DSA, full-stack understanding, problem solving, and the current software-engineering goal.
- Add “Currently focused on” and “Building” blocks using only the supplied claims.
- Preserve restrained reveals and remove emphasis from unverified portfolio-wide statistics.

### 3. Add a dedicated Experience page
- Create an Experience route with unique page metadata and two scan-friendly timeline cards.
- Add the supplied LetNext Technologies and Desicrew Solutions roles, dates, locations, and bullet points verbatim in structured data.
- Add Experience to desktop and mobile navigation, sitemap, and relevant calls to action.

### 4. Strengthen project prioritization
- Keep all four projects and existing 3D card interactions, modal, tags, glow, and image fallback behavior.
- Order and label the four requested projects by priority, with FinTrack as the prominent featured card.
- Expand FinTrack’s stack and feature list with the supplied details and set its verified live demo URL.
- Add direct GitHub and Live Demo actions on cards only when a valid non-placeholder URL exists; keep “Explore Project” for details.
- Supply cohesive 16:9 covers for projects missing an image, optimized and lazy-loaded, without presenting invented metrics.

### 5. Align Skills, Profiles, Articles, and Contact
- Rename skill headings to the requested category labels and remove the duplicate REST API concept entry.
- Continue using the centralized brand-colored technology icon mapping.
- Update coding-profile copy around DSA, Java, problem solving, and LeetCode practice; reuse centralized social/brand icons and show no unsupported metrics.
- Keep article cards and links, but omit unavailable date/reading-time labels instead of showing placeholders.
- Update Contact to “Let’s build something together,” keep the validated form, and show Email, LinkedIn, GitHub, LeetCode, and HackerRank clearly with shared colored icons.

### 6. Preserve motion and visual identity
- Reuse the existing page transitions, scroll reveals, project tilt, particles, and reduced-motion handling.
- Add only restrained timeline/card interactions; no new continuous animation systems or dependencies.
- Keep the existing porcelain background, indigo/violet accents, Sora/Manrope typography, and regular CSS architecture.

## Technical details
- Keep content data-driven, extending the existing content module with typed experience data and project link checks.
- Add `/experience` using the existing TanStack route/page pattern and unique SEO metadata.
- Use the existing `ActionLink`, `SocialIcon`, `SkillIcon`, `Reveal`, and Framer Motion patterns rather than parallel UI systems.
- Ensure project images use 16:9 containers, `object-fit: cover`, meaningful alt text, subtle hover zoom, error fallback, and lazy decoding/loading.

## Verification
- Check every route, navbar item, project modal, project action, contact action, resume action, social link, and image path.
- Test widths 320, 375, 390, 430, 768, 1024, 1280, and 1440+ for overflow, hero separation, readable cards, visible controls, and mobile navigation.
- Confirm reduced-motion behavior, no console errors, no broken imports, and correct page metadata/sitemap coverage.
