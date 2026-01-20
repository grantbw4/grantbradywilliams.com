# Setup & Deployment Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run locally:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

## Deploying to GitHub Pages

1. **Create a new GitHub repository:**
   - Go to [GitHub](https://github.com/new)
   - Name it `grantbradywilliams.com`
   - Make it public
   - Don't initialize with README (you already have one)

2. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal website"
   git branch -M main
   git remote add origin https://github.com/grantbw4/grantbradywilliams.com.git
   git push -u origin main
   ```

3. **Configure GitHub Pages:**
   - Go to your repo Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `docs` or `gh-pages` (you'll need to build and push to this)

4. **Build and deploy:**
   ```bash
   npm run build
   # The build output goes to the /out directory
   ```

## Deploying to Vercel (Recommended - Easiest)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   Follow the prompts. Vercel will automatically detect it's a Next.js project.

3. **Connect your domain:**
   - In Vercel dashboard, go to your project settings
   - Add domain: `grantbradywilliams.com`
   - Follow instructions to update your domain's DNS records

## Updating Content

### Adding a new project:
Edit `/app/projects/page.tsx` and add a new object to the `projects` array.

### Updating the About page:
Edit `/app/about/page.tsx`

### Updating social links:
Edit `/app/about/page.tsx` (in the "Find Me Elsewhere" section)

### Changing colors:
Edit `/tailwind.config.js` in the `theme.extend.colors` section.

## Customization Tips

### Adding a new page:
Create a new folder in `/app` with a `page.tsx` file. For example:
```
/app/new-page/page.tsx
```

### Adding the page to navigation:
Edit `/components/Navigation.tsx` and add to the `links` array.

### Updating metadata (SEO):
Edit `/app/layout.tsx` to update title and description.

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Static Export**: Pre-renders all pages for optimal performance

## Future Enhancements

If you want to add a blog later:
1. Create `/app/blog/page.tsx`
2. Add blog posts as markdown files in `/content/blog/`
3. Use a library like `gray-matter` to parse markdown
4. Create `/app/blog/[slug]/page.tsx` for individual posts

## Questions?

Email: grantwilliamsaz@gmail.com
