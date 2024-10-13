/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        searchButtonColor: "#6c5dd3",
        searchButtonColorHover: "#5948b3",
        colorLK: "#388ee7",
        colorJP: "#6249cc",
        colorGB: "#40b681",
        colorAU: "#de944e",
        colorUS: "#9c3a3a",
        colorFR: "#e7d338",
        colorCN: "#e73838",
        colorNO: "#38e7d3",
      },
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
