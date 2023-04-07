/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.html"],
  safelist: [
    {
      pattern: /(top|bottom|left|right)-+/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

