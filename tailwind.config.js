module.exports = {
  content: [
    "./src/pages/**/*.{jsx, js}",
    "./src/features/**/*.{jsx, js}",
    "./src/ui/**/*.{jsx, js}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#499FFF",
          50: "#FFFFFF",
          100: "#ECF5FF",
          200: "#C3E0FF",
          300: "#9BCAFF",
          400: "#72B5FF",
          500: "#499FFF",
          600: "#1181FF",
          700: "#0066D8",
          800: "#004BA0",
          900: "#003168",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
