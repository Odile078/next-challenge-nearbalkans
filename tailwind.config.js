/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}","./layout/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      spacing:{
        '30':'30px',
        '39':'39px'
      },
      colors:{
        brandGreen:{
          dark:'#486A6F',
          light:'#5BCCDE',
          DEFAULT:'#678C92',
          blurred:"#4397A4",
        }
      },
      container:{
        center:true
      },
    },
  },
  plugins: [],
  // safelist:[ { pattern: /.*/, }]
}
