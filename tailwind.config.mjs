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
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)'],
        serif: ['var(--aw-font-serif)'],
        heading: ['var(--aw-font-heading)'],
      },
    },
  },
  plugins: [],
}
