# huynvk.github.io

Source for [www.huynvk.dev](https://www.huynvk.dev), my personal site and blog.

**Stack:** Vite + React 19 + [vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg) (every route is pre-rendered to static HTML), Tailwind CSS v4, blog content from Contentful fetched at build time, and deploys to GitHub Pages via GitHub Actions.

## Development

Requires Node 22 (`nvm use`).

```sh
cp .env.example .env   # fill in Contentful space ID + Content Delivery API token
npm install
npm run dev            # fetch content, then start the dev server
npm run build          # fetch content, then pre-render the site into dist/
npm run preview        # serve dist/
```

Without Contentful credentials, local runs fall back to sample posts (`scripts/sample-posts.ts`). CI fails instead.

## How it works

- `scripts/fetch-content.ts` pulls all `blogPost` entries from Contentful, renders markdown to HTML (GFM, smartypants, Shiki syntax highlighting, captioned and optimized images), and writes `src/content/` (git-ignored).
- `src/routes.tsx` defines `/`, `/blog`, `/blog/:slug` (one page per post via `getStaticPaths`) and a 404 page.
- Blog post data is loaded by a route `loader` that only runs at build time, so post bodies never ship in the JS bundle.

## Deployment

`.github/workflows/deploy.yml` builds and deploys on every push to `master`, on manual dispatch, and on a `contentful-publish` repository dispatch.

One-time setup:

1. **Settings → Pages → Source:** GitHub Actions. Custom domain: `www.huynvk.dev`, Enforce HTTPS. (`public/CNAME` is included in the build.)
2. **Settings → Secrets → Actions:** add `CONTENTFUL_SPACE_ID` and `CONTENTFUL_DELIVERY_TOKEN`.
3. **DNS:** `www` → CNAME `huynvk.github.io`. The apex `huynvk.dev` gets A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
4. **Contentful webhook** (Settings → Webhooks), to rebuild on publish:
   - URL: `POST https://api.github.com/repos/huynvk/huynvk.github.io/dispatches`
   - Triggers: Entry and Asset publish / unpublish
   - Headers: `Authorization: Bearer <fine-grained PAT with Contents: read & write on this repo>`, `Accept: application/vnd.github+json`
   - Custom payload: `{"event_type": "contentful-publish"}`
