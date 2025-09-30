/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{html,js}",
    "./src/**/*.{html,js}",
    "./_includes/**/*.{html,js}",
    "./_layouts/**/*.{html,js}",
    "./workshop.html",
    "./roi-calculator.html",
    "./assets/js/**/*.js"
  ],
  safelist: [
    'bg-blue-500',
    'bg-green-500',
    'bg-orange-500',
    'w-24',
    'h-24',
    'w-12',
    'h-12',
    'rounded-xl',
    'shadow-md',
    'text-white',
    // ROI Calculator classes
    'bg-secondary/20',
    'border-secondary/30',
    'bg-primary/20',
    'border-primary/30',
    'bg-accent/20',
    'border-accent/30',
    'bg-neutral-500/20',
    'border-neutral-500/30',
    'bg-neutral-700/30',
    'border-neutral-600/30',
    'text-secondary',
    'text-primary',
    'text-accent',
    'text-neutral-400',
    'text-neutral-300',
    'text-red-600',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    // Warning icon gradient classes
    'bg-gradient-to-br',
    'from-amber-500',
    'to-orange-600'
  ],
  theme: {
    extend: {
      colors: {
        // Relume Color System
        'primary': {
          DEFAULT: '#3B82F6', // Dodger Blue
          hover: '#2563EB',
        },
        'secondary': {
          DEFAULT: '#10B981', // Mountain Meadow Green
          hover: '#059669',
        },
        'accent': {
          DEFAULT: '#F59E0B', // Buttercup Orange
          hover: '#D97706',
        },
        // Neutrals from screenshot
        'neutral': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        // Semantic colors
        'border-primary': '#E5E7EB',
        'background-primary': '#FFFFFF',
        'background-secondary': '#FAFAFA',
        'background-dark': '#0A0A0A',
        'background-alternative': '#171717',
        'text-primary': '#171717',
        'text-secondary': '#525252',
        'text-alternative': '#FFFFFF',
        'text-muted': '#737373',
      },
      fontSize: {
        'md': '1.125rem',
        '9xl': '7rem',
        '10xl': '8rem',
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        'button': '0.375rem',
        'image': '0.5rem',
      },
      minHeight: {
        '16': '4rem',
        '18': '4.5rem',
      },
    }
  },
  plugins: [],
}