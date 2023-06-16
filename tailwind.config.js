/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        custom: "0px 0px 16px #718096",
        projects: "0px 0px 3px #718096",
        nav: "1px 1px 5px #718096",
      },
      textColor: {
        react: "#61DBFB",
        javascript: "#f7df1e",
        html: "#F06529",
        css: "#1939a9",
        tailwind: "#8ab4f8",
        firebase: "#F5820D",
      },
      fontFamily: {
        kanit: ["'Kanit', sans-serif;"],
        pacifico: ["'Pacifico', cursive;"],
      },
      screens: {
        md: "837px",
      },
    },
  },
  plugins: [],
};
