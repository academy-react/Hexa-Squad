/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    extend: {
      boxShadow: {
        "shadow-auth": "0px 5px 10px 0px rgba(0, 0, 0, 0.25)",
        "shadow-transparent": "0px 5px 10px 0px rgba(0, 0, 0, 0)",
        "shadow-Services-box": "0px 3px 5px 0px #5800FF",
        "shadow-Services-box1": "0px 0px 40px 0px rgba(63, 64, 234, 0.3)",
        "shadow-Services-box2": "0px 0px 20px 0px rgba(63, 64, 234, 0.3)",
        "shadow-Categories-box": "0 3px 5px 0 #6D50F14D",
        "shadow-Course-box": "0px 0px 10px 0px #03001C26",
        "shadow-Course-image-box": "0px 3px 4px 0px #00000040",
        "shadow-userComments-pic": "0px 0px 10px 0px #3F40EA4D",
        "shadow-none": "0 0 #0000",
        "shadow-all": "0 0 30px 1500px #0006",
        "shadow-Course-details": "0px 0px 23px -5px rgba(63,64,234,0.2)",
      },
      colors: {
        whitePink: "#D0CDFF",
        newPurple: "#5800FF",
        newPurpleAlpha: "#5800FFCC",
        newPurpleAlpha2: "#5800FF66",
        transparentPurple: "#5800FF00",
        transparentPurple2: "#00018500",
        newPurple2: "#6B3FEA",
        newPurple3: "#1A1A80",
        newPurple4: "#8735F5",
        newPurpule5: "#6D00F8",
        lightPink: "#D0CDFF",
        lightPink2: "#AA54FF",
        darkblue: "#03001C",
        darkblue2: "#121242",
        darkblue3: "#03001CB2",
        darkblue4: "#3B3CA7",
        darkBlue5: "#27278d",
        darkblue6: "#13005A",
        darkblue7: "#2C007F",
        lightblue: "#3F40EA",
        lightblue2: "#6D20FF",
        lightblue3: "#6514FF",
        lightblue4: "#121242B2",
        lightblue5: "#3F40EA0A",
        newPurple3: "#1A1A80",
        newWhite: "#ECEBFF",
        semiWhite: "#F9F6FF",
        semiWhite2: "#F1EDFA",
        semiPink: "#F4F1FF",
        lightPurple: "#9371FF",
        purple2: "#8C4FFF",
        gray: "#00000066",
        grayBlue: "#12124299",
      },
      backgroundImage: {
        "hero-image": 'url("/src/assets/image/hero-image.png") ',
      },
      borderRadius: {
        "200px": "205px",
      },
      height: {
        100: "95vh",
      },
      width: {
        "600px": "600px",
      },
    },

      animation :{

        blob:"blob 7s infinite",
        zoom:"zoom 1s"

      },
      keyframes:{
        blob:{
          "0%" :{
            transform: "translate(0px, 0px) scale(1)"
          },

          "33%":{
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%":{
            transform: "translate(-20px, 20px) scale(0.7)"
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)"
          },
        },


        zoom: {
          "0%": {
            transform: "scale(0.8)",
          },
          "50%": {
            transform: "scale(1)",
          },
          "100%":{
            transform:"scale(1)"
          }
        },


      }
      

   
  },
  
  plugins: [],
};
