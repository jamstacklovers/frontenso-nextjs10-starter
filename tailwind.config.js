const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        20: '20px',
        30: '30px',
        60: '60px',
      },
      colors: {
        danger: '#ff0000',
      },
    },
  },
  purge: ['./components/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
};
