/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      'newPurple':'#5800FFCC',
      "transparentPurple":"#5800FF00",
      "lightPink":"#D0CDFF",
      "lightblue":"#3F40EA",
    },
    boxShadow:{
      "shadow-auth":"0px 5px 10px 0px rgba(0, 0, 0, 0.25)",
      "shadow-transparent":"0px 5px 10px 0px rgba(0, 0, 0, 0)"
    },
    extend: {},
  },
  plugins: [],
}

