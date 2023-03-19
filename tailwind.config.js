const tailwindColors = require('tailwindcss/colors')
const typography = require('@tailwindcss/typography')
const plugin = require('tailwindcss/plugin')
const postcss = require('postcss');
const debugScreens = require('tailwindcss-debug-screens');
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');

module.exports = {
  content: [
    './templates/**/*.{html.twig,twig}',
    './src/js/*.js'
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'white': {
          DEFAULT:'#FFFFFF',
        },
        'black': {
          DEFAULT:'#000000'
        }
      },
      fontFamily: {
        'sans-condensed': 'acumin-pro-condensed',
        'sans': 'acumin-pro',
        'transat': 'transat-text, Helvetica, Arial, sans-serif'
      },
      fontSize: {
        'component-heading': [`${round(40 / 16)}rem`, 1],
        'component-subheading': [`${round(32 / 16)}rem`, 1]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
            lineHeight: round(24 / 16),
            a: {
              color: theme('colors.black'),
              fontWeight: '400',
            },
            p: {
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.4')
            },
            strong: {
              color: theme('colors.white')
            }
          }
        }
      }),
    }
  },
  safelist: [
  ],
  plugins: [
    typography,
    debugScreens,
  ],
};
