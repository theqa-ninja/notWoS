/* 
  Explore configuration options docs https://tailwindcss.com/docs/configuration#configuration-options
  Or check the default configuration https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
*/
const colors = require('tailwindcss/colors');

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  jit: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      rosewater:  "#F5E0DC",
      flamingo:   "#F2CDCD",
      mauve:      "#DDB6F2",
      pink:       "#F5C2E7",
      maroon:     "#E8A2AF",
      red:        "#F28FAD",
      peach:      "#F8BD96",
      yellow:     "#FAE3B0",
      green:      "#ABE9B3",
      teal:       "#B5E8E0",
      blue:       "#96CDFB",
      sky:        "#89DCEB",
      lavender:   "#C9CBFF",

      black: {
       '0': "#161320",
       '1': "#1A1826",
       '2': "#1E1E2E",
       '3': "#302D41",
       '4': "#575268"
      },

      gray: {
       '0': "#6E6C7E",
       '1': "#988BA2",
       '2': "#C3BAC6",
      },

      white:      "#D9E0EE",
      // flamingo: '242, 205, 205',
      // mauve: '221, 182, 242',
      // pink: '245, 194, 231',
      // maroon: '232, 162, 175',
      // red: '242, 143, 173',
      // peach: '248, 189, 150',
      // yellow: '250, 227, 176',
      // green: '171, 233, 179',
      // teal: '181, 232, 224',
      // blue: '150, 205, 251',
      // sky: '137, 220, 235',
      // black: {
      //   100: '22, 19, 32',
      //   200: '26, 24, 38',
      //   300: '30, 30, 46',
      //   400: '48, 45, 65',
      //   500: '87, 82, 104'
      // },
      // gray: {
      //   100: '110, 108, 126',
      //   200: '152, 139, 162',
      //   300: '195, 186, 198'
      // },
      // white: '217, 224, 238',
      // lavender: '201, 203, 255',
      // rosewater: '245, 224, 220'
    },
    extend: {
      colors: colors
    }
  },
  plugins: []
};
