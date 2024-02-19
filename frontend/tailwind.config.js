/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      cus: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        nc: '#D9F5F8',
      }
    },
  },
  plugins: [],
}