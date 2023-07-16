

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#1f1f1f',
          ligth: '#FFFFFF'
        },

        "pink": "#b20082",
        "gray": "#565656",

      },

      height: {
        relative: 'calc(100vh - 220px)'
      },

      fontFamily: {
        indie: ['Indie Flower']
      }
    },
  },
  
  plugins: [],
}




