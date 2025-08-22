# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional landing page for AI consulting services, specifically targeting CTOs, VPs of Engineering, and Heads of Product. The site showcases expertise in AI-driven development workflows, coding agents, and software development consulting.

## Common Commands

### Development
```bash
npm run dev    # Watch mode - rebuilds CSS on file changes
npm run build  # Production build - minified CSS output
```

### Build System
The project uses TailwindCSS for styling with a simple build pipeline:
- Input: `src/styles.css` (TailwindCSS source)
- Output: `dist/styles.css` (compiled CSS)
- Always run `npm run build` after making HTML/styling changes

### Testing the Site
```bash
open index.html  # Open in browser for testing
```

## Architecture & Structure

### Core Components
- **Single Page Application**: All content in `index.html` with section-based navigation
- **TailwindCSS Styling**: Utility-first CSS framework with custom theme
- **Content Management**: Markdown files in `content/en/` serve as content reference (not dynamically loaded)

### Section Architecture
The landing page follows a specific flow designed for conversion:
1. **Hero** - Main value proposition with primary CTA
2. **About Me** - Credibility and background (Angel Dimitrov's experience)
3. **Value Proposition** - 4 key benefits with icons
4. **AI Agents** - Comprehensive showcase of AI development team concept
5. **Services** - 3 service offerings (Advisory, Pilot, Workshop)
6. **CTA** - Secondary conversion point
7. **Footer** - Legal placeholders

### AI Agents Section (Core Feature)
This is the most complex section showcasing the "AI Development Team" concept:
- **8 specialized agent roles**: Project Manager, Backend, Frontend, Testing, Browser, DevOps, Documentation, QA
- **Console demos**: Terminal-style examples showing parallel agent workflows
- **Development lifecycle coverage**: Planning → Development → Testing → Deployment/Monitoring
- **Real-world impact examples**: Team coordination scenarios

### Styling System
- **Custom colors**: `primary` (#3B82F6) and `secondary` (#1E40AF) defined in `tailwind.config.js`
- **Font**: Inter from Google Fonts
- **Responsive design**: Mobile-first with `md:` and `lg:` breakpoints
- **Component patterns**: Cards with gradient backgrounds and hover effects

### Content Management Strategy
- **HTML contains actual content** for performance and SEO
- **Markdown files in `content/en/`** serve as content reference and backup
- **No dynamic content loading** - pure static site for fast deployment

## Key Configuration

### Contact Information Updates
When updating contact details, modify these locations in `index.html`:
- Calendly links: Replace `https://calendly.com/your-link`
- All CTA buttons point to Calendly for direct booking

### Color Scheme
Modify `tailwind.config.js` to change brand colors:
- `primary`: Main accent color (buttons, links, icons)
- `secondary`: Darker variant for hover states

### Deployment
The site is deployment-ready for static hosting (GitHub Pages, Cloudflare Pages, Netlify, Vercel) with no build configuration required beyond `npm run build`.

## PRD Compliance

This codebase implements the requirements from `PRD.md`:
- Target audience: Engineering leaders
- Core value: Save time, cost, improve quality
- Clean, minimal design with TailwindCSS
- Static site with direct Calendly integration
- Mobile-responsive design