# RMApps Website

A 3-page Next.js website for RMApps, describing our offerings: **apps**, **services**, **websites**, and **courses**. Suited for use when applying for an Apple Developer Program business account.

## Pages

- **Home** — Hero, overview of what we do, and links to services and about.
- **Services** — Detailed breakdown of apps, services, websites, and courses.
- **About** — Company description and contact information.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
```

Static files are output to the `out` directory.

## Deploy on Netlify

1. Push this repo to GitHub (or another Git provider).
2. In Netlify: **Add new site** → **Import an existing project**.
3. Set **Build command**: `npm run build`
4. Set **Publish directory**: `out`
5. Deploy.

Alternatively, use the included `netlify.toml`; Netlify will use it automatically.

## License

Private. © RMApps.
