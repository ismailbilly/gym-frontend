/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        brand: ['Grenze Gotisch', 'cursive'],
      },
      colors : {
        'dark':'#141824',
        'secondary':'#e4b333',
        'accent':'#0049ff',
        'mute': '#000080'
      }, 
      lineHeight: {
        'extra-loose': '9',
        '12': '3rem',
      }
    },
  },
  plugins: [],
}
