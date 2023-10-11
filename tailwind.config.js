/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    colors:{
      "whitePink":"#D0CDFF",
      'newPurple':'#5800FF',
      'newPurpleAlpha':'#5800FFCC',
      'newPurpleAlpha2':'#5800FF66',
      "transparentPurple":"#5800FF00",
      "transparentPurple2":"#00018500",
      'newPurple2':'#6B3FEA',
      "lightPink":"#D0CDFF",
      "lightPink2":"#AA54FF",   
      "darkblue":"#03001C",
      "darkblue2":"#121242",
      "lightblue":"#3F40EA",
      "lightblue2":"#6D20FF",
      "lightblue3":"#6514FF",
      "lightblue4":"#121242B2",
      "lightblue5":"#3F40EA0A",
      "newPurple3":"#1A1A80",
      "semiWhite":"#F9F6FF",
      "semiPink":"#F4F1FF",
      "lightPurple":"#9371FF",
      "purple2":"#8C4FFF",
      
    },
    boxShadow:{
      "shadow-auth":"0px 5px 10px 0px rgba(0, 0, 0, 0.25)",
      "shadow-transparent":"0px 5px 10px 0px rgba(0, 0, 0, 0)",
      "shadow-Services-box": "0px 3px 5px 0px #5800FF",
      "shadow-Services-box1": "0px 0px 40px 0px rgba(63, 64, 234, 0.3)",
      "shadow-Services-box2": "0px 0px 20px 0px rgba(63, 64, 234, 0.3)",
      "shadow-Categories-box": "0 3px 5px 0 #6D50F14D",
      "shadow-Course-box": "0px 0px 10px 0px #03001C26",
      "shadow-Course-image-box": "0px 3px 4px 0px #00000040",
      "shadow-none": "0 0 #0000",
      "shadow-all": "0 0 30px 1500px #0006",
    },


    extend: {},
  },
  plugins: [],
}

