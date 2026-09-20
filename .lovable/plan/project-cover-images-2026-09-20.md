# Project cover images

## Implementation
- Render each configured project cover inside the existing visual area using Framer Motion.
- Preserve the current grid, terminal fallback, card tilt, mouse-follow movement, glow, tags, and project actions.
- Detect failed or unavailable images per card and restore the existing generated project visual without a broken-image indicator.
- Add scoped CSS for a clipped 16:9 cover, responsive cropping, subtle overlay, and reduced-motion-safe hover scaling.

## Verification
- Confirm the Personal Portfolio uses `/images/portfolio-cover.png` and the public file loads.
- Confirm projects whose image files are unavailable fall back to the existing visual.
- Check desktop and mobile for hover behavior, card interactions, overflow, and browser errors.
