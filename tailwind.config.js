const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coolGray : colors.coolGray,
        blueGray : colors.blueGray,
        'fakhti' : '#dd6e42',
        'turquoise': '#119da4',
        'jet': "#2e2d2b",
        'greenBlue':'#0563bb',
        'slateGray':'#74808a'
      },
      textOpacity: ['dark']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
