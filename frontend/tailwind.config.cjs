/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1900px",
      },
      colors: {
        "soft-yellow": "#FBED96",
        "soft-green": "#A6F7AE",
      }
    },
    fontFamily: {
      "migra": ["PPMigra"],
      "mori": ["PPMori"],
      "pangramsansrounded": ["PPPangramSansRounded"]
    },
  },
  plugins: [],
}
