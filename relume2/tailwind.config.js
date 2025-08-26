/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{html,js}",
    "./src/**/*.{html,js}"
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
    'rounded-2xl',
    'shadow-md',
    'shadow-lg',
    'shadow-xl',
    'shadow-2xl',
    'shadow-3xl',
    'text-white',
    'backdrop-blur-sm',
    'backdrop-blur-md',
    'backdrop-blur-lg'
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
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-scale': 'fadeInScale 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInScale: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
    }
  },
  plugins: [],
}