# Deployment Guide

## Quick Deploy to Vercel

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Production ready build"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Vercel will automatically detect Next.js and deploy

## Manual Build & Deploy

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build for production**
   ```bash
   npm run build
   ```

3. **Test the build locally**
   ```bash
   npm start
   ```

## Environment Variables

Set these in your Vercel dashboard:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME="SDC Management Solutions"
```

## Build Optimizations

- ✅ Static export enabled
- ✅ Image optimization disabled (for static export)
- ✅ SWC minification enabled
- ✅ Bundle splitting optimized
- ✅ TypeScript compilation
- ✅ ESLint disabled during build (faster builds)

## Performance Features

- WebP/AVIF image formats
- Code splitting and lazy loading
- Optimized bundle size
- Compression enabled
- SEO optimized with sitemap and robots.txt

## Troubleshooting

If build fails:

1. **Clear cache**
   ```bash
   npm run clean
   rm -rf node_modules
   npm install
   ```

2. **Check TypeScript errors**
   ```bash
   npm run type-check
   ```

3. **Fix linting issues**
   ```bash
   npm run lint:fix
   ```

## Production Checklist

- [ ] All TypeScript errors resolved
- [ ] All images are in public folder
- [ ] Environment variables set
- [ ] SEO metadata updated
- [ ] 404 and error pages working
- [ ] Mobile responsive tested
- [ ] Performance optimized 