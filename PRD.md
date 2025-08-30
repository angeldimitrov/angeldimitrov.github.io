# PRD: AI Consulting & Workshops Landing Page (English Only)

## 1. Purpose
The landing page is the single source of truth for my consulting and workshop offerings. It should:
- Explain what I do (AI-driven software development consulting, workshops, pilots).
- Convince engineering leaders/CTOs/product heads that I can help them save **time, cost, and improve quality**.
- Provide a clear **call to action (CTA)**: book a call, schedule a workshop, or contact me.

---

## 2. Target Audience
- CTOs, VPs of Engineering, Heads of Product.
- Companies exploring AI-native developer workflows.
- Teams curious about coding agents, automation, and AI in dev processes.

---

## 3. Core Sections

### 3.1 Hero Section
- Headline + subheadline in English.
- Animated D3.js agent network visualization showing interconnected AI agents.
- CTA: "Schedule a Free Consultation" (Calendly link).

### 3.2 Approach Section (New)
- Title: "Not Vibe Coding – Enterprise AI Workflows"
- Two-column layout explaining the difference between casual AI experimentation and professional enterprise workflows.
- Positions the service as enterprise-grade, not playground experiments.

### 3.3 Benefits/Value Proposition
- 4 key benefits with icons and descriptions:
  - 3x Faster Delivery (parallel AI agent execution)
  - 40% Lower Costs (automation reducing manual work)
  - Superior Quality (automated testing and code reviews)
  - Seamless Integration (compatible with existing workflows)

### 3.4 AI Development Team Section
- Comprehensive showcase of 8 specialized AI agents:
  - Project Manager, Backend, Frontend, Testing, Browser, DevOps, Documentation, QA
- Console/terminal demo showing parallel agent workflows
- Development lifecycle coverage from planning to deployment

### 3.5 Services Section  
- **Advisory**: Strategic guidance on AI-native workflows  
- **Pilot / Proof of Concept**: Test impact in one workflow  
- **Hands-on Workshop**: 1-day guided examples only (not own codebase for now)  

### 3.6 About Section
- Personal introduction of Angel Dimitrov
- Professional portrait image
- Background: 15+ years experience, worked with CTOs/VPs
- Credentials and expertise areas

### 3.7 Client Success Stories
- Testimonials from VP Engineering and CTO personas
- Success metrics (40% delivery time reduction, ROI validation)
- Avatar initials in gradient circles

### 3.8 Call to Action
- Text: "Transform Your Development Process"
- Primary CTA: Schedule consultation via Calendly
- Secondary option: Email contact

### 3.9 Footer
- Navigation links to main sections
- Contact information
- Copyright notice
- Future: Legal links (Impressum, Datenschutz)  

---

## 4. Style & Design
- Clean, minimal, modern design system
- TailwindCSS for utility-first styling
- Custom D3.js animations for agent network visualization
- Color scheme:
  - Primary: Blue (#3B82F6) 
  - Secondary: Purple gradients
  - Dark sections: #1e293b background with grid pattern overlay
  - Light sections: Neutral gray backgrounds
- Typography: Inter font family
- Gradient text effects for emphasis
- Responsive mobile-first design with horizontal scroll navigation on mobile

---

## 5. Technical Requirements
- Static HTML/CSS/JS (no backend required)
- Deployment-ready for GitHub Pages / Cloudflare Pages
- D3.js custom build for agent network animation
- Contact integration:
  - Primary: Calendly scheduling links
  - Fallback: `mailto:` email links
- Analytics: Google Analytics (G-2CNK0V78G7)
- Performance optimizations:
  - Font preloading
  - DNS prefetching
  - Optimized image assets

---

## 6. Deliverables
- `index.html` with all sections
- `content/en/*.md` with section content reference
- `dist/styles.css` compiled TailwindCSS
- `dist/d3-custom.min.js` custom D3 build
- `CLAUDE.md` with project instructions
- `context/` folder with design principles and style guide

