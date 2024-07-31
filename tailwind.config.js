/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#67e8f9",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
