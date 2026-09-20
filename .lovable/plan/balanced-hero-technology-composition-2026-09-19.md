# Balanced Hero Technology Composition

## Goal
Rebalance only the homepage hero into a confident two-column desktop composition while keeping its existing copy, typography, buttons, social links, light theme, and current mobile stacking.

## Changes
- Expand and refine the existing Three.js service topology on the right with a glass-like core, connected backend nodes, depth particles, and restrained pointer parallax.
- Surround the canvas with 8 recognizable colored technology icons reused from the centralized Skills icon component: Java, JavaScript, React, Node.js, MongoDB, MySQL, Git, and GitHub.
- Position the icons as a balanced DOM overlay so their official brand colors remain crisp and accessible while the 3D visualization stays performant.
- Adjust only hero layout and scene styling so the right side has stronger visual presence without crowding the content.
- Preserve the current mobile order and reduce icon count/scene motion on smaller screens and for reduced-motion preferences.

## Technical Details
- Keep the existing lazy-loaded React Three Fiber canvas and local environment lights.
- Use delta-time damping for scene motion and pointer response.
- Reuse `SkillIcon` rather than duplicating logo mappings.
- Keep all styling in regular CSS and leave every section after the hero unchanged.

## Verification
- Check the hero at desktop and mobile widths for visual balance, readable content, no overlap, and no horizontal overflow.
- Confirm the Three.js scene renders, icon colors are visible, mouse movement affects the scene subtly, and browser console errors are clean.
