/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-screen': "url('/pape2.jpg')",
        'appOne': "url('/pape5.jpg')",

      }
    },
    fontFamily: {
      'serif': ['Playfair Display']
    },
  },
  plugins: [],
}
