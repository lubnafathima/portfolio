/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        off_black: "#3a3636",
        off_white: "#E3F7F7",
      }
    },
  },
  plugins: [],
}

