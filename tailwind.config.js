/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4",
      },
      keyframes: {
        slideInFromLeft: {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(0)" },
        },
        opacityHidden: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        slideInFromLeft: "1s ease-out 0s 1 slideInFromLeft",
        opacityHidden: "1s ease-out 0s 1 opacityHidden",
      },
    },
    fontFamily: {
      sans: ['"WixMadeforText"', "sans-serif"],
    },
  },
  plugins: [],
  darkMode: "selector",
};
