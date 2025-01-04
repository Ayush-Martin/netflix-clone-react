/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        netflix: [
          '"Netflix Sans"',
          "Helvetica Neue",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(171deg, rgba(16,0,36,1) 25%, rgba(16,0,36,1) 46%, rgba(45,29,88,1) 92%, rgba(101,62,98,1) 100%)",
      },
      screens: {
        xs: "600px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
