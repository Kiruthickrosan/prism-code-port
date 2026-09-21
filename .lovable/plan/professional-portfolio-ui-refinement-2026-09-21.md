# Professional portfolio UI refinement

## Scope
Target only the navbar, footer, Three.js interaction response, typography hierarchy, browser-tab titles, Experience timeline, Project card consistency, and Articles UI. Preserve all content, routes, links, animation systems, light-theme tokens, and working functionality.

## Implementation

### 1. Navbar and footer
- Refine the existing navbar structure and CSS into a cleaner desktop navigation with balanced spacing, 14–15px labels, a restrained active indicator, polished Resume action, and subtle hover motion.
- Keep the current KR brand and all existing routes.
- Improve the existing animated mobile menu with clearer spacing, active states, focus handling, and touch-friendly controls.
- Rework the footer grid so branding, navigation, and social links align from a shared top edge with balanced columns; stack cleanly on smaller screens.

### 2. Typography hierarchy and browser titles
- Consolidate the current layered CSS overrides into a controlled hierarchy: compact page titles, smaller section headings, readable 16px body copy, 13–14px metadata, and 14–15px controls.
- Reduce excessive page spacing caused by oversized headings while retaining Sora, Manrope, and DM Mono.
- Keep the visible descriptive headings unchanged, per the selected option.
- Change only each route’s browser-tab `title` entry to exactly: Home, About, Experience, Projects, Skills, Articles, Coding Profiles, or Contact. Keep descriptions and social metadata descriptive and route-specific.

### 3. Three.js interaction
- Keep the existing scene and continuous drift unchanged.
- Slightly increase pointer-follow responsiveness by tuning the current damped interpolation, while preserving reduced-motion and mobile behavior.

### 4. Experience timeline
- Convert the current numbered-card list into a vertical timeline using the existing Experience page and data.
- Add a timeline rail and nodes, with cards showing company, role, period, and existing highlights.
- Remove location from rendered output only; retain the underlying content data unchanged.
- Preserve restrained scroll reveals, hover lift, and reduced-motion behavior.

### 5. Consistent project cards
- Remove the featured card’s structural size/span differences so FinTrack uses the same reusable image → content layout as every other project.
- Make the project grid use equal-width, equal-height rows where appropriate.
- Make each card a column layout with a uniform 16:9 visual, consistent content spacing, and actions anchored to the bottom.
- Preserve each project’s existing content, cover/fallback visual, links, modal, 3D tilt, image zoom, mouse-follow glow, and reduced-motion handling.

### 6. Articles redesign
- Keep the existing article data and links.
- Convert the list into a responsive equal-height card grid with a compact category/index header, controlled title and excerpt sizing, tags, optional metadata, and a bottom-aligned Read Article action.
- Add restrained Framer Motion hover/reveal behavior consistent with Projects and Skills.

## Validation
- Check all eight routes at mobile, tablet, laptop, and large-desktop widths.
- Confirm no horizontal overflow, cramped navigation, hero overlap, or broken mobile menu.
- Confirm all project cards share one structure and aligned heights, including FinTrack.
- Confirm Experience renders no location text.
- Confirm browser-tab titles are exactly the eight requested page names and visible page headings remain descriptive.
- Confirm links, project modal, images, hover effects, reduced motion, console state, TypeScript, and the platform production build remain clean.
