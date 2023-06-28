//eslint
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./src/**/*.js", "./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: { max: "400px" },
    },
    extend: {
      animation: {
        "fade-in": "fadeIn .5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -20%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
