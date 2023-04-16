/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
