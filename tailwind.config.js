/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      gray: {
        700: '#1C1C1F',
        600: '#212126',
        500: '#27272E',
        400: 'rgba(39, 39, 46, 0.92)',
        300: '#6C6C80',
      },
      purple: {
        700: '#170A33',
        600: '#4C5095',
        500: '#777AC0',
        400: '#C0C3FD',
        300: '#B8B8E6',
        200: '#C3C3E6',
        150: '#D3D3F7',
        100: '#DDDDF5',
      },
      current: 'currentColor',
    },
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
};
