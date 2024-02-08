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
        greatVive: "'Great Vibes', cursive",
        Strike: "'Protest Revolution', sans-serif"


      }
    },
  },
  plugins: [require("daisyui")],
}

