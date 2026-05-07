# Social Listen In Blog

A public blog built with Next.js, TypeScript, Tailwind CSS, and local MDX files.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- MDX for posts

## Local development
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Add a new post
1. Create `content/posts/your-slug.mdx`
2. Add frontmatter:

```md
---
title: "Your Title"
excerpt: "One sentence summary"
date: "2026-05-07"
tags: ["tag-one", "tag-two"]
---
```

3. Add your Markdown/MDX content below frontmatter.
4. Add the slug to `postModules` in `app/blog/[slug]/page.tsx` so it can be rendered.

## Generated routes
- `/` homepage
- `/blog` blog index
- `/blog/[slug]` individual posts
- `/about` about page
- `/rss.xml` RSS feed
- `/sitemap.xml` sitemap (generated via `app/sitemap.ts`)

## Deploy
### Vercel
1. Push this repository to GitHub.
2. Import into Vercel.
3. Framework preset: Next.js.
4. Build command: `npm run build`
5. Output: `.next`

No additional environment variables are required for this starter.
