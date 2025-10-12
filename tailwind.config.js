/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
      darkBlue100:'#040918',
      darkBlue200:'#091540',
      lightBlue100: '#EBF2FC',
      lightBlue200: '#EEF8F9 ',
      red400: 'hsl(3, 86%, 64%)',
      red500: 'hsl(3, 71%, 56%)',
      red700: 'hsl(3, 77%, 44%)',
      neutral800 : 'hsl(226, 25%, 17%)',
      neutral700: 'hsl(225, 23%, 24%)',
      neutral600: 'hsla(226, 11%, 37%, 0.78)',
      neutral300: 'hsl(0, 0%, 78%)',
      },
    },
    
  },
  plugins: [],
}


