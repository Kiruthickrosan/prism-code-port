import { createFileRoute } from "@tanstack/react-router";
import { SkillsPage } from "../pages/SkillsPage";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/skills")({
  head: () => pageHead("/skills"),
  component: SkillsPage,
});
