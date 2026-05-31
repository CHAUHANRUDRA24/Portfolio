/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: 'rgb(var(--bg-color) / <alpha-value>)',
        textLight: 'rgb(var(--text-color) / <alpha-value>)',
        cardBg: 'rgb(var(--card-bg) / <alpha-value>)',
        cardBorder: 'rgb(var(--card-border) / <alpha-value>)',
        servicesBg: 'rgb(var(--services-bg) / <alpha-value>)',
        servicesText: 'rgb(var(--services-text) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
