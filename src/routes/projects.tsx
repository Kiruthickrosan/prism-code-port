import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "../pages/ProjectsPage";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/projects")({
  head: () => pageHead("/projects"),
  component: ProjectsPage,
});
