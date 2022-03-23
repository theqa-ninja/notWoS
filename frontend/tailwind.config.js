/* 
  Explore configuration options docs https://tailwindcss.com/docs/configuration#configuration-options
  Or check the default configuration https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
*/

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
      rosewater: '#F5E0DC',
      flamingo: '#F2CDCD',
      mauve: '#DDB6F2',
      pink: '#F5C2E7',
      maroon: '#E8A2AF',
      red: '#F28FAD',
      peach: '#F8BD96',
      yellow: '#FAE3B0',
      green: '#ABE9B3',
      teal: '#B5E8E0',
      blue: '#96CDFB',
      sky: '#89DCEB',
      lavender: '#C9CBFF',

      black: {
        0: '#161320',
        1: '#1A1826',
        2: '#1E1E2E',
        3: '#302D41',
        4: '#575268'
      },
      gray: {
        0: '#6E6C7E',
        1: '#988BA2',
        2: '#C3BAC6'
      },

      white: '#D9E0EE'
    },
    extend: {}
  },
  plugins: []
};
