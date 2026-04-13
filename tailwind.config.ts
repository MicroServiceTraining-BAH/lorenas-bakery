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
        rose: {
          blush: '#E88FA3',
          light: '#F5C5D0',
          pale: '#FFF0F3',
        },
        teal: {
          sage: '#5F8F8A',
          light: '#A8C5C2',
          pale: '#EDF5F4',
        },
        cream: '#FFF6F8',
        gold: '#F4C27A',
        'gold-light': '#FAE4B8',
        brown: {
          warm: '#6B4226',
          light: '#C49A72',
        },
        stone: {
          950: '#1C1412',
          900: '#2D2320',
          800: '#4A3A36',
          700: '#6B5852',
          600: '#9C8880',
          500: '#C4B5AF',
          400: '#DDD3CF',
          300: '#EDE7E5',
          200: '#F7F3F2',
          100: '#FDFBFA',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        script: ['var(--font-dancing)', 'cursive'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(232, 143, 163, 0.12)',
        warm: '0 8px 40px rgba(107, 66, 38, 0.10)',
        card: '0 2px 16px rgba(107, 66, 38, 0.08)',
        'card-hover': '0 8px 32px rgba(107, 66, 38, 0.14)',
        float: '0 16px 64px rgba(107, 66, 38, 0.12)',
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #FFF6F8 0%, #FFF0F3 50%, #FFF9F0 100%)',
        'hero-gradient': 'linear-gradient(160deg, #FFF6F8 0%, #FDE8EE 40%, #FFF3E8 100%)',
        'rose-gradient': 'linear-gradient(135deg, #E88FA3 0%, #F5B8C8 100%)',
        'teal-gradient': 'linear-gradient(135deg, #5F8F8A 0%, #7AADA8 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F4C27A 0%, #F9D99B 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
