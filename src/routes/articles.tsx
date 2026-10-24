import { createFileRoute } from "@tanstack/react-router";
import { ArticlesPage } from "../pages/ArticlesPage";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/articles")({
  head: () => pageHead("/articles"),
  component: ArticlesPage,
});
