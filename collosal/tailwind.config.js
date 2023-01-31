/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        nosans: ["Noto sans", "sans serif"],
      },
      colors: {
        primary: "#6016FC",
        ijo: "#16FCD2",
        highligth: "#221048",
        gelap: "#0B0B22",
        mermud: "#FC165B",
        silver: "#161629",
      },
    },
  },
  plugins: [],
};
