
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mandarin: "#1B1B1E"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
