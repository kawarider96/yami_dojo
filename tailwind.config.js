const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //BG
        'dark-bg': 'rgb(2 6 23)',
        'dark-btn-bg': 'rgb(241 245 249)',
        'dark-card-bg': 'rgba(134,0,0,0.5)',

        //TEXT
        'dark-primary': 'rgb(255, 255, 255)',
        'dark-secondary': 'rgb(150, 150, 150)',
        
        'dark-btn-text': 'rgb(0, 0, 0)',

      },
    },
  },
  plugins: [],
});

/** @type {import('tailwindcss').Config} */

//export default {
//  darkMode: 'class',
//  content: [
//    "./index.html",
//    "./src/**/*.{js,ts,jsx,tsx}",
//  ],
//  theme: {
//    extend: {
//      colors: {
//        //BG
//        'dark-bg': 'rgb(2 6 23)',
//        'dark-btn-bg': 'rgb(241 245 249)',
//        'dark-card-bg': 'rgba(134,0,0,0.5)',
//
//        //TEXT
//        'dark-primary': 'rgb(255, 255, 255)',
//        'dark-secondary': 'rgb(150, 150, 150)',
//        
//        'dark-btn-text': 'rgb(0, 0, 0)',
//
//      },
//    },
//  },
//  plugins: [],
//}
//