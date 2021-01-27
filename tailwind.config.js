module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      sm: '0 1px 2px 0 #124725;',
      DEFAULT: '0 1px 3px 0 #124725; 0 1px 2px 0 #124725;',
      md: '0 4px 6px -1px #124725; 0 2px 4px -1px #124725;',
      lg: '0 10px 15px -3px #124725; 0 4px 6px -2px #124725;',
      xl: '0 20px 25px -5px #124725; 0 10px 10px -5px #124725;',
      '2xl': '0 25px 50px -12px #124725;',
     '3xl': '0 35px 60px -15px #124725;',
      inner: 'inset 0 2px 4px 0 #124725;',
      none: 'none',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
