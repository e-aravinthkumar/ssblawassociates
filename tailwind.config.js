module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
  darkMode: "class",
  variants: {
    extend: {
      display: ["dark"],
      opacity: ["dark"],
    },
  },
};
