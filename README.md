# Saumya — In the making

Original portfolio, prepared for independent Cloudflare Workers hosting.
Repository: https://github.com/saumyadoharey-dotcom/portfoliofromgpt

## First: upload to GitHub

1. Extract the ZIP on your computer.
2. Open the inner `portfoliofromgpt` folder. You should see `package.json`, `app`, `components`, `public` and other files.
3. In your empty GitHub repository, click **uploading an existing file**. If files are already present, choose **Add file → Upload files**.
4. Select and drag the CONTENTS of this folder into the upload area. Do not upload the ZIP or the containing folder itself.
5. Wait for the upload to finish. Enter `Add my portfolio` as the commit message, then confirm the commit to the main branch.
6. Check that `package.json` is visible at the repository's top level, beside `app` and `public`.

## Next: hosting (after upload)

Connect this repository through Cloudflare Workers & Pages using its Git integration.

| Setting | Value |
|---|---|
| Worker name | `portfoliofromgpt` |
| Production branch | `main` |
| Root directory | Repository root |
| Build command | `pnpm run build` |
| Deploy command | `pnpm run deploy` |
| Build Node version | `24` |

The project includes a pnpm lockfile and a pinned package-manager version. Allow the host to install dependencies before building. If the installer asks for an explicit install command, use `pnpm install --frozen-lockfile`.

No database, API keys, or environment secrets are needed for the portfolio. Do not upload `node_modules` or generated `dist` folders.

A private GitHub repository protects the source code; it does not make a deployed website private. ChatGPT's access controls do not transfer. Before publishing, decide whether the new site should be public or protected by Cloudflare Access. A custom domain can be added after the hosting is configured; no domain purchase is needed to upload the source.

## Technical notes

The actual portfolio pages, animations, project copy and bundled images are preserved. Only the hosting setup changed: a standard Vite/Vinext/Cloudflare configuration replaces ChatGPT-specific integration. Unused starter examples and UI components are excluded from the upload.

Optional local commands for a developer:
- `pnpm install --frozen-lockfile`
- `pnpm run typecheck`
- `pnpm run build`
- `pnpm run preview`

Project content lives in `lib/projects.ts` and `lib/project-stories.ts`; it is a code-based collection, not a hosted CMS. Original project videos and design deliverables not supplied earlier remain absent. Brand artwork sources are recorded in `public/brands/sources.json`.
