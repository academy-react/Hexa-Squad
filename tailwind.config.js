/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
    },
    boxShadow:{
      "shadow-auth":"0px 5px 10px 0px rgba(0, 0, 0, 0.25)",
      "shadow-transparent":"0px 5px 10px 0px rgba(0, 0, 0, 0)"
    },
    extend: {},
  },
  plugins: [],
}

