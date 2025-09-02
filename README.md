# AI Consulting & Workshops Landing Page

A professional landing page for AI-driven software development consulting services, built with Jekyll, TailwindCSS, and designed for GitHub Pages deployment.

## Features

- Clean, modern, responsive design
- Mobile-first approach
- Jekyll templating for maintainable code
- TailwindCSS for styling
- Claude Code Workshop page
- SEO optimized with structured data
- Fast loading static site

## Project Structure

```
ai-consulting-landing/
├── index.html              # Main landing page (Jekyll)
├── workshop.html           # Claude Code workshop page (Jekyll)
├── _layouts/
│   └── default.html       # Base template
├── _includes/
│   ├── head.html          # HTML head section
│   ├── header.html        # Navigation
│   └── footer.html        # Footer
├── _config.yml            # Jekyll configuration
├── src/
│   └── styles.css         # TailwindCSS input file
├── dist/
│   └── styles.css         # Compiled CSS (generated)
├── content/en/            # Content markdown files (reference)
├── dev.sh                 # Development script (Jekyll + TailwindCSS)
├── Gemfile                # Ruby dependencies for Jekyll
├── package.json           # Node dependencies
├── tailwind.config.js     # TailwindCSS configuration
└── README.md             # This file
```

## Setup & Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Docker (for Jekyll) OR Ruby/Jekyll installed locally

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-consulting-landing
```

2. Install dependencies:
```bash
npm install
```

3. Build CSS:
```bash
npm run build
```

### Development

#### Quick Start (Recommended - Single Terminal)
```bash
./dev.sh
```
This runs both Jekyll (via Docker) and TailwindCSS in watch mode. Visit http://localhost:4000

#### Alternative: Docker Compose
```bash
docker-compose -f docker-compose.dev.yml up
```

#### Alternative: Manual Setup
Terminal 1 - Jekyll with Docker:
```bash
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  --publish 4000:4000 \
  jekyll/jekyll:latest \
  jekyll serve --force_polling --livereload
```

Terminal 2 - TailwindCSS:
```bash
npm run dev
```

#### Alternative: Local Jekyll (if installed)
```bash
bundle install
bundle exec jekyll serve
```

### Pages
- Homepage: http://localhost:4000
- Workshop: http://localhost:4000/workshop/

## Configuration

### Update Contact Information

1. **Email**: Replace `your.email@example.com` in index.html
2. **Phone**: Replace `+1 (234) 567-890` in index.html
3. **LinkedIn**: Replace `https://linkedin.com/in/yourprofile` with your LinkedIn URL
4. **Calendly**: Replace `https://calendly.com/your-link` with your Calendly booking link

### Contact Form Setup

The contact form is configured to work with Formspree. To activate it:

1. Sign up for a free account at [Formspree.io](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORM_ID` in the form action URL:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

Alternative: Use a simple mailto link by replacing the form with:
```html
<a href="mailto:your.email@example.com" class="button">Send Email</a>
```

## Deployment

### GitHub Pages (Recommended)

This project uses a custom GitHub Actions workflow for deployment to ensure TailwindCSS is properly built and included:

1. Push your code to a GitHub repository
2. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
   - Build TailwindCSS from `src/styles.css` to `dist/styles.css`
   - Build Jekyll site
   - Ensure CSS file is copied to `_site/dist/` directory
   - Deploy to GitHub Pages

3. Go to Settings > Pages
4. Select source: "Deploy from GitHub Actions"
5. Your site will be available at: `https://[username].github.io/` (for username.github.io repos) or `https://[username].github.io/[repository-name]` (for other repos)

**Important**: The workflow includes a verification step that manually copies the CSS file if Jekyll doesn't include it automatically. This ensures the CSS is always available at `/dist/styles.css` on the deployed site.

### Cloudflare Pages

1. Push your code to a GitHub repository
2. Log in to Cloudflare Pages
3. Create a new project
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Build output directory: `/`
6. Deploy

### Netlify

1. Push your code to a GitHub repository
2. Log in to Netlify
3. New site from Git
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `/`
6. Deploy

### Vercel

1. Push your code to a GitHub repository
2. Import project in Vercel
3. No build settings needed (static site)
4. Deploy

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: '#3B82F6',    // Blue
  secondary: '#1E40AF',  // Dark Blue
}
```

### Fonts

The site uses Inter font by default. To change it, update:
1. The Google Fonts import in `src/styles.css`
2. The fontFamily in `tailwind.config.js`

### Content

All text content is stored in markdown files in `content/en/` for easy editing. The actual site uses the content directly in HTML for better performance, but the markdown files serve as a content reference.

## Analytics (Optional)

To add privacy-friendly analytics with Plausible:

1. Sign up at [Plausible.io](https://plausible.io)
2. Add your domain
3. Add the script tag before `</head>` in index.html:
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## Troubleshooting

### CSS Not Loading on GitHub Pages

If you encounter CSS 404 errors on GitHub Pages:

1. **Ensure Jekyll includes dist directory**: The `_config.yml` should have:
   ```yaml
   include:
     - _pages
     - dist
   ```

2. **Check GitHub Actions workflow**: The `.github/workflows/deploy.yml` includes a verification step:
   ```bash
   # Ensure CSS file is in the final _site directory
   if [ -f "dist/styles.css" ] && [ ! -f "_site/dist/styles.css" ]; then
     mkdir -p _site/dist
     cp dist/styles.css _site/dist/styles.css
   fi
   ```

3. **Verify TailwindCSS build**: Check that `dist/styles.css` is generated during the workflow:
   ```bash
   npm run build  # Should create dist/styles.css
   ```

4. **Don't commit dist/styles.css**: The CSS should be built by GitHub Actions, not committed to the repository.

### Development Issues

- If styles aren't updating, try: `npm run build` to rebuild CSS
- If Jekyll isn't recognizing changes, restart `./dev.sh`
- Check browser console for any CSS loading errors

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Page load time: < 1 second
- Mobile-optimized

## License

MIT License - feel free to use this template for your own consulting business.

## Support

For questions or issues, please open an issue in the GitHub repository.
