/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",
        secondary: "#DAA520",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "4rem",
      },
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      zoomIn: {
        '0%': { transform: 'scale(0.9)' },
        '100%': { transform: 'scale(1)' },
      },
      bounce: {
        '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
        '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
      },
    },
    animation: {
      'fade-in': 'fadeIn 1s ease-out forwards',
      'zoom-in': 'zoomIn 0.2s ease-out forwards',
      'bounce': 'bounce 1s infinite',
    },
  },
  plugins: [],
}

