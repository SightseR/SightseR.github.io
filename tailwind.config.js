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
        'bg-color': 'var(--bg-color)',
        'text-color': 'var(--text-color)',
        'accent-color': 'var(--accent-color)',
        'card-bg': 'var(--card-bg)',
        'border-color': 'var(--border-color)',
        'timeline-dot': 'var(--timeline-dot)',
        'timeline-line': 'var(--timeline-line)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      // Add this for scroll-margin-top
      spacing: {
        'header-offset': 'calc(var(--header-height) + var(--scroll-offset))',
      }
    },
  },
  plugins: [],
};