# CoAuthors Chat - Landing Page

Modern, performant landing page built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 16** with App Router
- 🎨 **Tailwind CSS v4** for styling
- 📱 **Fully responsive** design
- 🌙 **Dark mode** support
- ⚡ **Optimized performance** with image optimization, compression, and more
- 🔍 **SEO optimized** with proper metadata
- ♿ **Accessible** components

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles
├── components/
│   ├── nav.tsx          # Navigation component
│   ├── hero.tsx         # Hero section
│   ├── features.tsx     # Features section
│   └── cta.tsx          # Call-to-action section
└── next.config.ts       # Next.js configuration
```

## Customization

The landing page is fully customizable. Update the content in:
- `components/hero.tsx` - Hero section content
- `components/features.tsx` - Features list
- `components/cta.tsx` - Call-to-action content
- `app/layout.tsx` - SEO metadata

## Performance Optimizations

- Image optimization with AVIF and WebP formats
- Font optimization with Next.js font system
- Code splitting and tree shaking
- Compression enabled
- Optimized bundle size

## License

MIT
