// tailwind.config.js
module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "1px",
      },
      maxWidth: {
        content: "900",
      },
      colors: {
        primary: "#FF871E",
        secondary: "#3A383F",
        warning: "#E1000A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
