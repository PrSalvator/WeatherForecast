/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue": "#0664a2",
        "black": "#292929",
        "gray": "#dfdfdf",
        "dark-gray": "#7d7d7d"
      }
    },
  },
  plugins: [],
};
