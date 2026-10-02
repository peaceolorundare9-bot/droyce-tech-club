# Droyce Tech Club

> A premium technology, learning and digital community.

The official website of Droyce Tech Club — a private technology society connecting independent creators with an engaged global learning community through a structured, year-long digital experience.

**Contact:** drpeace.droycetechclub@gmail.com

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS 4**
- **framer-motion** — reveal, parallax and counter animations
- **Prisma + SQLite** — optional local storage for contact submissions (dev only)
- **Self-hosted variable fonts** — Playfair Display, Manrope, JetBrains Mono (`src/fonts/`, no external requests)

## Getting started

```bash
bun install                # or npm install

# optional — only needed for the /api/contact route in local dev
cp .env.example .env
mkdir -p db && bun run db:push

bun run dev                # http://localhost:3000
```

## Building the static site

The production deployment is a fully static export (no server required):

```bash
bun run build:static
```

This script:

1. Temporarily excludes `src/app/api` (no backend on static hosting),
2. Builds with `output: "export"` into `out/`,
3. Bakes the contact form's prefilled **mailto** flow to `drpeace.droycetechclub@gmail.com`.

The result in `out/` is a complete, self-contained static site.

## Deploying to Cloudflare Pages

### Automatic deploys (recommended)

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`).
**Every edit pushed to `main` is automatically rebuilt and published to
https://droyce-tech-club.pages.dev within ~2 minutes.**

Setup (already done once):
1. Repo secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are stored
   under *Settings → Secrets and variables → Actions*.
2. Any commit to `main` (including edits made with the GitHub web editor)
   triggers a build + deploy automatically.

### Manual deploys using wrangler (direct upload)

```bash
bunx wrangler pages project create droyce-tech-club --production-branch=main
bunx wrangler pages deploy out --project-name=droyce-tech-club
```

Or connect this repository to Cloudflare Pages in the dashboard with:

| Setting              | Value                       |
| -------------------- | --------------------------- |
| Framework preset     | None / Other                |
| Build command        | `bun run build:static`      |
| Build output directory | `out`                     |

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # metadata, fonts, root layout
│   ├── page.tsx            # single-page composition
│   ├── globals.css         # design system (tokens, typography, utilities)
│   └── api/contact/        # dev-only submission endpoint (excluded from static build)
├── components/
│   ├── site/               # the 15 website sections (nav, hero, foundation, …)
│   └── ui/                 # toast primitives
├── fonts/                  # self-hosted variable woff2 fonts
├── hooks/                  # use-toast
└── lib/                    # db client, utils
public/
└── images/                 # brand photography (hero, committee, …)
```

## License & copyright

© 2026 Droyce Tech Club. All Rights Reserved.
