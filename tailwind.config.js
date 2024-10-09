/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'header': ['Playfair Display', 'serif'],
      }
    },
    cursor: {
      'cart': 'url(assets/Mouse.svg), pointer',
    },
  },
  plugins: [],
}

