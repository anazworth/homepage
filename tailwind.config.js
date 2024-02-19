/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        darkbase: "#0F141B",
        lightbase: "#F0F0E8",
      },
      fontFamily: {
        sans: ['"Outfit"'],
      },
    },
  },
  plugins: [],
};
