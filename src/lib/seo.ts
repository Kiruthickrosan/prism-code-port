import { site, socials } from "../data/content";

export const productionOrigin = "https://kiruthickrosanportfolio.vercel.app";
const socialImage = `${productionOrigin}/images/portfolio-social.jpg`;

export const seoPages = {
  "/": {
    title: "Kiruthickrosan K | Backend Software Developer",
    description: "Kiruthickrosan K is a backend software developer focused on Java, Data Structures and Algorithms, REST APIs and SQL. Explore FinTrack and software projects.",
  },
  "/about": {
    title: "About Kiruthickrosan K | Backend Software Developer",
    description: "Learn about Kiruthickrosan K's backend development focus, Java practice, Data Structures and Algorithms, and approach to building practical software.",
  },
  "/experience": {
    title: "Experience | Kiruthickrosan K",
    description: "Explore Kiruthickrosan K's software engineering internship at LetNext Technologies and data annotation experience at Desicrew Solutions.",
  },
  "/projects": {
    title: "Software Projects | Kiruthickrosan K",
    description: "Explore Kiruthickrosan K's FinTrack, YouTube RAG Chat, AI Travel Agent and personal portfolio projects, with technologies, features and architecture.",
  },
  "/skills": {
    title: "Java and Backend Skills | Kiruthickrosan K",
    description: "Explore Kiruthickrosan K's Java, JavaScript, SQL, REST API, database and React skills, alongside Data Structures and Algorithms and development tools.",
  },
  "/articles": {
    title: "Articles and Learning Resources | Kiruthickrosan K",
    description: "Browse Kiruthickrosan K's DSA revision journey and selected resources on binary search, Java HashMap and HashSet, and the FinTrack project.",
  },
  "/coding-profiles": {
    title: "Coding Profiles | Kiruthickrosan K",
    description: "Find Kiruthickrosan K's GitHub, LeetCode and HackerRank profiles for software projects, Java practice, and Data Structures and Algorithms.",
  },
  "/contact": {
    title: "Contact | Kiruthickrosan K",
    description: "Contact Kiruthickrosan K, Backend Software Developer, about software engineering opportunities, software projects and professional collaborations.",
  },
} as const;

export type SeoPath = keyof typeof seoPages;

export function pageHead(path: SeoPath) {
  const { title, description } = seoPages[path];
  const url = `${productionOrigin}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: site.name },
      { property: "og:image", content: socialImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Kiruthickrosan K's developer portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: socialImage },
      { name: "twitter:image:alt", content: "Kiruthickrosan K's developer portfolio" },
    ],
    links: [{ rel: "canonical", href: url }],
    ...(path === "/" ? {
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": `${productionOrigin}/#person`,
              name: site.name,
              jobTitle: site.role,
              url,
              sameAs: socials.filter(({ label }) => label !== "Email").map(({ href }) => href),
            },
            {
              "@type": "WebSite",
              "@id": `${productionOrigin}/#website`,
              name: `${site.name} — ${site.role}`,
              url,
              inLanguage: "en",
              publisher: { "@id": `${productionOrigin}/#person` },
            },
          ],
        }),
      }],
    } : {}),
  };
}