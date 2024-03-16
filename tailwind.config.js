/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '600px',
      'lg': '456px'
    },
  },
  plugins: [require("daisyui")],
}