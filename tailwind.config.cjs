/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#0F1A2E",
          20: "#172F4C",
          30: "#194486",
        },
      },
      backgroundImage: {
        header: "url('assets/images/header.jpg')",
        company: "url('assets/images/company.png')",
        companyImage: "url('assets/images/companyImage.jpg')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
