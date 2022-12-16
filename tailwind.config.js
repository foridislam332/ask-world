/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff4c60',
        'text-color': '#4B4870'
      },
      fontFamily: {
        'p-font': ['Source Serif Pro'],
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
