import { createFileRoute } from "@tanstack/react-router";
import { ProfilesPage } from "../pages/ProfilesPage";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/coding-profiles")({
  head: () => pageHead("/coding-profiles"),
  component: ProfilesPage,
});
