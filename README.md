# Saumya — In the making

Original portfolio, prepared for independent Cloudflare Workers hosting.
Repository: https://github.com/saumyadoharey-dotcom/portfoliofromgpt


The project includes a pnpm lockfile and a pinned package-manager version. Allow the host to install dependencies before building. If the installer asks for an explicit install command, use `pnpm install --frozen-lockfile`.



A private GitHub repository protects the source code; it does not make a deployed website private. ChatGPT's access controls do not transfer. Before publishing, decide whether the new site should be public or protected by Cloudflare Access. A custom domain can be added after the hosting is configured; no domain purchase is needed to upload the source.

## Technical notes

The actual portfolio pages, animations, project copy and bundled images are preserved. Only the hosting setup changed: a standard Vite/Vinext/Cloudflare configuration replaces ChatGPT-specific integration. Unused starter examples and UI components are excluded from the upload.

Optional local commands for a developer:
- `pnpm install --frozen-lockfile`
- `pnpm run typecheck`
- `pnpm run build`
- `pnpm run preview`

Project content lives in `lib/projects.ts` and `lib/project-stories.ts`; it is a code-based collection, not a hosted CMS. Original project videos and design deliverables not supplied earlier remain absent. Brand artwork sources are recorded in `public/brands/sources.json`.
