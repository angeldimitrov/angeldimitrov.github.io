# Website Optimization Roadmap

## ✅ Phase 1-2: Trust & Clarity (IN PROGRESS)
**Impact: 🔥🔥🔥 | Timeline: Day 1-2**

### Phase 1: Immediate Trust & Clarity
- [ ] Add client logo bar under hero
- [ ] Sharpen single promise in hero
- [ ] Fix "Vibe Coding" section messaging

### Phase 2: Service Clarity & Social Proof
- [ ] Productize services with scope/duration/pricing
- [ ] Add "How It Works" 14-day timeline
- [ ] Create mini case studies

---

## 📋 Phase 3: Conversion Optimization (PLANNED)
**Impact: 🔥🔥 | Timeline: Day 2-3**

### Tasks:
1. **Persistent Header CTA** (`_includes/header.html`)
   - Add floating "Book Strategy Call" button in top-right
   - Different color from nav to stand out
   - Should persist on scroll

2. **Calculator Soft Handoff** (roi-calculator page)
   - After results display, add contextual CTA
   - Text: "Review these numbers with an expert"
   - Link to specific Calendly type for ROI reviews
   - Should feel like natural next step

3. **Add Mailto Links** (throughout site)
   - Make email clickable: `angel@coding-agents.ai`
   - Add "Prefer email?" option near CTAs
   - Especially in footer and contact sections

**Success Metrics:**
- Calendly conversion rate: 5-8%
- Calculator completion rate: 40%+

---

## 🔧 Phase 4: SEO & Technical (PLANNED)
**Impact: 🔥🔥 | Timeline: Day 3-5**

### 1. Enhanced Schema Markup
**Files: `_includes/head.html`, `index.html`**

Add to existing structured data:

```json
// FAQ Schema
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AI-native development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI-native development uses specialized AI agents across the entire development lifecycle—from planning through deployment—with professional standards, quality checks, and CI/CD pipelines."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Teams typically see measurable productivity gains within 2-3 weeks of implementing AI-native workflows, with 40-60% velocity improvements within the first month."
      }
    },
    {
      "@type": "Question",
      "name": "What is the investment for the 2-day workshop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Claude Code workshop is available in three tiers: Standard (€4,900), Premium (€7,900), and Enterprise (custom pricing)."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with remote teams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all services are available remotely worldwide. The workshop and pilot implementations are designed for distributed teams."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in a pilot implementation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pilot implementations include workflow design, proof-of-concept setup, team training, measurable ROI demonstration, and a roadmap for broader adoption."
      }
    }
  ]
}
```

```json
// BreadcrumbList Schema (for all pages)
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://coding-agents.ai/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Workshop",
      "item": "https://coding-agents.ai/workshop/"
    }
  ]
}
```

```json
// Enhanced Organization Schema
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Coding Agents AI",
  "url": "https://coding-agents.ai",
  "logo": "https://coding-agents.ai/assets/images/portrait/portrait-800w.jpg",
  "description": "AI-native development consulting for engineering leaders",
  "founder": {
    "@type": "Person",
    "name": "Angel Dimitrov"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "email": "angel@coding-agents.ai",
    "availableLanguage": ["English", "German"]
  },
  "sameAs": [
    "https://github.com/angeldimitrov",
    "https://linkedin.com/in/angeldimitrov"
  ]
}
```

### 2. Create SEO Landing Pages
**New files needed:**

#### `/guides/claude-code-plan-mode.html`
- Target keyword: "Claude Code Plan Mode tutorial"
- 800-1000 words
- Include: What it is, why it matters, how to use it, examples
- Link to workshop page
- Add code snippets and screenshots

#### `/guides/ai-agent-ci-pipeline.html`
- Target keyword: "AI agent CI/CD pipeline"
- 800-1000 words
- Include: Architecture, setup guide, best practices
- Real-world examples from experience
- Link to pilot implementation service

#### `/guides/mcp-engineering-setup.html`
- Target keyword: "MCP protocol engineering setup"
- 800-1000 words
- Include: What is MCP, use cases, implementation guide
- Link to workshop and advisory services

**Template structure for guides:**
```yaml
---
layout: default
title: [Guide Title] | Coding Agents AI
description: [SEO-optimized description]
keywords: [primary keyword, related keywords]
---

<!-- Hero -->
<!-- Table of Contents -->
<!-- Main Content with H2/H3 structure -->
<!-- Code Examples -->
<!-- Related Resources -->
<!-- CTA to services -->
```

### 3. Optimize Meta Descriptions
**Update these pages:**

- `index.html`: "Transform your engineering workflow with AI-native development. Expert consulting for CTOs to achieve 40-60% productivity gains. Book your strategy call today."

- `workshop.html`: "Master Claude Code in 2 days. Intensive hands-on workshop for engineering teams. Learn Plan Mode, subagents, MCP integration. €4,900-€7,900."

- `roi-calculator/index.html`: "Calculate your team's productivity gains with AI-native development. Free calculator shows expanded capacity, faster delivery, ROI. No signup required."

**Success Metrics:**
- Organic search traffic increase: +25% (3 months)
- Keyword rankings for "Claude Code", "AI development consulting"
- Guide page engagement: 3+ min avg time

---

## 🎨 Phase 5: Advanced Conversion (FUTURE)
**Impact: 🔥 | Timeline: Week 2**

### 1. A/B Test Hero Headlines
Test these variants with analytics:
- A) "Ship software 3x faster with AI development agents"
- B) "From idea to production in hours, not weeks"
- C) "Your AI development team starts shipping today"

### 2. Video Testimonials
- Record 2-3 client video testimonials
- 30-60 seconds each
- Focus on measurable results
- Add to success stories section

### 3. Interactive Demo
- Create interactive Claude Code demo
- Show Plan Mode in action
- Embed on homepage or dedicated demo page

### 4. Email Capture Optimization
- Lead magnet: "AI Development Readiness Checklist"
- Exit intent popup with value proposition
- Newsletter signup in footer

---

## 📊 Analytics & Tracking

### Key Metrics to Monitor:
1. **Traffic Metrics:**
   - Organic search traffic
   - Referral traffic
   - Direct traffic growth

2. **Engagement Metrics:**
   - Bounce rate (target: <45%)
   - Time on site (target: >3 min)
   - Pages per session (target: >2.5)

3. **Conversion Metrics:**
   - Calendly bookings (track source)
   - Calculator completion rate
   - Email signups
   - Guide downloads

4. **SEO Metrics:**
   - Keyword rankings
   - Featured snippet acquisitions
   - Backlink growth
   - Domain authority

### Tools Setup:
- [ ] Google Analytics 4 with enhanced tracking
- [ ] Google Search Console monitoring
- [ ] Hotjar or similar for heatmaps
- [ ] Calendly integration analytics

---

## 💡 Content Marketing Ideas (FUTURE)

### Blog Post Topics:
1. "The ROI of AI-Native Development: Real Numbers from 5 Teams"
2. "Claude Code vs Copilot: When to Use Which"
3. "How We Cut Sprint Time by 60% with AI Agents"
4. "Building Your First AI Development Pipeline in 14 Days"
5. "MCP Protocol: The Missing Link in AI Engineering"

### Case Study Deep-Dives:
- E-commerce checkout rebuilt in 47 minutes
- Legacy system modernization with AI agents
- Security audit automation pipeline

### Video Content:
- Claude Code Plan Mode walkthrough
- AI agent orchestration demo
- Workshop highlights reel

---

## 🔄 Ongoing Maintenance

### Weekly:
- Review analytics dashboard
- Monitor conversion rates
- Check for broken links
- Update success stories

### Monthly:
- Review SEO performance
- Update client logos (if new clients)
- Refresh testimonials
- Analyze competitor sites

### Quarterly:
- Content audit and updates
- A/B test results review
- Pricing evaluation
- Service offering refinement

---

## 📝 Notes & Research

### Competitor Analysis:
- [Track competitor URLs here]
- Note their messaging, pricing, case studies
- Identify gaps we can fill

### User Feedback:
- Collect feedback from consultation calls
- Note common objections
- Track which content resonates

### Industry Trends:
- Monitor AI development tool releases
- Track Claude updates
- Note new use cases emerging
