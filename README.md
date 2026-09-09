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
- **Cloudflare Worker (static assets)** — live host, auto-deploys from `main` via
  Cloudflare's Git integration. Note: Cloudflare deprecated Pages in April 2025, so this
  is a **Worker**, not a legacy Pages project — see the architecture note below.

## Local development

```bash
npm install
npm run serve
```

Site builds to `_site/` and serves at `http://localhost:8080`.

## Editing content via Decap CMS

The CMS UI lives at `/admin`. The **site itself is public** — only `/admin` requires
authentication, via two layers:

1. A **shared password**, enforced directly in `_worker.js` (HTTP Basic Auth), checked
   against the `ADMIN_PASSWORD` Worker secret.
2. A **GitHub OAuth backend** running in the same Worker (`_worker.js` + `wrangler.jsonc`),
   which is what actually authorizes writes back to this repo through Decap.

> **Note on architecture:** Cloudflare deprecated Pages in April 2025 in favor of Workers
> with static assets. The "Connect to Git" flow in the dashboard now creates a **Worker**
> project, not a legacy Pages project — which means the `functions/api/*.js` "Pages
> Functions" file-based-routing convention (used by most Decap+Cloudflare tutorials,
> including the one this was originally based on) is **never auto-detected** here. This
> repo uses the Workers-native equivalent instead: a single `_worker.js` that handles
> `/api/auth` and `/api/callback` directly, gates `/admin*` behind HTTP Basic Auth, and
> falls through to the `ASSETS` binding (the built Eleventy `_site/` output) for every
> other path. `wrangler.jsonc` wires the `main` entrypoint and the `assets.directory`.

### Already done (in this repo)

- `_worker.js` — gates `/admin` and `/admin/*` behind HTTP Basic Auth (checked against the
  `ADMIN_PASSWORD` secret; fails closed with a 503 if the secret isn't set), handles
  `/api/auth` (redirects to GitHub's OAuth authorize endpoint) and `/api/callback`
  (exchanges the OAuth `code` for an access token, posts it back to the Decap popup
  window) without the Basic Auth check (they're reached mid-OAuth-flow from inside
  `/admin`, not directly by a visitor), falls through to `env.ASSETS.fetch(request)` for
  everything else
- `wrangler.jsonc` — `main: "./_worker.js"`, `assets.directory: "./_site"`
- `src/admin/config.yml` — `backend.name: github`, pointed at this repo/branch, with
  `auth_endpoint: api/auth`

### You need to do (one-time, per environment)

1. **Create a GitHub OAuth App** — [github.com/settings/developers](https://github.com/settings/developers) →
   OAuth Apps → New OAuth App.
   - **Homepage URL**: `https://rrcop-site-rebuild.kristoff.workers.dev`
   - **Authorization callback URL**: `https://rrcop-site-rebuild.kristoff.workers.dev/api/callback`
   - Save the **Client ID**, generate and save the **Client Secret**.

2. **Add the OAuth credentials and admin password to the Worker** — in the
   `rrcop-site-rebuild` Worker's Settings → Variables and Secrets → add:
   - `GITHUB_CLIENT_ID` (Text) = the Client ID from step 1
   - `GITHUB_CLIENT_SECRET` (Secret) = the Client Secret from step 1
   - `ADMIN_PASSWORD` (Secret) = whatever password you want to gate `/admin` with

   Redeploy (or trigger a new deployment) after adding these.

3. **Remove the zone-level Cloudflare Access policy, if one still exists** — under
   Zero Trust → Access → Applications, delete or disable any application gating the
   whole `rrcop-site-rebuild.kristoff.workers.dev` hostname. This has to be done in the
   dashboard; there's no way to change it from this repo. Leaving it in place will keep
   the entire site behind Access even after the Basic Auth change above, which defeats
   the point of making the site public.

4. **Verify**: visit the homepage directly (should load with no login prompt), then visit
   `/admin/`, enter the `ADMIN_PASSWORD` at the browser's Basic Auth prompt, click "Login
   with GitHub," authorize the OAuth app, and you should land in the Decap CMS editor with
   the Pages/Resources collections from `config.yml`.

For local editing without any of the above, run `npx decap-server` alongside `npm run serve`
and uncomment `local_backend: true` in `src/admin/config.yml`.

   Redeploy (or trigger a new deployment) after adding these.

3. **Gate `/admin/*` (or the whole hostname) with Cloudflare Access** — under Zero Trust →
   Access → Applications, self-hosted application type, pointed at
   `rrcop-site-rebuild.kristoff.workers.dev`, with a policy scoped to your identity.

   **Superseded** — see the "You need to do" list above: `/admin` is now gated by a
   Worker-level password (`ADMIN_PASSWORD`) instead of Cloudflare Access, so the site
   itself can stay public. Remove any Access application still gating this hostname.

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
- CMS auth is wired (GitHub OAuth via `_worker.js` + Cloudflare Access) but requires
  the one-time GitHub OAuth App + Cloudflare dashboard setup described above before it
  actually works end-to-end — see "Editing content via Decap CMS."

## Deploying

Live and auto-deploying: pushes to `main` trigger a Cloudflare Worker Git-integration
build (`npm run build`, output `_site/`) automatically. No manual deploy step needed for
the site itself — see "Handoff notes" below for what a new deploy TARGET (different
hostname/account) would need reconfigured.

## Handoff notes (for a new maintainer / new environment)

This repo is portable, but three things are **environment-specific** and live outside
git, so they don't travel with a clone:

1. **The Cloudflare Worker itself.** The live site is a Cloudflare Worker named
   `rrcop-site-rebuild` under the original owner's Cloudflare account, connected via Git
   integration to this GitHub repo's `main` branch. A new maintainer either needs access
   to that same Cloudflare account/Worker, or must create their own Worker (Workers &
   Pages → Create → Connect to Git → this repo, no build command override needed since
   `wrangler.jsonc` at the repo root already declares `main`/`assets.directory`) — which
   will get its own `*.workers.dev` hostname.

2. **`GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`.** These live in the Worker's
   Settings → Variables and Secrets, not in this repo (correctly — they're secrets).
   They are tied to a **specific GitHub OAuth App**, which is in turn tied to a
   **specific callback URL** (`https://<hostname>/api/callback`). If you deploy to a
   *different* hostname (new Worker, custom domain, forked repo under a different
   account), you need a **new GitHub OAuth App** with that hostname's callback URL, and
   the corresponding new Client ID/Secret added to that Worker's settings — the old
   OAuth App's credentials will not work against a new hostname.

3. **Cloudflare Access policy.** Also account/zone-specific, not in this repo. A new
   deploy target needs its own Access application configured under Zero Trust → Access →
   Applications, scoped to whoever should be allowed into `/admin`.

**In short:** cloning this repo gets you 100% of the code and content. Getting a *live,
editable* copy of the site also requires steps 1–3 above, redone against the new
Cloudflare account/hostname — there is no way to make those portable via git, since they
are inherently tied to a specific OAuth App + specific Cloudflare account's secrets.
