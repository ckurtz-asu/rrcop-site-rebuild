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

The CMS UI lives at `/admin`. In production on Cloudflare Pages, Decap needs an auth
backend — either:

- **Cloudflare Access + a small auth proxy / Decap's GitHub OAuth provider**, or
- Netlify Identity/Git Gateway (despite the name, works from any static host) if you'd
  rather not stand up your own OAuth proxy.

Neither is configured yet — `src/admin/config.yml` currently points at `git-gateway` as a
placeholder. For local-only editing without any auth setup, run `npx decap-server`
alongside `npm run serve` and uncomment `local_backend: true` in `src/admin/config.yml`.

## What's NOT migrated yet

This is a structural proof of concept, not a full migration:

- Only Home, Resources (2 sample entries), and About are rebuilt
- No `/join` signup form backend (Google Sites' form → needs a Cloudflare Pages Function
  or a third-party form service)
- No site search (Google Sites' built-in search → would need Pagefind/Lunr or similar)
- No CMS auth backend wired up yet (see above)
- Original site's institution map widget not reproduced

## Deploying

Not yet connected to Cloudflare Pages Git integration. For this test pass, build locally
and deploy the `_site/` output directory manually.
