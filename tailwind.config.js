/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,txs}"
  ],
  theme: {
    colors: {
      'maroon': {
        50: '#f7edf0',
        100: '#e8cad1',
        200: '#d9a6b2',
        300: '#c98293',
        400: '#ba5f75',
        500: '#a0455b',
        600: '#7d3647',
        700: '#592633',
        800: '#35171e',
        900: '#12080a'
      },
      'gold': {
        50: '#fff6de',
        100: '#feeab2',
        200: '#fdd871',
        300: '#fdd25b',
        400: '#fdcc45',
        500: '#fcc019',
        600: '#e6aa03',
        700: '#d09902',
        800: '#ba8902',
        900: '#8e6902'
      },
      'gray': {
        50: '#F3F3F3',
        100: '#C4C4C4',
        200: '#BEBEBE',
        300: '#A6A6A6',
        400: '#8E8E8E',
        500: '#818181',
        600: '#666666',
        700: '#4B4B4B',
        800: '#444444',
        900: '#292929'
      },
      'white': '#ffffff',
      'black': '#000000'
    },
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [],
}
