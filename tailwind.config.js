/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        background: 'rgb(var(--color-background))',
        surface: 'rgb(var(--color-surface))',
        text: 'rgb(var(--color-text))',
        muted: 'rgb(var(--color-muted))',
      },
      boxShadow: {
        'glass': '0 4px 6px -1px rgba(var(--color-primary), 0.1), 0 2px 4px -1px rgba(var(--color-primary), 0.06)',
      },
    },
  },
  plugins: [],
};