/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      animation: {
        flip: 'flip 5s infinite ease-in-out',
        pulse3s: 'pulse 1.7s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 7s linear infinite'
      },
      scale: {
        '30': '.3',
        '25': '.25'
      },
      screens: {
        tablet: '821px',
        '3xl': '1800px',
        'xl2': '1440px',
        'md2': '900px'
      },
      keyframes: {
        flip: {
          '0%': {
            transform: 'rotateY(0deg)',
          },

          '50%': {
            transform: 'rotateY(180deg)',
          },

          '100%': {
            transform: 'rotateY(0deg)',
          },
        },
        pulse: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.5',
          },
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },

      colors: {
        primary: '#164249',
        'dark-bg': '#272F35',
        'light-bg': '#E4E6E8',
        'dark-accent': '#57CA85',
        'dark-text': '#E4E6E8',
        'light-text': '#272F35',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],

  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: false,
  },
}
