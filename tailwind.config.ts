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
            'h1,h2,h3,h4,h5,h6': {
              'scroll-margin-top': '128px',
            },
            p: {
              margin: '0.75rem 0',
            },
            li: {
              margin: '0.375rem 0',
            },
            'li>ol': {
              margin: '0.375rem 0',
            },
            img: {
              borderRadius: '0.375rem',
            },
            code: {
              '&:not(pre>code)': {
                color: '#737373',
                backgroundColor: '#ededed',
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
              borderLeftColor: '#10B981',
              backgroundColor: '#f5f5f5',
              p: {
                fontStyle: 'normal',
                '&::before': {
                  content: 'normal',
                },
                '&::after': {
                  content: 'normal',
                },
                padding: '1em 1em 1em 0',
              },
            },
            a: {
              color: '#10B981',
              fontWeight: '600',
              '&:hover': {
                color: '#059669',
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
          150: '#eeeeee',
          200: '#e5e5e5',
          250: '#dedede',
          300: '#d4d4d4',
          350: '#b5b5b5',
          400: '#a3a3a3',
          450: '#8a8a8a',
          500: '#737373',
          550: '#666666',
          600: '#555555',
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
        'tag-lm': {
          default: '#FFFFFF',
          gray: '#EBECED',
          brown: '#E9E5E3',
          orange: '#FAEBDD',
          yellow: '#FBF3DB',
          green: '#DDEDEA',
          blue: '#DDEBF1',
          purple: '#EAE4F2',
          pink: '#F4DFEB',
          red: '#FBE4E4',
        },
        'tag-dm': {
          default: '#2F3437',
          gray: '#454B4E',
          brown: '#434040',
          orange: '#594A3A',
          yellow: '#59563B',
          green: '#354C4B',
          blue: '#364954',
          purple: '#443F57',
          pink: '#533B4C',
          red: '#594141',
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
        '.text-highlight': {
          '@apply text-emerald-700 dark:text-emerald-500': '',
        },
        '.text-primary': {
          '@apply text-black-700 dark:text-black-100': '',
        },
        '.text-secondary': {
          '@apply text-black-600 dark:text-black-200': '',
        },
        '.text-tertiary': {
          '@apply text-black-550 dark:text-black-300': '',
        },
        '.text-mute': {
          '@apply text-black-500 dark:text-black-350': '',
        },
        '.bg-primary': {
          '@apply bg-white dark:bg-black-850': '',
        },
        '.bg-secondary': {
          '@apply bg-black-100 dark:bg-black-800': '',
        },
        '.bg-tertiary': {
          '@apply bg-black-200 dark:bg-black-750': '',
        },
        '.bg-mute': {
          '@apply bg-black-400 dark:bg-black-500': '',
        },
        '.tag-primary': {
          '@apply bg-black-150 text-black-700 dark:text-black-300 dark:bg-black-700': '',
        },
        '.tag-active': {
          '@apply pointer-events-none cursor-default bg-[#05875e] text-white dark:text-white dark:bg-emerald-700':
            '',
        },
      });
      addVariant('progress-value', ['&::-webkit-progress-value', '&::-moz-progress-bar', '&']);
      addVariant('progress-bg', ['&::-webkit-progress-bar', '&']);
    }),
  ],
};
export default config;
