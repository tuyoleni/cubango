import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        blobAnimation: {
          '0%': { transform: 'scale(1) translateY(0)' },
          '50%': { transform: 'scale(1.5) translateY(-30px)' },
          '100%': { transform: 'scale(1) translateY(0)' },
        },
        moveBlob: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-100px, 50px)' },
          '50%': { transform: 'translate(100px, -100px)' },
          '75%': { transform: 'translate(-50px, -50px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        blob: 'blobAnimation 10s infinite',
        move: 'moveBlob 20s infinite',
      },
      blur: {
        'extra-sm': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
    },
  },
  plugins: [nextui()],
};

export default config;
