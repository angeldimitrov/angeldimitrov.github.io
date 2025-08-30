# Relume-Based Style Guide for AI-Native Development Consulting

*Based on the implemented Relume index.html design system*

This style guide documents the design system implemented in the Relume-based AI consulting landing page, optimized for converting engineering leaders into clients.

## 🎨 Color System

### Primary Brand Colors (Based on Relume Design System)
```css
/* Primary Colors - Trust & Innovation */
--color-primary: #3B82F6;           /* Dodger Blue - primary actions */
--color-primary-hover: #2563EB;     /* Darker blue for hover states */

/* Secondary Colors */
--color-secondary: #10B981;         /* Mountain Meadow Green - success/growth */
--color-secondary-hover: #059669;   /* Darker green for hover states */

/* Accent Colors */
--color-accent: #F59E0B;            /* Buttercup Orange - highlights */
--color-accent-hover: #D97706;      /* Darker orange for hover states */
```

### Neutral Palette (Professional Enterprise Look)
```css
/* Neutral Grays */
--neutral-50: #FAFAFA;
--neutral-100: #F5F5F5;
--neutral-200: #E5E5E5;
--neutral-300: #D4D4D4;
--neutral-400: #A3A3A3;
--neutral-500: #737373;
--neutral-600: #525252;
--neutral-700: #404040;
--neutral-800: #262626;
--neutral-900: #171717;
--neutral-950: #0A0A0A;

/* Semantic Colors */
--border-primary: #E5E7EB;
--background-primary: #FFFFFF;
--background-secondary: #FAFAFA;
--background-dark: #0A0A0A;
--background-alternative: #171717;
--text-primary: #171717;
--text-secondary: #525252;
--text-alternative: #FFFFFF;
--text-muted: #737373;
```

## 🔤 Typography

### Font System
```css
/* Primary Font Stack - Inter (Google Fonts) */
font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

### Typography Scale
```css
/* Custom Font Sizes */
font-size: 1.125rem;  /* md - 18px */
font-size: 7rem;      /* 9xl - 112px */
font-size: 8rem;      /* 10xl - 128px */

/* Standard Scale */
text-3xl: 1.875rem;   /* 30px */
text-4xl: 2.25rem;    /* 36px */  
text-5xl: 3rem;       /* 48px */
text-xl: 1.25rem;     /* 20px */
text-2xl: 1.5rem;     /* 24px */
text-lg: 1.125rem;    /* 18px */
text-base: 1rem;      /* 16px */
```

### Typography Hierarchy
```css
/* Hero Headlines - Maximum Impact */
.hero-title {
  @apply text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

/* Section Headlines - Authority and Clarity */
.section-title {
  @apply text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6;
  line-height: 1.2;
}

/* Subsection Titles */
.subsection-title {
  @apply text-xl md:text-2xl font-bold mb-3 md:mb-4;
}

/* Body Text - Optimized for Executive Reading */
.hero-subtitle {
  @apply text-lg md:text-xl;
  line-height: 1.6;
}

.body-text {
  @apply text-base md:text-md;
  line-height: 1.6;
}

/* Eyebrow Text */
.eyebrow-text {
  @apply font-semibold mb-3 md:mb-4;
  font-size: 0.875rem;
}
```

## 📐 Layout & Spacing

### Container System
```css
/* Main Container */
.container {
  @apply max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8;
}
```

### Section Layout Patterns
```css
/* Standard Section - Consistent spacing across all sections */
.section-standard {
  /* Use ONLY container class for consistent margins */
  /* ❌ AVOID: px-[5%] combined with container */
  /* ✅ CORRECT: Use container class alone */
}

/* Example Implementation */
<section class="py-16 md:py-24 lg:py-32">
  <div class="container">
    <!-- Content -->
  </div>
</section>
```

**Critical Rule**: Never combine `px-[5%]` with `.container` class. The container already provides responsive padding. Using both creates inconsistent margins across sections.

**Known Issue**: The footer currently incorrectly uses both `px-[5%]` and `.container` classes. This should be fixed to use only `.container` for consistency.

### Section Spacing
```css
/* Section Padding */
.section-padding {
  @apply py-16 md:py-24 lg:py-32;
}

/* Hero Section */
.hero-section {
  @apply py-24 md:py-32 lg:py-40;
}

/* Smaller Sections */
.section-padding-sm {
  @apply py-12 md:py-18 lg:py-20;
}
```

### Grid System
```css
/* Three Column Grid (Services, Benefits) */
.three-col-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-12;
}

/* Two Column Grid (About, CTA) */
.two-col-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12 lg:gap-x-20 md:items-center;
}

/* Asymmetric Grid (About Section) */
.asymmetric-grid {
  @apply grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-12 md:gap-x-12 lg:gap-x-16 md:items-center;
}
```

## 🎯 Component System

### Button System

The global CTA button system is designed for maximum impact and conversion, with consistent hover effects and clean, borderless styling.

```css
/* Primary CTA Button - Premium Gradient Style */
.btn-primary {
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(to right, #2563EB, #9333EA);
  color: white;
  font-weight: 600;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.btn-primary:hover {
  background: linear-gradient(to right, #1D4ED8, #7C3AED);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
  transform: translateY(-2px);
}

/* Secondary Button (Light Background) */
.btn-secondary {
  display: inline-block;
  padding: 1rem 2rem;
  background: #F5F5F5;
  color: #404040;
  font-weight: 600;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.btn-secondary:hover {
  background: #E5E5E5;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: translateY(-2px);
}

/* Secondary Button (Dark Background) */
.btn-secondary-dark {
  display: inline-block;
  padding: 1rem 2rem;
  background: #374151;
  color: white;
  font-weight: 600;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
}

.btn-secondary-dark:hover {
  background: #4B5563;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
  transform: translateY(-2px);
}
```

#### Button Usage Guidelines
- **Primary CTA**: Use `btn-primary` for main conversion actions (Schedule Consultation)
- **Secondary Actions**: Use `btn-secondary` on light backgrounds, `btn-secondary-dark` on dark backgrounds
- **Consistent Sizing**: All buttons use `1rem 2rem` padding for substantial click targets
- **Premium Effects**: All buttons include shadow and lift animations for high-impact interaction
- **Visual Hierarchy**: Gradient primary stands out against solid secondary button colors
- **Borderless Design**: Clean, modern appearance without borders for streamlined aesthetics
- **Consistent Hover States**: All buttons feature `translateY(-2px)` lift and enhanced shadows

### Card System
```css
/* Base Card */
.card {
  @apply bg-background-primary rounded-xl p-6 border border-neutral-200;
  transition: all 0.3s ease;
}

.card:hover {
  @apply shadow-lg;
  transform: translateY(-2px);
}

/* Dark Card */
.card-dark {
  @apply bg-neutral-900 rounded-xl p-6 border border-neutral-800;
}

/* Enhanced Container Card - Semi-transparent with backdrop blur */
.container-card {
  @apply bg-neutral-800/60 rounded-xl p-8 border border-neutral-700/60 backdrop-blur-sm;
}
```

### Icon System
```css
/* Icon Container - Consistent sizing and positioning */
.icon-container {
  @apply w-24 h-24 flex items-center justify-center;
}

/* Enhanced Gradient Icon Container */
.gradient-icon-container {
  @apply w-16 h-16 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto;
}

/* Icon Sizing */
.icon-sm {
  @apply w-6 h-6;
}

.icon-md {
  @apply w-8 h-8;
}

.icon-lg {
  @apply w-12 h-12;
}

.icon-xl {
  @apply w-16 h-16;
}

/* Icon Colors */
.icon-primary {
  @apply text-primary;
}

.icon-white {
  @apply text-white;
}

.icon-muted {
  @apply text-neutral-400;
}

/* Gradient Icon Variants */
.gradient-blue-purple {
  @apply from-blue-500 to-purple-500;
}

.gradient-emerald-blue {
  @apply from-emerald-500 to-blue-500;
}

.gradient-purple-pink {
  @apply from-purple-500 to-pink-500;
}
```

## 🎨 Gradient Text System

### Gradient Text Classes
```css
/* Hero Style Gradient - For Dark Backgrounds */
.gradient-text-hero {
  background: linear-gradient(to right, #ffffff, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

/* Light Background Gradient - For Light Backgrounds */
.gradient-text-light {
  background: linear-gradient(to right, #2563eb, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
```

### Gradient Text Usage Guidelines
- **Hero Gradient** (`.gradient-text-hero`): White-to-purple gradient for dark backgrounds
- **Light Gradient** (`.gradient-text-light`): Blue-to-purple gradient for light backgrounds  
- **Strategic Application**: Apply to key section headings and important concepts only
- **Brand Consistency**: Use sparingly to maintain impact and professionalism

### Applied Gradient Locations
- **Hero Section**: "Ship Faster with AI-Native Development" (built-in Tailwind classes)
- **Light Sections**: "Enterprise AI Workflows", "AI Development Team", "Transform Your Development Process" 
- **Dark Sections**: "AI-Native Development", "Succeed", section headings

## 🌗 Section Themes

### Light Sections
```css
.section-light {
  @apply bg-neutral-100; /* Light gray background for subtle contrast */
}

.section-light h1,
.section-light h2,
.section-light h3 {
  @apply text-neutral-900;
}

.section-light p {
  @apply text-neutral-600;
}

.section-light .eyebrow-text {
  @apply text-neutral-600;
}
```

### Dark Sections - Hero Style
```css
.section-dark {
  background: #1e293b; /* Updated dark background for better container visibility */
  position: relative;
  overflow: hidden;
  color: white;
}

/* Grid Pattern Overlay */
.section-dark::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  pointer-events: none;
}

.section-dark > * {
  position: relative;
  z-index: 1;
}

.section-dark h1,
.section-dark h2,
.section-dark h3 {
  @apply text-white;
}

.section-dark p {
  @apply text-neutral-400;
}

.section-dark .eyebrow-text {
  @apply text-neutral-400;
}
```

## 🧩 Specialized Components

### Navigation
```css
/* Sticky Navigation */
.nav-header {
  @apply sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-sm;
}

/* Navigation Links */
.nav-link {
  @apply text-text-primary hover:text-primary transition-colors duration-200;
  @apply block py-3 text-md lg:px-4 lg:py-2 lg:text-base;
}

/* Mobile Navigation (Horizontal Scroll) */
.mobile-nav {
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.mobile-nav::-webkit-scrollbar {
  display: none; /* Chrome/Safari/Opera */
}

.mobile-nav-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 1rem;
  min-width: max-content;
}
```

**Note**: The mobile navigation uses horizontal scrolling with hidden scrollbars for a clean appearance. The "AI Team" link was removed in recent updates.

### Image System
```css
/* Rounded Images */
.rounded-image {
  @apply rounded-xl;
}

/* Portrait Images */
.portrait-image {
  @apply w-full max-w-xs mx-auto md:max-w-full rounded-xl object-cover shadow-lg;
}
```

### Prose Content
```css
.prose {
  @apply max-w-none text-text-secondary;
}

.prose p {
  @apply mb-4 last:mb-0 leading-relaxed;
}

.prose p.font-medium {
  @apply text-neutral-800;
}
```

## 📱 Responsive Design

### Breakpoint Strategy
```css
/* Mobile First Approach */
/* Base: 0-640px (Mobile) */
/* sm: 640px+ (Large Mobile) */  
/* md: 768px+ (Tablet) */
/* lg: 1024px+ (Desktop) */
/* xl: 1280px+ (Large Desktop) */
```

### Responsive Patterns
```css
/* Responsive Grid */
.responsive-grid {
  @apply grid grid-cols-1 gap-y-12;
  @apply md:grid-cols-3 md:gap-x-8 md:gap-y-16;
  @apply lg:gap-x-12;
}

/* Responsive Text */
.responsive-title {
  @apply text-3xl md:text-4xl lg:text-5xl;
}

.responsive-body {
  @apply text-lg md:text-xl;
}

/* Responsive Spacing */
.responsive-section {
  @apply py-16 md:py-24 lg:py-32;
}

.responsive-margin {
  @apply mb-6 md:mb-10 lg:mb-12;
}
```

## 🎨 Visual Effects

### Shadows
```css
/* Button Shadow */
.btn-shadow {
  @apply shadow-sm hover:shadow-md;
}

/* Card Shadow */
.card-shadow {
  @apply shadow-lg;
}

/* Portrait Shadow */
.portrait-shadow {
  @apply shadow-lg;
}
```

### Backdrop Effects
```css
/* Navigation Backdrop */
.nav-backdrop {
  @apply bg-white/95 backdrop-blur-sm;
}
```

### D3.js Agent Network Animation
```css
/* Agent Network Container */
#agent-network-d3 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

/* Agent Nodes */
.agent-node {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.agent-node:hover {
  transform: scale(1.1);
}

/* Connection Lines */
.connection-line {
  stroke: rgba(147, 197, 253, 0.3);
  stroke-width: 2;
}

/* Data Flow Pulses */
.data-pulse {
  fill: rgba(147, 197, 253, 0.8);
  animation: pulse-fade 2s ease-out;
}

@keyframes pulse-fade {
  0% {
    r: 3;
    opacity: 1;
  }
  100% {
    r: 15;
    opacity: 0;
  }
}

/* Agent Labels */
.agent-label {
  font-size: 0.875rem;
  font-weight: 600;
  fill: white;
  text-anchor: middle;
  dominant-baseline: central;
  pointer-events: none;
}
```

### Animation Guidelines
- **Agent Network**: Continuous orbital movement with smooth transitions
- **Data Flow**: Bidirectional pulses between connected agents
- **Hover Effects**: Scale transforms on interactive elements
- **Performance**: Use requestAnimationFrame for smooth 60fps animations
- **Responsive**: Scale agent sizes based on viewport dimensions

## 🎯 Conversion-Optimized Patterns

### Hero Section Pattern
```css
.hero-container {
  @apply relative overflow-hidden;
  @apply py-24 md:py-32 lg:py-40;
  @apply section-dark;
}

.hero-content {
  @apply mx-auto w-full max-w-3xl text-center;
}

.hero-cta {
  @apply mt-8 flex items-center justify-center gap-x-4 md:mt-10;
}
```

### Value Proposition Pattern
```css
.value-section {
  @apply flex flex-col;
}

.value-header {
  @apply rb-12 mb-8 md:mb-10 lg:mb-12;
}

.value-grid {
  @apply grid grid-cols-1 items-start justify-center gap-y-12;
  @apply md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12;
}

.value-item {
  @apply flex w-full flex-col;
}
```

### Service Cards Pattern
```css
.service-card {
  @apply flex w-full flex-col;
}

.service-icon {
  @apply mb-3 md:mb-4 flex justify-start;
}

.service-title {
  @apply mb-3 text-xl font-bold md:mb-4 md:text-2xl;
}

.service-description {
  @apply text-neutral-400;
}
```

### Enhanced Container Pattern
```css
/* Container-based service/benefit cards with centered icons and mixed alignment */
.enhanced-section-card {
  @apply bg-neutral-800/60 rounded-xl p-8 border border-neutral-700/60 backdrop-blur-sm text-center;
}

.enhanced-card-icon {
  @apply w-16 h-16 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto mb-6;
}

.enhanced-card-title {
  @apply text-xl font-bold md:text-2xl text-white mb-4;
}

.enhanced-card-description {
  @apply text-neutral-300 leading-relaxed text-left;
}

/* Spacing hierarchy for enhanced cards */
.enhanced-card-spacing {
  @apply mb-6; /* Icon to title spacing */
}
```

### Console/Terminal Demo Components
```css
/* Terminal Container for AI Agent demos */
.terminal-container {
  @apply bg-gray-900 rounded-xl p-6 font-mono text-sm overflow-hidden;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
}

/* Terminal Title Bar */
.terminal-header {
  @apply flex items-center mb-4;
}

.terminal-dots {
  @apply flex space-x-2;
}

.terminal-dot {
  @apply w-3 h-3 rounded-full;
}

.terminal-dot-red {
  @apply bg-red-500;
}

.terminal-dot-yellow {
  @apply bg-yellow-500;
}

.terminal-dot-green {
  @apply bg-green-500;
}

/* Terminal Content */
.terminal-line {
  @apply text-gray-300 mb-2;
}

.terminal-agent {
  @apply font-bold;
}

/* Agent Colors in Terminal */
.agent-pm { @apply text-blue-400; }
.agent-backend { @apply text-green-400; }
.agent-frontend { @apply text-purple-400; }
.agent-testing { @apply text-yellow-400; }
.agent-browser { @apply text-pink-400; }
.agent-devops { @apply text-orange-400; }
.agent-docs { @apply text-cyan-400; }
.agent-qa { @apply text-indigo-400; }

/* Terminal Status Messages */
.terminal-status {
  @apply text-gray-500 italic mt-4;
}

.terminal-success {
  @apply text-emerald-500 font-semibold mt-4 flex items-center;
}
```

### Approach Section Layout
```css
/* Two-column layout for Approach section */
.approach-grid {
  @apply grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.5fr] md:gap-x-12 lg:gap-x-20;
}

.approach-heading {
  @apply text-3xl font-bold md:text-4xl lg:text-5xl mb-4;
}

.approach-content {
  @apply space-y-4 text-neutral-600;
}

.approach-content p {
  @apply leading-relaxed;
}
```

### Testimonial Cards
```css
/* Testimonial Card Design */
.testimonial-card {
  @apply bg-neutral-800/60 rounded-xl p-8 border border-neutral-700/60 backdrop-blur-sm;
}

.testimonial-header {
  @apply flex items-center mb-6;
}

.testimonial-avatar {
  @apply w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold;
}

.testimonial-info {
  @apply ml-4;
}

.testimonial-name {
  @apply text-white font-semibold;
}

.testimonial-title {
  @apply text-neutral-400 text-sm;
}

.testimonial-quote {
  @apply text-lg md:text-xl leading-relaxed text-neutral-300 italic;
}

/* Avatar Gradient Variants */
.avatar-gradient-1 {
  @apply from-blue-500 to-purple-500;
}

.avatar-gradient-2 {
  @apply from-emerald-500 to-blue-500;
}
```

## 📊 Implementation Guidelines

### CSS Architecture
1. **Base Layer**: Typography, colors, base element styles
2. **Components Layer**: Reusable component patterns
3. **Utilities Layer**: TailwindCSS utilities for customization

### Performance Considerations
- Use compiled CSS from TailwindCSS build process
- Implement safelist for dynamic classes
- Optimize images with proper sizing and formats
- Use backdrop-blur sparingly for performance

### Accessibility Standards
- Maintain 4.5:1 contrast ratio minimum
- Ensure all interactive elements are keyboard accessible
- Provide proper semantic markup structure
- Include appropriate ARIA labels where needed

### Brand Consistency
- All primary actions use `btn-primary` class
- Section alternation: light → dark → light pattern
- Consistent icon sizing with `.icon-container`
- Typography hierarchy maintained across all sections

This style guide provides the foundation for consistent, conversion-optimized design patterns based on the implemented Relume system, specifically tailored for AI consulting services targeting engineering leadership.