# Toycycle B2B Website

A Next.js B2B website for Toycycle's Certified Partner Market.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router directory
  - `page.tsx` - Main landing page
  - `layout.tsx` - Root layout with Header
  - `globals.css` - Global styles
  - `contact/` - Contact page
- `components/` - React components
  - `Header.tsx` - Site header with navigation
- `public/images/` - Image assets folder
  - Place all images here (hero-image.png, logos, etc.)
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration

## Features

- Responsive design with sticky header
- Modern UI with smooth animations
- SEO-friendly structure
- TypeScript support
- Image optimization with Next.js Image component

## Adding Images

Place your images in the `public/images/` folder. The hero image is currently set to `/images/hero-image.png`. You can:

1. Add your hero image as `public/images/hero-image.png`
2. Or update the image path in `app/page.tsx` to match your image filename

