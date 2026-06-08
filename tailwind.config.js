/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#06122b',
        navy: '#071a3a',
        electric: '#0a72ff',
        cyanx: '#19d4ff',
        mist: '#f4f8ff',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(15, 58, 120, 0.12)',
        glow: '0 24px 90px rgba(10, 114, 255, 0.22)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(10,114,255,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(10,114,255,.09) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseSoft: 'pulseSoft 5s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
};
