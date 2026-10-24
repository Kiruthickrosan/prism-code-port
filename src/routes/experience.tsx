import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "../pages/ExperiencePage";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/experience")({
  head: () => pageHead("/experience"),
  component: ExperiencePage,
});
