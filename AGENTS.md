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

- Keep the SOS India homepage on its existing root route and use shared global design tokens so the hero and following sections remain a cohesive site.
- Keep reusable SOS India homepage sections under `src/components/sos` and CMS content contracts under `src/lib`; this separates presentation from data and avoids implying that an unconfigured content backend is live.
