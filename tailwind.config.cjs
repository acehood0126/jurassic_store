/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Belle: ["La Belle Aurore", "cursive"],
      Satisfy: ["Satisfy", "cursive"],
      Sacramento: ["Sacramento", "cursive"],
    },
    extend: {
      colors: {
        specialRed: "#ff5555",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/banner.jpg')",
      },
    },
  },
  plugins: [],
});
