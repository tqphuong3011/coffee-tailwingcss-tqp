/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Karla: ['Karla', 'sans-serif']
      },
      colors:{
        "light-coffee" : "#C89f94"
      },
      keyframes:{
        slideDown:{
          '20%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0)'}
        }
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
      }
    },
  },
  plugins: [],
}

