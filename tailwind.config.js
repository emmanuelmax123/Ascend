/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Cinzel", "serif"],
        descritext: ["Lora", "serif"],
        cardtitle: ["IM Fell English", "serif"],
        uifont: ["Nunito", "serif"],
      },
    },
  },
  plugins: [],
};
