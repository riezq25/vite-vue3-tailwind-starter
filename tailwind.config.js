const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'mobile': '375px',
      'desktop': '1440px'
    },
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'monospace']
      }, colors: {
        primary: {
          cyan: {
            DEFAULT: 'hsl(172, 67%, 45%)'
          }
        },
        neutral: {
          cyan: {
            'very-dark': 'hsl(183, 100%, 15%)',
            'dark-grayish-1': 'hsl(183, 100%, 15%)',
            'dark-grayish-2': 'hsl(184, 14%, 56%)',
            'light-grayish-1': 'hsl(185, 41%, 84%)',
            'light-grayish-2': 'hsl(189, 41%, 97%)'
          },
          white: 'hsl(0, 0%, 100%)'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
