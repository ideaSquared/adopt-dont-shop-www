# Adopt Don't Shop — landing page

The pre-launch marketing site for **Adopt Don't Shop**. A single, static page that
introduces the product and captures early-access leads via a `mailto:` call to
action (`help@adoptdontshop.app`). No backend, no accounts, no tracking — it
deploys as plain static assets.

It's built with the same stack as the product apps (React + Vite +
[vanilla-extract](https://vanilla-extract.style/)) and mirrors the design-system
brand tokens locally, so it can be lifted into the main
[`adopt-dont-shop`](https://github.com/ideaSquared/adopt-dont-shop) monorepo as
`app.marketing` later with minimal changes.

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
```

## Scripts

| Command              | What it does                                  |
| -------------------- | --------------------------------------------- |
| `npm run dev`        | Start the Vite dev server                     |
| `npm run build`      | Type-check, then build static output to `dist/` |
| `npm run preview`    | Serve the production build locally            |
| `npm test`           | Run the Vitest suite                          |
| `npm run type-check` | `tsc --noEmit`                                |
| `npm run lint`       | ESLint over `src`                             |

## Deploying to Cloudflare Pages

Connect this repository in the Cloudflare dashboard
(**Workers & Pages → Create → Pages → Connect to Git**) with:

| Setting               | Value           |
| --------------------- | --------------- |
| Framework preset      | Vite            |
| Build command         | `npm run build` |
| Build output directory | `dist`          |
| Node version          | 20 or newer     |

Every push to the production branch redeploys automatically; pull requests get
preview URLs. Security headers ship in [`public/_headers`](public/_headers) and
are applied by Cloudflare Pages at the edge.

To point a custom domain (`adoptdontshop.app`) at it, add it under the Pages
project's **Custom domains** tab.

## Editing the content

Everything lives in [`src/App.tsx`](src/App.tsx) (copy + structure) and
[`src/App.css.ts`](src/App.css.ts) (styling). Brand tokens — colours, fonts,
spacing — are in [`src/styles/theme.css.ts`](src/styles/theme.css.ts). The
contact address is the `CONTACT_EMAIL` constant at the top of `App.tsx`.
