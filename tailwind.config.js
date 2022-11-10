/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins']
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
