/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Karla: ['Karla', 'sans-serif']
      },
      fontSize: {
        "title-story": ['28px', '40px']
      },  
      colors:{
        "story-content":"#1D1F2EB3",
        "subhead":"#1D1F2E",
        "coffee":{
          50:"#E8D6D0",
          200:"#C89f94",
          400:"#A25F4B",
          600:"#744838"
        },
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

