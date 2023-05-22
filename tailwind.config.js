/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: "font-family: 'Raleway', sans-serif;",
      },
      fontSize: {
        xs: "14px",
        base: "16px",
        xsm: "18px",
        md: "20px",
        lg: "24px",
        xl: "40px",
        xxl: "64px",
      },
    },
  },
  plugins: [],
};
