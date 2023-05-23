/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: " 'Raleway', sans-serif;",
        Inter: " 'Inter', sans-serif;",
        FiraSans: " 'Fira Sans', sans-serif;",
      },
      fontSize: {
        xsm: "14px",
        sm: "16px",
        md: "18px",
        lg: "20px",
        xl: "24px",
        xxl: "40px",
        xxxl: "64px",
      },
      backgroundColor: {
        primary: "#030222",
        secandary: "#030739",
        LigthBlue: "#4377F8",
      },
    },
  },
  plugins: [],
};
