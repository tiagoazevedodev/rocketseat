/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'ignite-green': '#00B37E',
        'second-green': '#00875F',
        'background': '#eff4fa',
      },
    },
  },
  plugins: [],
}