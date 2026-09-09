# RRCoP site rebuild (test)

Rebuild of the [Regulated Research Community of Practice](https://www.regulatedresearch.org/)
site — originally hosted on Google Sites — as a static site suitable for Cloudflare Pages,
edited through [Decap CMS](https://decapcms.org/).

**Status: test/proof-of-concept.** This pass rebuilds the homepage plus the Resources and
About sections to prove the structure; it is not a full content migration of the ~40-page
original site.

## Stack

- **[Eleventy (11ty)](https://www.11ty.dev/)** — static site generator, markdown + Nunjucks
- **[Decap CMS](https://decapcms.org/)** — git-based headless CMS (`/admin`), no separate
  hosted backend; content commits directly to this repo as markdown
- **Cloudflare Pages** — target host (not yet wired up in this pass; see below)

## Local development

```bash
npm install
npm run serve
```

Site builds to `_site/` and serves at `http://localhost:8080`.

## Editing content via Decap CMS

The CMS UI lives at `/admin`. Auth is wired up via a **GitHub OAuth backend** running
directly in this project's Cloudflare Worker (`_worker.js` + `wrangler.jsonc`), gated by
**Cloudflare Access**.

> **Note on architecture:** Cloudflare deprecated Pages in April 2025 in favor of Workers
> with static assets. The "Connect to Git" flow in the dashboard now creates a **Worker**
> project, not a legacy Pages project — which means the `functions/api/*.js` "Pages
> Functions" file-based-routing convention (used by most Decap+Cloudflare tutorials,
> including the one this was originally based on) is **never auto-detected** here. This
> repo uses the Workers-native equivalent instead: a single `_worker.js` that handles
> `/api/auth` and `/api/callback` directly, then falls through to the `ASSETS` binding
> (the built Eleventy `_site/` output) for every other path. `wrangler.jsonc` wires the
> `main` entrypoint and the `assets.directory`.

### Already done (in this repo)

- `_worker.js` — handles `/api/auth` (redirects to GitHub's OAuth authorize endpoint) and
  `/api/callback` (exchanges the OAuth `code` for an access token, posts it back to the
  Decap popup window), falls through to `env.ASSETS.fetch(request)` for everything else
- `wrangler.jsonc` — `main: "./_worker.js"`, `assets.directory: "./_site"`
- `src/admin/config.yml` — `backend.name: github`, pointed at this repo/branch, with
  `auth_endpoint: api/auth`

### You need to do (one-time, per environment)

1. **Create a GitHub OAuth App** — [github.com/settings/developers](https://github.com/settings/developers) →
   OAuth Apps → New OAuth App.
   - **Homepage URL**: `https://rrcop-site-rebuild.kristoff.workers.dev`
   - **Authorization callback URL**: `https://rrcop-site-rebuild.kristoff.workers.dev/api/callback`
   - Save the **Client ID**, generate and save the **Client Secret**.

2. **Add the OAuth credentials to the Worker** — in the `rrcop-site-rebuild` Worker's
   Settings → Variables and Secrets → add:
   - `GITHUB_CLIENT_ID` (Text) = the Client ID from step 1
   - `GITHUB_CLIENT_SECRET` (Secret) = the Client Secret from step 1

   Redeploy (or trigger a new deployment) after adding these.

3. **Gate `/admin/*` (or the whole hostname) with Cloudflare Access** — under Zero Trust →
   Access → Applications, self-hosted application type, pointed at
   `rrcop-site-rebuild.kristoff.workers.dev`, with a policy scoped to your identity.

4. **Verify**: visit `/admin/`, pass the Cloudflare Access login, click "Login with GitHub,"
   authorize the OAuth app, and you should land in the Decap CMS editor with the Pages/
   Resources collections from `config.yml`.

For local editing without any of the above, run `npx decap-server` alongside `npm run serve`
and uncomment `local_backend: true` in `src/admin/config.yml`.

## What's NOT migrated yet

This is a structural proof of concept, not a full migration:

- Only Home, Resources (2 sample entries), and About are rebuilt
- No `/join` signup form backend (Google Sites' form → needs a Cloudflare Pages Function
  or a third-party form service)
- No site search (Google Sites' built-in search → would need Pagefind/Lunr or similar)
- Original site's institution map widget not reproduced
- CMS auth is wired (GitHub OAuth via Pages Functions + Cloudflare Access) but requires
  the one-time GitHub OAuth App + Cloudflare dashboard setup described above before it
  actually works end-to-end — see "Editing content via Decap CMS."

## Deploying

Not yet connected to Cloudflare Pages Git integration. For this test pass, build locally
and deploy the `_site/` output directory manually.
