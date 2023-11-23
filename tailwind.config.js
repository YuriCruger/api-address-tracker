/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'very_dark_gray': 'hsl(0, 0%, 17%)',
      'vark_gray': 'hsl(0, 0%, 59%)',
      'white': 'hsl(0, 0%, 100%)',
      'black': 'hsl(0, 0%, 0%)',
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
  },
  plugins: [],
}

