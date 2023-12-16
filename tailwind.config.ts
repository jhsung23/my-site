import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      NotoSans: ['NotoSans'],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            img: {
              borderRadius: '0.375rem',
            },
            code: {
              '&:not(pre>code)': {
                color: '#737373',
                backgroundColor: '#e5e5e5',
                borderRadius: '0.375rem',
                padding: '0.2rem 0.4rem',
                '&::before': {
                  content: 'normal',
                },
                '&::after': {
                  content: 'normal',
                },
              },
            },
            blockquote: {
              borderLeftColor: '#7DB5B4',
              backgroundColor: '#ececec',
              p: {
                fontStyle: 'normal',
                '&::before': {
                  content: 'normal',
                },
                '&::after': {
                  content: 'normal',
                },
              },
            },
            a: {
              color: '#57A2A8',
              fontWeight: '600',
              '&:hover': {
                color: '#43838E',
              },
            },
          },
        },
        invert: {
          css: {
            code: {
              '&:not(pre>code)': {
                backgroundColor: '#404040',
                color: '#c8c8c8',
              },
            },
            blockquote: {
              backgroundColor: '#2E2E2E',
            },
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: {
          50: '#fafafa',
          100: '#f5f5f5',
          150: '#ededed',
          200: '#e5e5e5',
          250: '#dedede',
          300: '#d4d4d4',
          350: '#b5b5b5',
          400: '#a3a3a3',
          450: '#8a8a8a',
          470: '#808080',
          500: '#737373',
          600: '#737373',
          700: '#404040',
          750: '#363636',
          800: '#2E2E2E',
          850: '#272727',
          900: '#242424',
        },
        mint: {
          50: '#F1F3F3',
          100: '#E9EEED',
          150: '#E3EAE8',
          200: '#D2E0DE',
          300: '#A1C4C1',
          400: '#7DB5B4',
          500: '#57A2A8',
          600: '#43838E',
          700: '#315F6D',
          800: '#1F3E4C',
          900: '#0F1E28',
          950: '#070F12',
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  variants: {
    typography: ['dark'],
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addComponents, addVariant }) => {
      addComponents({
        '.text-primary': {
          '@apply text-mint-900 dark:text-black-100': '',
        },
        '.text-secondary': {
          '@apply text-mint-800 dark:text-black-200': '',
        },
        '.text-tertiary': {
          '@apply text-mint-700 dark:text-black-300': '',
        },
        '.text-mute': {
          '@apply text-black-450 dark:text-black-350': '',
        },
        '.bg-primary': {
          '@apply bg-mint-50 dark:bg-black-850': '',
        },
        '.bg-secondary': {
          '@apply bg-mint-100 dark:bg-black-800': '',
        },
        '.bg-tertiary': {
          '@apply bg-mint-200 dark:bg-black-750': '',
        },
        '.bg-mute': {
          '@apply bg-mint-400 dark:bg-black-500': '',
        },
        '.tag-primary': {
          '@apply bg-mint-150 text-mint-400 dark:text-black-350 dark:bg-black-700 hover:bg-mint-200 dark:hover:bg-black-850':
            '',
        },
        '.tag-active': {
          '@apply cursor-default bg-mint-400 text-white dark:text-white dark:bg-black-500 hover:bg-mint-400 dark:hover:bg-black-500':
            '',
        },
      });
      addVariant('progress-value', ['&::-webkit-progress-value', '&::-moz-progress-bar', '&']);
      addVariant('progress-bg', ['&::-webkit-progress-bar', '&']);
      // addVariant()
    }),
  ],
};
export default config;
