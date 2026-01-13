/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./main.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#A0A0A0",
        gold: "#C5A059",
        "background-light": "#F9F9F9",
        "background-dark": "#0A0A0A",
        "studio-grey": "#1A1A1A",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Montserrat", "sans-serif"],
        editorial: ["Cormorant Garamond", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
