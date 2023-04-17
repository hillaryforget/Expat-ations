/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      background: "#fffffe",
      paragraph: "#2d334a",
      secondary: "#e3f6f5",
      tertiary: "#bae8e8",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
