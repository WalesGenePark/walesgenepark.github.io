/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--aw-color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--aw-color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--aw-color-accent) / <alpha-value>)',
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          DEFAULT: '#DC3545',
          500: '#DC3545',
          600: '#DC3545',
          700: '#DC3545',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)'],
        serif: ['var(--aw-font-serif)'],
        heading: ['var(--aw-font-heading)'],
      },
    },
  },
  plugins: [],
};
