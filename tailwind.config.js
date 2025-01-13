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
          background: '#18181B', // Um tom um pouco mais escuro para melhorar o contraste
          surface: '#27272e', // Um leve ajuste para diferenciar do background
          accent: '#3d3d49', // Mais contraste com a superfície
          primary: '#918CFF', // Um pouco mais vibrante para melhorar a legibilidade
          secondary: '#C0C3FD', // Ajustado para melhor contraste com fundo escuro
          highlight: '#E3E3FF', // Mais brilho para destacar melhor
          text: '#B0B0D0',
        },
      },
    },
  },
  plugins: [],
};
