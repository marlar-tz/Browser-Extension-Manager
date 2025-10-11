/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      darkblue:'#091540',
      lightBlue100: '#EBF2FC',
      lightBlue200: '#EEF8F9 ',
      red400: 'hsl(3, 86%, 64%)',
      red500: 'hsl(3, 71%, 56%)',
      red700: 'hsl(3, 77%, 44%)',
      neutral600: 'hsla(226, 11%, 37%, 0.78)',
      neutral300: 'hsl(0, 0%, 78%)',
      },
    },
    
  },
  plugins: [],
}


