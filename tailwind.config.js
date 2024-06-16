
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
      backgroundImage: {
        'samurai-gradient': 'linear-gradient(90deg, rgba(134,0,0,0.5) 0%, rgba(51,29,29,0.9360994397759104) 49%, rgba(252,252,252,0) 100%)',
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'md': '3px 3px 6px rgba(0, 0, 0, 0.5)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.5)',
        'xl': '5px 5px 10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          'text-shadow': '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          'text-shadow': '4px 4px 8px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-xl': {
          'text-shadow': '5px 5px 10px rgba(0, 0, 0, 0.5)',
        },
      });
    }
  ],
}
