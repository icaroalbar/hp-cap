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
        secondary: {
          10: "#BE8F41",
          20: "#D3AE58",
          30: "#8E7923",
        },
      },
      backgroundImage: {
        header: "url('/assets/images/header.jpg')",
        company: "url('/assets/images/company.png')",
        companyImage: "url('/assets/images/companyImage.jpg')",
        safe: "url('/assets/images/safe.jpg')",
        health: "url('/assets/images/health.jpg')",
        car: "url('/assets/images/car.jpg')",
        structuring: "url('/assets/images/structuring.jpg')",
        woman: "url('/assets/images/woman.jpg')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
