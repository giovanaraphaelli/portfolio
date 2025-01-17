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
            fontWeight: '500',
          },
        ],
      },
      colors: {
        light: {
          background: '#DDDDF5',
          surface: '#C3C3E6',
          accent: '#cecef3',
          primary: '#170A33',
          secondary: '#4C5095',
          highlight: '#27272E',
          text: '#38383F',
        },
        dark: {
          background: '#18181B',
          surface: '#27272e',
          accent: '#3d3d49',
          primary: '#918CFF',
          secondary: '#C0C3FD',
          highlight: '#E3E3FF',
          text: '#B0B0D0',
        },
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(30px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
