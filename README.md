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

The CMS UI lives at `/admin`. Auth is wired up via a **GitHub OAuth backend** running on
Cloudflare Pages Functions (`functions/api/auth.js` + `functions/api/callback.js`, vendored
from [SubhenduX/decap-cms-cloudflare-pages](https://github.com/SubhenduX/decap-cms-cloudflare-pages)),
gated by **Cloudflare Access**. Setup is split between what's already done in this repo and
what only you can do in the GitHub/Cloudflare dashboards:

### Already done (in this repo)

- `functions/api/auth.js` — redirects to GitHub's OAuth authorize endpoint
- `functions/api/callback.js` — exchanges the OAuth `code` for an access token and posts it
  back to the Decap popup window
- `src/admin/config.yml` — `backend.name: github`, pointed at this repo/branch, with
  `auth_endpoint: api/auth`

### You need to do (one-time, per environment)

1. **Create a GitHub OAuth App** — [github.com/settings/developers](https://github.com/settings/developers) →
   OAuth Apps → New OAuth App.
   - **Homepage URL**: `https://rrcop-site-rebuild.kristoff.workers.dev`
   - **Authorization callback URL**: same homepage URL (per the template's README, a
     subdirectory of the homepage URL works and is more reliable here than pointing
     directly at `/api/callback`)
   - Save the **Client ID**, generate and save the **Client Secret**.

2. **Add the OAuth credentials to Cloudflare Pages** — in the `rrcop-site-rebuild` Pages
   project → Settings → Environment variables → add for the **Production** environment:
   - `GITHUB_CLIENT_ID` = the Client ID from step 1
   - `GITHUB_CLIENT_SECRET` = the Client Secret from step 1 (mark as **Secret**, not plaintext)

   Redeploy (or trigger a new deployment) after adding these — Pages Functions env vars
   only take effect on the next build.

3. **Gate `/admin/*` with Cloudflare Access** — in the Cloudflare dashboard for this zone
   (requires the domain/Worker route to be on a zone Access can bind to — a bare
   `*.workers.dev`/`*.pages.dev` subdomain needs Access configured under **Zero Trust** →
   **Access** → **Applications**, self-hosted application type):
   - **Application domain**: `rrcop-site-rebuild.kristoff.workers.dev/admin`
   - **Session duration**: your call (e.g. 24h for a test site)
   - **Policy**: Allow — Include rule scoped to your identity (email, or your identity
     provider group if you have Access already set up with one)
   - This adds a Cloudflare-login prompt *before* the GitHub OAuth screen even loads —
     defense in depth beyond "must be a GitHub collaborator on this repo."

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
