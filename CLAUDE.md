# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional landing page for AI consulting services with a dedicated Claude Code workshop page, specifically targeting CTOs, VPs of Engineering, and Heads of Product. The site showcases expertise in AI-driven development workflows, coding agents, and offers intensive Claude Code training workshops.

## Common Commands

### Development (Recommended)
```bash
./dev.sh       # Single terminal: Runs Jekyll + TailwindCSS with live reload
```
Visit http://localhost:4000 for the homepage, http://localhost:4000/workshop/ for the workshop page.

### Alternative Development Options
```bash
# Option 1: Docker Compose
docker-compose -f docker-compose.dev.yml up

# Option 2: Manual Jekyll with Docker
docker run --rm -v "$PWD:/srv/jekyll" -p 4000:4000 jekyll/jekyll:latest jekyll serve --force_polling --livereload

# Option 3: Build CSS only
npm run dev    # Watch mode - rebuilds CSS on file changes
npm run build  # Production build - minified CSS output
```

### Build System
The project uses Jekyll for templating and TailwindCSS for styling:
- **Jekyll**: Processes templates in `_layouts/` and `_includes/` 
- **TailwindCSS**: Input `src/styles.css` → Output `dist/styles.css`
- **GitHub Pages**: Automatically builds Jekyll on deployment (no local build needed)

## Architecture & Structure

### Core Components
- **Jekyll Static Site**: Templated pages with shared components
- **Main Pages**: 
  - `index.html` - Landing page with AI consulting services
  - `workshop.html` - Claude Code 2-day workshop details
- **Jekyll Templates**:
  - `_layouts/default.html` - Base template
  - `_includes/head.html` - SEO, meta tags, styles
  - `_includes/header.html` - Navigation
  - `_includes/footer.html` - Footer
- **TailwindCSS Styling**: Utility-first CSS framework with custom theme
- **Content Management**: Markdown files in `content/en/` serve as content reference (not dynamically loaded)

### Page Architecture

#### Landing Page (`index.html`)
The landing page follows a specific flow designed for conversion:
1. **Hero** - Main value proposition with primary CTA
2. **About Me** - Credibility and background (Angel Dimitrov's experience)
3. **Value Proposition** - 4 key benefits with icons
4. **AI Agents** - Comprehensive showcase of AI development team concept
5. **Services** - 3 service offerings (Advisory, Pilot, Workshop)
6. **CTA** - Secondary conversion point
7. **Footer** - Navigation and contact

#### Workshop Page (`workshop.html`)
Dedicated Claude Code workshop page with:
1. **Hero** - 2-day intensive workshop proposition
2. **Overview** - Why Claude Code changes everything
3. **Curriculum** - Day 1 & Day 2 detailed breakdown
4. **Features** - Plan Mode, Subagents, MCP, etc.
5. **Details** - Format, prerequisites, support
6. **Pricing** - Three tiers (Standard €4,900, Premium €7,900, Enterprise)
7. **Success Stories** - Testimonials
8. **FAQ** - Common questions
9. **CTA** - Book consultation

## Visual Development

### Design Principles
- Comprehensive design checklist in `/context/design-principles.md`
- Brand style guide in `/context/style-guide.md`
- When making visual (front-end, UI/UX) changes, always refer to these files for guidance

### Quick Visual Check
IMMEDIATELY after implementing any front-end change:
1. **Identify what changed** - Review the modified components/pages
2. **Navigate to affected pages** - Use `mcp__playwright__browser_navigate` to visit each changed view
3. **Verify design compliance** - Compare against `/context/design-principles.md` and `/context/style-guide.md`
4. **Validate feature implementation** - Ensure the change fulfills the user's specific request
5. **Check acceptance criteria** - Review any provided context files or requirements
6. **Capture evidence** - Take full page screenshot at desktop viewport (1440px) of each changed view
7. **Check for errors** - Run `mcp__playwright__browser_console_messages`

This verification ensures changes meet design standards and user requirements.

### Comprehensive Design Review
Invoke the `@agent-design-review` subagent for thorough design validation when:
- Completing significant UI/UX features
- Before finalizing PRs with visual changes
- Needing comprehensive accessibility and responsiveness testing

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

### Jekyll Configuration
- `_config.yml` - Site configuration, plugins, and permalinks
- Pretty URLs enabled: `workshop.html` becomes `/workshop/`
- GitHub Pages compatible settings included

### Contact Information Updates
When updating contact details, modify these locations:
- `_config.yml`: Site-wide email and author information
- Calendly links: Replace in both `index.html` and `workshop.html`
- All CTA buttons point to Calendly for direct booking

### Color Scheme
Modify `tailwind.config.js` to change brand colors:
- `primary`: Main accent color (buttons, links, icons)
- `secondary`: Darker variant for hover states

## **🚨 CRITICAL: CSS Deployment Process**

**The CSS is now committed to the repository to avoid recurring deployment issues.**

### Why This Approach?
- ✅ Eliminates recurring "CSS missing" issues that plagued GitHub Actions builds
- ✅ Ensures CSS is always available immediately after deployment
- ✅ Simplifies deployment process and reduces build complexity
- ✅ Trade-off: CSS file in version control is worth the reliability gain

### How It Works:
1. **Local Development**: Run `npm run dev` for watch mode
2. **Before Committing**: Run `npm run build` to generate production CSS
3. **Commit Changes**: Commit both source changes AND `dist/styles.css`
4. **Production Deployment**: GitHub Actions deploys with CSS already included

### **🔧 Troubleshooting "Missing CSS":**
If styles appear missing (this should be rare):
1. **Check GitHub Actions**: `gh run list --limit 1` - should show ✅ success
2. **View workflow logs**: `gh run view --log` - look for "TailwindCSS build successful"
3. **Clear browser cache**: Hard refresh (Cmd+Shift+R)
4. **Wait for deployment**: GitHub Pages takes 1-2 minutes after successful workflow

### **❌ NEVER DO THIS:**
- Don't forget to run `npm run build` before committing style changes
- Don't commit development CSS (unminified) - always use production build
- Don't modify styles without rebuilding CSS

### **✅ IF CSS IS TRULY MISSING:**
```bash
# 1. Trigger a rebuild
git commit --allow-empty -m "Trigger deployment rebuild"
git push origin main

# 2. Check if workflow fails
gh run list --limit 1

# 3. View detailed logs
gh run view --log | grep -A 10 -B 5 "TailwindCSS\|CSS file"
```

### Deployment Architecture:
- **Simplified workflow**: `.github/workflows/deploy.yml` deploys pre-built assets
- **TailwindCSS building**: Done locally via `npm run build` before committing
- **Jekyll processing**: Builds static site with committed CSS
- **CSS availability**: Guaranteed since CSS is in repository
- **Automatic deployment**: Deploys to GitHub Pages with all assets ready

## PRD Compliance

This codebase implements the requirements from `PRD.md`:
- Target audience: Engineering leaders
- Core value: Save time, cost, improve quality
- Clean, minimal design with TailwindCSS
- Static site with direct Calendly integration
- Mobile-responsive design
- when creating PRs always check if the tests are successfull