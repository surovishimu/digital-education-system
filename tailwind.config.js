/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        greatVive: "'Great Vibes', cursive",
        Strike: "'Protest Revolution', sans-serif"
      },
      darkMode: 'class',
      colors: {
        dark: {
          background: '#1f2937',
          text: '#ffffff',
        },
        light: {
          background: '#ffffff',
          text: '#1f2937',
        },
      },
    },
  },
  plugins: [require("daisyui")],
}
