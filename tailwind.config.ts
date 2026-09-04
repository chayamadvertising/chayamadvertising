import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        chayam: {
          green: '#09b37d',
          'green-hover': '#079668',
          'green-light': '#10B981',
          'green-mint': '#F2FAF6',
          'green-subtle': '#F7FCFA',
          charcoal: '#1A1A1A',
          'charcoal-light': '#2D3748',
          gray: '#4A5568',
          'gray-light': '#F8FAFC',
          gold: '#E5A93C',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-poppins)', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(9, 179, 125, 0.1)',
        glow: '0 0 25px rgba(9, 179, 125, 0.35)',
        card: '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-up-delayed': 'fadeUp 0.8s ease-out 0.3s forwards',
        'fade-up-delayed-2': 'fadeUp 0.8s ease-out 0.6s forwards',
        'fade-left': 'fadeLeft 0.8s ease-out forwards',
        'fade-right': 'fadeRight 0.8s ease-out forwards',
        'scale-up': 'scaleUp 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
