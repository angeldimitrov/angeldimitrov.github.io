/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enterprise Trust Colors (based on style guide)
        primary: '#3B82F6',        // Professional blue - builds trust with CTOs
        secondary: '#1E40AF',      // Deeper authority blue
        'primary-light': '#DBEAFE', // Subtle backgrounds
        
        // AI Innovation Colors
        'accent-purple': '#8B5CF6', // AI/Future technology associations
        'accent-emerald': '#10B981', // Growth, results, success metrics
        'accent-amber': '#F59E0B',   // Innovation, insights, optimization
        
        // Enterprise Neutrals
        'text-primary': '#111827',   // High-contrast headings for decision-makers
        'text-secondary': '#374151', // Professional body text
        'text-tertiary': '#6B7280',  // Supporting information
        'text-muted': '#9CA3AF',     // Subtle labels and metadata
        
        // Sophisticated Backgrounds
        'bg-tertiary': '#F3F4F6',    // Cards and panels
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}