const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      grayOne: '#36393F',
      grayTwo: '#303339',
      dark: {
        100: '#36393F',
        200: '#32353B',
        300: '#2F3136',
        400: '#202225'
      },
      blurple: '#7289DA',
      blurpleDark: '#4752C4',
      greyple: '#97A9B4',
      black: '#23272A',
      white: '#FFFFFF'
    },
    extend: {
      fontFamily: {
        whiteney: ['whiteney', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
