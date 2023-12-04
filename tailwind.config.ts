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
          600: '#525252',
          700: '#404040',
          750: '#363636',
          800: '#262626',
          900: '#242424',
        },
        navy: {
          50: '#F2F4F8',
          100: '#E2E7EE',
          200: '#C4CFDE',
          300: '#9AACC6',
          400: '#6182A9',
          500: '#596D90',
          600: '#1F2937',
          700: '#192633',
          800: '#111B24',
          900: '#080D11',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    plugin(({ addComponents, addUtilities }) => {
      addComponents({
        '.text-primary': {
          '@apply text-navy-800 dark:text-black-100': '',
        },
        '.text-secondary': {
          '@apply text-navy-600 dark:text-black-200': '',
        },
        '.text-tertiary': {
          '@apply text-navy-300 dark:text-black-400': '',
        },
        '.text-mute': {
          '@apply text-navy-200 dark:text-black-500': '',
        },
        '.bg-primary': {
          '@apply bg-navy-50 dark:bg-black-900': '',
        },
        '.bg-secondary': {
          '@apply bg-navy-100 dark:bg-black-750': '',
        },
        '.bg-tertiary': {
          '@apply bg-navy-200 dark:bg-navy-600': '',
        },
        '.bg-mute': {
          '@apply bg-navy-300 dark:bg-black-500': '',
        },
      });
    }),
  ],
};
export default config;
