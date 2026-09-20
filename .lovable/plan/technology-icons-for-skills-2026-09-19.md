# Technology Icons for Skills

## Goal
Make every skill immediately recognizable through a crisp, technology-specific colored icon while preserving the premium light theme and existing interactions.

## Changes
- Add `react-icons` and map each branded technology to its recognizable logo in original brand colors.
- Use clearly labeled, colored concept icons only where no official brand logo exists, including SQL, REST APIs, data structures, algorithms, OOP, and DBMS.
- Update the Skills page so both the interactive skill area and grouped skill cards show the same icon mapping, technology name, category, and description.
- Replace continuous floating on every skill with professional hover/focus motion: slight card lift, icon scale and rise, subtle icon-colored glow, and stronger skill-name emphasis.
- Normalize displayed names and categories to the requested labels: HTML5, CSS3, Express.js, Database, and Core Concepts.

## Technical Details
- Keep all repeated content data-driven from the shared skills data.
- Add a reusable skill-icon component with accessible icon labels and CSS custom properties for each icon's brand color.
- Preserve keyboard focus, reduced-motion behavior, mobile sizing, and the existing Skills page route and inspector interaction.

## Verification
- Check every requested skill has the correct icon and color.
- Verify hover, keyboard focus, reduced motion, desktop/mobile layouts, horizontal overflow, and browser console output.
