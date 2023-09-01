/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'anti-flash-white' : '#E8E9EB',
      'tomato' : '#F06543',
      'alabaster' : '#E0DFD5',
      'onyx' :  '#313638',
      'sandy-brown' : '#F09D51',
      'black': 'black',
      'red' : '#8f1814',
      'orange' : '#ca6e11',
      'green' : "green",
      'blue' : '#0207ff'

    },
    extend: {},
  },
  plugins: [],
}

