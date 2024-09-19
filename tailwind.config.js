/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mbl: { max: "740px" },
      },
      colors:{
        "off-white": "#5A5A5A",
        "gray":"#F8F8F8",
        "main-2": "#1ABCFE",
        "main":"#A3390B",
        lp:{
          blue: "#1874FF",
          deep:"#0E378B",
          black:"#090A0B",
          grey: "#F5F5F5",
          gray:"#E3E3E3",
          gray2:"#595959",
          gray3:"#F8F8F8",
          gray4:"#EDEDED",
          deepblack:"#031323",
        },
        la:{
          black: "#202123",
          black2:"#090A0B",
          lightblue:"#0FAFF0",
          gray:"#EEEEEE",
          bdgray :"#F5F5F5",
          gray2:"#595959",
          gray3: "#6E6E73"

        },
      },
      boxShadow:{
        mile: "0px 0px 9px rgba(0, 0, 0, 0.1)"
      }
    },
    
  },
  plugins: [],
}


