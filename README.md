# AI Consulting & Workshops Landing Page

A professional landing page for AI-driven software development consulting services, built with HTML, TailwindCSS, and designed for easy deployment.

## Features

- Clean, modern, responsive design
- Mobile-first approach
- TailwindCSS for styling
- Contact form integration ready (Formspree)
- SEO optimized
- Fast loading static site

## Project Structure

```
ai-consulting-landing/
├── index.html              # Main landing page
├── src/
│   └── styles.css         # TailwindCSS input file
├── dist/
│   └── styles.css         # Compiled CSS (generated)
├── content/en/            # Content markdown files
│   ├── hero.md
│   ├── value-proposition.md
│   ├── services.md
│   └── contact.md
├── package.json           # Node dependencies
├── tailwind.config.js     # TailwindCSS configuration
└── README.md             # This file
```

## Setup & Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

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

For development with live CSS reloading:
```bash
npm run dev
```

This will watch for changes in your HTML files and rebuild the CSS automatically.

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

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source: "Deploy from a branch"
4. Choose branch: main (or master)
5. Select folder: / (root)
6. Save and wait for deployment
7. Your site will be available at: `https://[username].github.io/` (for username.github.io repos) or `https://[username].github.io/[repository-name]` (for other repos)

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
