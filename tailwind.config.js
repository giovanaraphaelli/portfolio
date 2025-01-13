/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
        mono: ['IBM Plex Mono', 'mono'],
      },
      fontSize: {
        subtitle: [
          '1.5rem',
          {
            fontFamily: ['IBM Plex Mono', 'mono'],
            fontWeight: '500',
          },
        ],
      },
      colors: {
        light: {
          background: '#DDDDF5',
          surface: '#C3C3E6',
          accent: '#B8B8E6',
          primary: '#170A33',
          secondary: '#4C5095',
          highlight: '#27272E',
          text: '#38383F',
        },
        dark: {
          background: '#1C1C1F',
          surface: '#212126',
          accent: '#27272E',
          primary: '#777AC0',
          secondary: '#C0C3FD',
          highlight: '#D3D3F7',
          text: '#6C6C80',
        },
      },
    },
  },
  plugins: [],
};
