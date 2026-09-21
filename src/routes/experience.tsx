import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "../pages/ExperiencePage";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience" },
      { name: "description", content: "Software engineering and data operations experience across LetNext Technologies and Desicrew Solutions." },
      { property: "og:title", content: "Professional Experience — Kiruthickrosan K" },
      { property: "og:description", content: "Frontend, backend, financial product, PWA, Android, and high-accuracy data annotation experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});