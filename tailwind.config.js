/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        'linen' : '#f2eee8',
        'dim-gray': '#686868',
        'burlywood': '#dea974',
        'line-gray': '#e1e1e1',
      }
    },
    screens : {
      'xsm' : '480px',
      'base' : '768px',
      'md' : '992px',
    },
  },
  plugins: [],
}