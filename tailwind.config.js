module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      sm: '0 1px 2px 0 #00BFA6;',
      DEFAULT: '0 1px 3px 0 #00BFA6; 0 1px 2px 0 #00BFA6;',
      md: '0 4px 6px -1px #00BFA6; 0 2px 4px -1px #00BFA6;',
      lg: '0 10px 15px -3px #00BFA6; 0 4px 6px -2px #00BFA6;',
      xl: '0 20px 25px -5px #00BFA6; 0 10px 10px -5px #00BFA6;',
      '2xl': '0 25px 50px -12px #00BFA6;',
     '3xl': '0 35px 60px -15px #00BFA6;',
      inner: 'inset 0 2px 4px 0 #00BFA6;',
      none: 'none',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
