/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}","./layout/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      spacing:{
        '6px':'0.375rem',//6px
        '10px':'0.625rem',//10px
        '11':'0.6875rem',//11px
        '18':'1.125rem',//18px
        '22':'1.375rem',//22px
        '23':'1.4375rem',//23px
        '26':'1.625rem',//26px
        '30':'30px',
        '34':'2.125rem',//34px
        '39':'39px',
        '25':'25px',
        '61':'3.8125rem',//61px
        '148':'148px',
        '168':'168px',
        '177':'177px',
        '179':'179px',
        '180':'180px',
        '182':'182px',
        '186':'186px',
        '200':'200px',
        '296':'296px',
        '362.25':'362.25px',
        '400':'400px',
        '480':'480px',
        '540':'540px',
        '644':'644px',
        '940':'940px',
        '1067':'1067px',
        '5%':'5%',
        '15%':'15%',
        '20%':'20%',
        '24%':'24%',
        '38%':'38%',
        '40%':'40%',
        '70%':'70%',
        '71%':'71%'

      },
      maxWidth:{
        '480':'480px',
        '940':'940px',
      }
      ,
      backgroundImage:{
        heroBackground: 'radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%)',
        nearLogoBackground:'radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%)',
        targetLogoBackground:'radial-gradient(50% 50% at 50% 50%,#7bdde2 0,rgba(123,221,226,0) 100%)',
        developmentBackground:'radial-gradient(50% 50% at 50% 50%,#7bdde2 0,rgba(127,208,231,0) 100%)',
      },
      blur:{
        '159':'159.73px'
      },
      colors:{
        
        brandBlack:{
          DEFAULT:'#3f4246',//text-color
          light:'#676767',//hero-paragraph-color
        },
        textGradient:''      
      },
      container:{
        center:true
      },
      fontFamily:{
        primary:"Graphik,ui-sans-serif,system-ui,sans-serif"
      },
      letterSpacing:{
        '0.02':'0.02em',
      },
      lineHeight:{
        '17.6':'1.1rem',//'17.6px'
        '44':'2.75rem',//44px
        '60':'3.75rem'//'60px'
      },
      fontSize:{
        '32':'2rem',//'32px'

      }
    },
  },
  plugins: [],
  // safelist:[ { pattern: /.*/, }]
}
