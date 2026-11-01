/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.tsx', './pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        accent: '#6C3BFF',
        'tech-dark': '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
