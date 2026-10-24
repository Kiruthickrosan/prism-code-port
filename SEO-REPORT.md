# Portfolio production SEO report

## Implemented

- Homepage title: **Kiruthickrosan K | Backend Software Developer**.
- Homepage description: **Kiruthickrosan K is a backend software developer focused on Java, Data Structures and Algorithms, REST APIs and SQL. Explore FinTrack and software projects.**
- Visible homepage H1: **Kiruthickrosan K**. Removed the hidden professional-title suffix; the title remains visible above the heading.
- Homepage canonical and Open Graph URL: **https://kiruthickrosanportfolio.vercel.app/**.
- All eight public pages have unique factual titles/descriptions, self-referencing canonicals, `index, follow`, Open Graph, and Twitter card metadata in initial HTML.
- Open Graph site name: **Kiruthickrosan K**; type: **website**. Twitter card: **summary_large_image**.
- Sharing image: **https://kiruthickrosanportfolio.vercel.app/images/portfolio-social.jpg**, a 1200 × 630 rendition of the existing portfolio screenshot, approximately 64 KB. This is not a portrait and is not represented as a Person photo.
- Homepage Person and WebSite JSON-LD use consistent canonical identifiers. Person sameAs includes only existing personal LinkedIn, GitHub, LeetCode and HackerRank links from project data, not the GitHub repository.
- HTML language was already `en` and remains unchanged.
- Enabled homepage SSR by removing the whole-page opt-out and isolating the lazy Three.js scene behind ClientOnly. Existing animations and scene remain available after hydration.
- Preserved factual About, Skills, Experience and Projects content: it already describes Java, DSA, APIs, databases and actual projects. Corrected metadata referring to nonexistent commerce work and avoided implying external learning resources were all original authored articles.
- Preserved existing crawler permissions and updated sitemap origin. No invented lastmod dates or anchor-fragment pages.

## Page metadata

| Path | Title |
| --- | --- |
| / | Kiruthickrosan K \| Backend Software Developer |
| /about | About Kiruthickrosan K \| Backend Software Developer |
| /experience | Experience \| Kiruthickrosan K |
| /projects | Software Projects \| Kiruthickrosan K |
| /skills | Java and Backend Skills \| Kiruthickrosan K |
| /articles | Articles and Learning Resources \| Kiruthickrosan K |
| /coding-profiles | Coding Profiles \| Kiruthickrosan K |
| /contact | Contact \| Kiruthickrosan K |

Full description values live in `src/lib/seo.ts`. Each page's og:title/description and Twitter title/description match its title and description.

## Modified files

- `src/lib/seo.ts` — shared typed per-page metadata and homepage schema.
- `src/lib/seo.test.ts` — canonical origin and personal-profile invariants.
- `src/routes/index.tsx`, `about.tsx`, `experience.tsx`, `projects.tsx`, `skills.tsx`, `articles.tsx`, `coding-profiles.tsx`, `contact.tsx` — leaf metadata and homepage SSR.
- `src/components/HeroScene.tsx` — browser-only 3D boundary.
- `src/pages/HomePage.tsx` — exact visible identity heading.
- `src/routes/__root.tsx` — use the router's ErrorComponentProps type, without changing error behavior.
- `public/robots.txt`, `public/sitemap.xml` — production-origin crawler configuration.
- `public/images/portfolio-social.jpg` — share-sized existing screenshot.
- `AGENTS.md`, `roadmap.md`, `SEO-REPORT.md` — maintenance decisions and delivery record.
- `package.json`, `bun.lock` — package maintenance.

## Verification

- Latest automated production build/type validation: **build OK**. A router error-component typing incompatibility was corrected using its supported props type. Manual build/typecheck commands were not run because the editor automatically performs those checks.
- Browser and raw HTML verification passed on all eight local routes: HTTP 200, exactly one title/canonical/H1, accurate homepage identity, valid JSON-LD, expected index directives, no duplicate IDs or missing image alt attributes, and no broken images or unexpected internal anchors.
- Valid sitemap XML includes precisely the eight public canonical URLs. Crawler permissions allow assets. Sharing image and resume download both returned HTTP 200.
- Homepage checked at 390, 714, 768 and 1280 CSS pixels without horizontal overflow. Desktop/mobile screenshots inspected; 3D rendered. Project modal open/close, mobile navigation and reduced-motion navigation passed. No browser page errors occurred in the main verification.
- Live Vercel audit before redeployment: all eight pages, robots.txt and sitemap.xml returned HTTP 200 on direct requests. However, live HTML still had the old short page titles, no canonicals, and no homepage H1; live crawler files still referenced the Lovable origin. This is the previously deployed version, not these changes.
- Stored SEO scanner results are stale, so they are not reported as current passing verdicts. Contact delivery and Search Console setup were left unchanged and were not marked fixed.

## Remaining external steps

1. Redeploy the updated source to Vercel. These metadata changes reach the live Vercel URL only after that deployment. No deployment was triggered here.
2. No Vercel configuration exists in this repository; the existing hosted deployment already serves direct routed requests successfully. Hosting settings were not changed or inferred. Preserve the working deployment setup, then verify the new server-rendered HTML on Vercel after redeployment. Local SSR and the editor build are verified; the new Vercel build is not.
3. After redeploying, verify the live canonical tags, JSON-LD and social image, and submit **https://kiruthickrosanportfolio.vercel.app/sitemap.xml** to the verified property in Google Search Console. Google property ownership/indexing settings were not inspected or configured in this task.
4. If maintaining both the Lovable and Vercel sites, the requested Vercel site is now the canonical destination. Consolidation redirects are a separate deployment decision and were not added.
5. Google chooses when to crawl/index and how to rank. Technical correctness does not guarantee indexing or first position. Social crawlers may require a fresh fetch after the new version is deployed.