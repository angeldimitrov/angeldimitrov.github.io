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

The global CTA button system is designed for maximum impact and conversion, based on the hero section implementation.

```css
/* Primary CTA Button - Premium Gradient Style */
.btn-primary {
  @apply px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl;
  @apply hover:from-blue-700 hover:to-purple-700 transition-all duration-300;
  @apply shadow-2xl hover:shadow-3xl transform hover:-translate-y-1;
}

/* Secondary Button (Light Background) */
.btn-secondary {
  @apply px-8 py-4 border-2 border-neutral-300 text-neutral-700 font-semibold rounded-xl;
  @apply hover:border-neutral-500 hover:bg-neutral-50 transition-all duration-300;
}

/* Secondary Button (Dark Background) */
.btn-secondary-dark {
  @apply px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl;
  @apply hover:border-white/60 hover:bg-white/10 transition-all duration-300;
}
```

#### Button Usage Guidelines
- **Primary CTA**: Use `btn-primary` for main conversion actions (Book a Call, Schedule Consultation)
- **Secondary Actions**: Use `btn-secondary` on light backgrounds, `btn-secondary-dark` on dark backgrounds
- **Consistent Sizing**: All buttons use `px-8 py-4` for substantial click targets
- **Premium Effects**: Primary buttons include gradient, shadow, and lift animations for high-impact
- **Visual Hierarchy**: Gradient primary stands out against any secondary button style

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
```

### Icon System
```css
/* Icon Container - Consistent sizing and positioning */
.icon-container {
  @apply w-24 h-24 flex items-center justify-center;
}

/* Icon Sizing */
.icon-sm {
  @apply w-6 h-6;
}

.icon-md {
  @apply w-12 h-12;
}

.icon-lg {
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
```

## 🌗 Section Themes

### Light Sections
```css
.section-light {
  @apply bg-white;
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

### Dark Sections
```css
.section-dark {
  @apply bg-background-dark text-text-alternative;
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
```

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