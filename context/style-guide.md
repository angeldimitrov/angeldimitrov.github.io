# AI Consulting Landing Page Style Guide

*Inspired by successful AI consulting leaders: McKinsey QuantumBlack, IBM Watson, Accenture AI, and high-converting boutique consultants*

This comprehensive style guide combines enterprise-level credibility with boutique agility, optimized for converting engineering leaders into clients.

## 🎨 Strategic Color Psychology

*Colors chosen based on analysis of top-converting AI consulting firms and enterprise buyer psychology*

### Primary Colors (Trust & Innovation)
```css
/* Enterprise Trust Colors */
--color-primary: #3B82F6;           /* Professional blue - builds trust with CTOs */
--color-primary-hover: #1E40AF;     /* Deeper authority blue */
--color-primary-light: #DBEAFE;     /* Subtle backgrounds */

/* AI Innovation Colors */
--color-accent-purple: #8B5CF6;     /* AI/Future technology associations */
--color-accent-emerald: #10B981;    /* Growth, results, success metrics */
--color-accent-amber: #F59E0B;      /* Innovation, insights, optimization */
--color-accent-rose: #EF4444;       /* Critical actions, warnings */
```

### Enterprise Neutrals (Credibility & Readability)
```css
/* Text Hierarchy (Optimized for scanning) */
--color-text-primary: #111827;      /* High-contrast headings for decision-makers */
--color-text-secondary: #374151;    /* Professional body text */
--color-text-tertiary: #6B7280;     /* Supporting information */
--color-text-muted: #9CA3AF;        /* Subtle labels and metadata */
--color-text-white: #FFFFFF;        /* High contrast on dark backgrounds */

/* Sophisticated Backgrounds */
--color-bg-primary: #FFFFFF;        /* Clean, premium feel */
--color-bg-secondary: #F9FAFB;      /* Subtle section separation */
--color-bg-tertiary: #F3F4F6;       /* Cards and panels */
--color-bg-dark: #1F2937;          /* Executive/tech sections */
```

### Strategic Gradients (Enterprise + Innovation)
```css
/* Hero: Trust + Innovation (McKinsey QuantumBlack inspired) */
--gradient-hero: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
--gradient-hero-subtle: linear-gradient(135deg, #DBEAFE 0%, #EDE9FE 100%);

/* Cards: Depth without distraction */
--gradient-card: linear-gradient(145deg, #FFFFFF 0%, #F9FAFB 100%);
--gradient-card-hover: linear-gradient(145deg, #F9FAFB 0%, #F3F4F6 100%);

/* Terminal/Demo: High-tech credibility */
--gradient-terminal: linear-gradient(135deg, #1F2937 0%, #111827 100%);
```

## 🔤 Executive-Level Typography

*Font choices optimized for C-level decision makers and technical leaders*

### Strategic Font Stack
```css
/* Primary: Inter - Used by top consulting firms for clarity */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Headlines: Optional premium feel */
font-family: 'Inter Tight', 'Inter', system-ui, sans-serif;

/* Code/Terminal: Developer credibility */
font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
```

### Hierarchy for Conversion (Based on McKinsey/IBM patterns)
```css
/* Hero Headlines - Maximum impact for C-level attention */
.text-hero {
  font-size: clamp(2.5rem, 5vw, 4rem);  /* Responsive 40-64px */
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
}

/* Section Headlines - Authority and clarity */
.text-section {
  font-size: clamp(2rem, 4vw, 3rem);    /* Responsive 32-48px */
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--color-text-primary);
}

/* Value Proposition - Scannable benefits */
.text-benefit {
  font-size: 1.5rem;                    /* 24px */
  font-weight: 600;
  line-height: 1.33;
  color: var(--color-text-primary);
}

/* Body Text - Optimized for executive reading */
.text-body-large {
  font-size: 1.25rem;                   /* 20px - easier scanning */
  line-height: 1.6;
  font-weight: 400;
  color: var(--color-text-secondary);
}

.text-body {
  font-size: 1.125rem;                  /* 18px - better than 16px for exec audience */
  line-height: 1.6;
  font-weight: 400;
  color: var(--color-text-secondary);
}

.text-supporting {
  font-size: 1rem;                      /* 16px */
  line-height: 1.5;
  font-weight: 400;
  color: var(--color-text-tertiary);
}
```

## =2 Layout & Spacing

### Container System
```css
/* Max widths matching Stripe's approach */
.container-narrow { max-width: 720px; }   /* Single column content */
.container-medium { max-width: 1024px; }  /* Standard sections */
.container-wide { max-width: 1280px; }    /* Full layouts */
```

### Spacing Scale (8px base)
```css
/* Consistent spacing using 8px increments */
--space-xs: 0.5rem;    /* 8px */
--space-sm: 1rem;      /* 16px */
--space-md: 1.5rem;    /* 24px */
--space-lg: 2rem;      /* 32px */
--space-xl: 3rem;      /* 48px */
--space-2xl: 4rem;     /* 64px */
--space-3xl: 6rem;     /* 96px */
--space-4xl: 8rem;     /* 128px */
```

### Section Spacing
```css
/* Vertical rhythm for sections */
.section-padding-sm { padding: 3rem 0; }   /* Small sections */
.section-padding-md { padding: 4rem 0; }   /* Standard sections */
.section-padding-lg { padding: 6rem 0; }   /* Hero, major sections */
.section-padding-xl { padding: 8rem 0; }   /* Showcase sections */
```

## <� Components

### Buttons
```css
/* Primary Button (Stripe purple) */
.btn-primary {
  background: var(--color-primary);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background: var(--color-primary-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(99, 91, 255, 0.25);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  padding: 11px 23px; /* -1px for border */
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: var(--color-primary-light);
  transform: translateY(-1px);
}

/* Button Sizes */
.btn-sm { padding: 8px 16px; font-size: 14px; }
.btn-lg { padding: 16px 32px; font-size: 18px; }
```

### Cards
```css
/* Stripe-style card component */
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e3ebf0;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card-header {
  padding: 24px 24px 0;
}

.card-body {
  padding: 24px;
}

.card-footer {
  padding: 0 24px 24px;
  margin-top: auto;
}
```

### Navigation
```css
/* Header Navigation */
.nav-header {
  background: white;
  border-bottom: 1px solid #e3ebf0;
  padding: 16px 0;
}

.nav-link {
  color: var(--color-text-secondary);
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-primary);
  background: var(--color-primary-light);
}
```

### Code Blocks (for AI Agent Demos)
```css
/* Terminal-style code blocks */
.code-block {
  background: #0a2540;
  color: #8898aa;
  border-radius: 8px;
  padding: 24px;
  font-family: 'SF Mono', Monaco, monospace;
  font-size: 14px;
  line-height: 1.5;
  overflow-x: auto;
}

.code-prompt {
  color: #00d924; /* Green for prompts */
}

.code-output {
  color: #ffffff; /* White for output */
}

.code-comment {
  color: #8898aa; /* Gray for comments */
  font-style: italic;
}
```

## =� Responsive Design

### Breakpoints
```css
/* Mobile-first approach */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Responsive Typography
```css
/* Hero heading responsive scaling */
.hero-title {
  font-size: clamp(2rem, 8vw, 3.5rem);
  line-height: 1.1;
}

/* Body text responsive scaling */
.hero-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.6;
}
```

## ( Animations & Effects

### Transitions
```css
/* Standard transition timing */
.transition-fast { transition: all 0.15s ease; }
.transition-normal { transition: all 0.2s ease; }
.transition-slow { transition: all 0.3s ease; }
```

### Hover Effects
```css
/* Card hover (Stripe-style) */
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* Button press effect */
.btn:active {
  transform: translateY(1px);
}
```

### Loading States
```css
/* Subtle loading animation */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.loading {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

## <� Brand Elements

### Logo Treatment
- Use plenty of white space around the logo
- Minimum size: 120px width for readability
- On dark backgrounds: Use white version
- On light backgrounds: Use full color version

### Icons
```css
/* Icon styling consistent with Stripe */
.icon {
  width: 24px;
  height: 24px;
  stroke-width: 1.5;
  color: var(--color-text-secondary);
}

.icon-large {
  width: 48px;
  height: 48px;
}

.icon-primary {
  color: var(--color-primary);
}
```

### Trust Indicators
```css
/* Company logos section */
.trust-logos {
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.trust-logos:hover {
  filter: grayscale(0%);
  opacity: 1;
}
```

## =� Design Principles

### 1. **Clarity First**
- Use clear, scannable layouts
- Plenty of white space
- Strong visual hierarchy

### 2. **Professional Trust**
- Consistent spacing and alignment
- Subtle shadows and borders
- Conservative color usage

### 3. **Purposeful Animation**
- Enhance usability, don't distract
- Fast, smooth transitions
- Meaningful hover states

### 4. **Mobile Excellence**
- Touch-friendly interactive elements (44px minimum)
- Readable text without zoom
- Optimized loading performance

### 5. **Accessibility Standards**
- WCAG 2.1 AA compliance
- Sufficient color contrast (4.5:1 minimum)
- Keyboard navigation support
- Screen reader friendly markup

## =' Implementation Notes

### CSS Custom Properties
All colors and key measurements should be defined as CSS custom properties for easy theming and maintenance.

### Component Architecture
Follow a component-first approach:
- Reusable button styles
- Consistent card layouts
- Standardized form elements
- Unified navigation patterns

### Performance Considerations
- Optimize for Core Web Vitals
- Use efficient CSS selectors
- Minimize layout shifts
- Optimize for mobile-first loading

## 🧠 Conversion Psychology for Engineering Leaders

*Based on analysis of high-converting AI consulting firms and C-level buyer behavior*

### Trust-Building Visual Patterns
```css
/* Enterprise Credibility Markers */
.trust-signal {
  display: flex;
  align-items: center;
  padding: var(--space-md);
  background: var(--gradient-card);
  border: 1px solid var(--color-bg-tertiary);
  border-radius: 8px;
  font-size: var(--text-body);
  color: var(--color-text-secondary);
}

.trust-signal::before {
  content: '✓';
  color: var(--color-accent-emerald);
  font-weight: 600;
  margin-right: var(--space-sm);
}

/* Authority Positioning */
.authority-metric {
  text-align: center;
  padding: var(--space-lg);
}

.authority-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}

.authority-label {
  font-size: var(--text-supporting);
  color: var(--color-text-tertiary);
  font-weight: 500;
}
```

### AI Agent Demo Components (Core Differentiator)
```css
/* Multi-Agent Terminal Demo */
.agent-demo {
  background: var(--gradient-terminal);
  border-radius: 12px;
  padding: var(--space-xl);
  margin: var(--space-xl) 0;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.agent-line {
  display: flex;
  align-items: center;
  margin-bottom: var(--space-sm);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}

.agent-icon {
  width: 16px;
  height: 16px;
  margin-right: var(--space-sm);
  border-radius: 50%;
}

.agent-pm { background: var(--color-accent-blue); }
.agent-backend { background: var(--color-accent-purple); }
.agent-frontend { background: var(--color-accent-emerald); }
.agent-testing { background: var(--color-accent-amber); }

.agent-output {
  color: var(--color-text-white);
  opacity: 0.9;
}

.agent-success {
  color: var(--color-accent-emerald);
  font-weight: 500;
}
```

## 🎯 Strategic Content Positioning

### Messaging Framework (Based on QuantumBlack/Accenture patterns)
1. **Problem Recognition**: "Manual development processes limit engineering velocity"
2. **Solution Visualization**: "AI agents handle parallel development workflows"  
3. **Proof of Concept**: Terminal demos showing real agent coordination
4. **Risk Mitigation**: "Safe integration with existing processes"
5. **Social Proof**: Metrics and authority positioning

### Conversion-Optimized Sections
```css
/* Hero Section - Maximum impact in 3 seconds */
.hero-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--gradient-hero);
  color: white;
  text-align: center;
}

/* Value Proposition - 4-column grid for scanning */
.value-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-xl);
  margin: var(--space-3xl) 0;
}

/* Services - Enterprise package presentation */
.service-tier {
  background: white;
  border: 2px solid var(--color-bg-tertiary);
  border-radius: 12px;
  padding: var(--space-xl);
  position: relative;
  transition: all 0.3s ease;
}

.service-tier:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.15);
}

.service-featured {
  border-color: var(--color-primary);
  position: relative;
}

.service-featured::before {
  content: 'Most Popular';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-primary);
  color: white;
  padding: var(--space-xs) var(--space-md);
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}
```

## 💼 Enterprise Component Library

### CTA Optimization (Accenture/IBM inspired)
```css
/* Primary CTA - Calendly integration focus */
.cta-primary {
  background: var(--color-primary);
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  transition: all 0.2s ease;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
}

.cta-primary:hover {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
}

.cta-text-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cta-main-text {
  font-weight: 600;
  font-size: 1.125rem;
}

.cta-sub-text {
  font-weight: 400;
  font-size: 0.875rem;
  opacity: 0.9;
}

/* Risk-Reduction CTAs */
.cta-risk-free {
  position: relative;
}

.cta-risk-free::after {
  content: 'No commitment • 20 minutes • Free insights';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: var(--space-xs);
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
```

### Social Proof Components
```css
/* Client Logo Wall (IBM Watson pattern) */
.client-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-xl);
  flex-wrap: wrap;
  margin: var(--space-3xl) 0;
}

.client-logo {
  height: 40px;
  opacity: 0.6;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.client-logo:hover {
  opacity: 1;
  filter: grayscale(0%);
}

/* Testimonial Cards (McKinsey style) */
.testimonial-card {
  background: white;
  padding: var(--space-xl);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-left: 4px solid var(--color-primary);
}

.testimonial-quote {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  font-style: italic;
  margin-bottom: var(--space-md);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--gradient-card);
}

.testimonial-details {
  display: flex;
  flex-direction: column;
}

.testimonial-name {
  font-weight: 600;
  color: var(--color-text-primary);
}

.testimonial-role {
  font-size: 0.875rem;
  color: var(--color-text-tertiary);
}
```

## 📊 Performance & Analytics Integration

### Conversion Tracking Elements
```css
/* Heatmap-optimized sections */
.section-trackable {
  position: relative;
}

.section-trackable::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%);
  opacity: 0.1;
}

/* A/B Testing Ready Components */
.variant-container {
  /* Easy to swap content for testing */
  display: block;
}

.variant-a { display: block; }
.variant-b { display: none; }

/* Analytics-friendly CTAs */
.cta-analytics {
  /* Includes data attributes for tracking */
  cursor: pointer;
  position: relative;
}

.cta-analytics::after {
  content: attr(data-track-label);
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
```

This comprehensive style guide combines the authority and trust-building patterns of enterprise consulting leaders with the conversion optimization techniques proven effective for boutique AI consultants, specifically designed for engineering decision-makers.