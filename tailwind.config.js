/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors:{
        "primary-white":"#FFF",
        "primary-black":"#06140D",
        "primary-accent":"#2db148",
        "primary-accent-darker":"#006B32",
        "primary-accent-pale":"#46EB93",
        "primary-danger":"#DD2E00"
      }
    },
  },
  plugins: [],
}
