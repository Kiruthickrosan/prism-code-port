<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep public page SEO in the shared browser-safe `src/lib/seo.ts` helper and call it from each leaf route; this prevents divergent canonicals and duplicate head tags.
- Server-render portfolio text and isolate the lazy Three.js scene behind ClientOnly; search engines receive meaningful HTML without executing browser-only 3D code.
