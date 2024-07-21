/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode : "class",
  theme: {
    extend: {
      colors : {
        primary: "#FFD700",
        secondary: "#DAA520",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '4rem',
      },
    }
  },
  plugins: [],
}

