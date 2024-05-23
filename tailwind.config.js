const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coolGray : colors.coolGray,
        blueGray : colors.blueGray,
        'jet': "#2e2d2b",
        'greenBlue':'#0563bb',
        'slateGray':'#74808a',
        'flashWhite': "#edefee",
        'mayaBlue': '#7BBDFC',
        'silver':'#BDBDBD',
        'jetLight':'#3a3838',
        'whiteLight':'#fcfcfc52',
        'emerald':'#0cce6b'
      },
      textOpacity: ['dark']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
