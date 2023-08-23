/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,txs}"
  ],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#592633",
          "secondary": "#fcc019",
          "accent": "#7f3648",
          "neutral": "#2a323c",
          "base-100": "#1d232a",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272"
        }
      }
    ],
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
  plugins: [
    require('daisyui')
  ],
}
