/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./styles/**/*.css"],
  theme: {
    extend: {},
  },
  plugins: [],
}

