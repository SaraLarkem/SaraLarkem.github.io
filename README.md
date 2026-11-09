# Sara Larkem — Portfolio

A clean, single-page portfolio site built with React, TypeScript, and Vite. Content is centralised in one data file for easy updates.

## Features

- Responsive layout with mobile navigation
- Light and dark mode toggle
- Semantic, accessible HTML
- SEO and Open Graph metadata placeholders
- Component tests with Vitest

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Lint and test

```bash
npm run lint
npm run test
```

## Customising content

Edit **`src/data/portfolio.ts`** to update:

- Personal details, email, and social links
- About section highlights
- Internship experience
- Projects (names, descriptions, technologies, URLs)
- Skills categories
- CV path and Open Graph metadata

Look for `// TODO:` comments in that file for placeholders you still need to replace.

### CV

1. Add your PDF to `public/cv/sara-larkem-cv.pdf` (or another path).
2. Update `siteConfig.links.cv` in `src/data/portfolio.ts`.

### Favicon and Open Graph image

- Favicon: replace `public/favicon.svg`
- Social preview: add `public/og-image.png` and update `siteConfig.og` in the data file

## Deployment

This is a static site. After `npm run build`, deploy the `dist/` folder to any static host:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

For GitHub Pages with a project site, set `base` in `vite.config.ts` if needed:

```ts
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

## Project structure

```
src/
  components/     Reusable UI components
  data/
    portfolio.ts  All site content (edit this file)
  hooks/
    useTheme.ts   Light/dark theme state
  test/           Vitest setup and tests
```

## Licence

Private portfolio project — customise as needed.
