/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "xs": "480px"
      },
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
        }
      },
      keyframes:{
        slideDown:{
          '20%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0)'}
        },
        fadeIn:{
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        slideDown: 'slideDown .5s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out',
      }
    },
  },
  plugins: [],
}

