import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF8F5',
          light: '#FDFBF7',
          dark: '#F4EFE6',
          deep: '#EBE4D5',
        },
        cream: {
          DEFAULT: '#F6F1E9',
          dark: '#E8DFC8',
          paper: '#FBF9F4',
        },
        terracotta: {
          light: '#E68A6F',
          DEFAULT: '#C86D51',
          dark: '#A64F34',
          deep: '#843922',
        },
        warmbrown: {
          light: '#7A624E',
          DEFAULT: '#4A3728',
          dark: '#2E2218',
        },
        dustyrose: {
          light: '#E6B2AC',
          DEFAULT: '#C2847A',
          dark: '#9E5F56',
        },
        sage: {
          light: '#B5C7BB',
          DEFAULT: '#7E9A86',
          dark: '#587360',
        },
        mutedblue: {
          light: '#A5C1C2',
          DEFAULT: '#7A9E9F',
          dark: '#4F7071',
        },
        warmgold: {
          light: '#F4D396',
          DEFAULT: '#D4A373',
          dark: '#B07B46',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', '-apple-system', 'sans-serif'],
        handwriting: ['var(--font-caveat)', 'cursive'],
      },
      boxShadow: {
        scrapbook: '0 8px 30px rgba(74, 55, 40, 0.08), 0 2px 8px rgba(74, 55, 40, 0.05)',
        polaroid: '0 12px 35px -5px rgba(46, 34, 24, 0.15), 0 4px 10px rgba(46, 34, 24, 0.08)',
        tape: '0 1px 3px rgba(0,0,0,0.12)',
        glow: '0 0 25px rgba(212, 163, 115, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
