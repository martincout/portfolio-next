import type { Config } from "tailwindcss";
import { PluginAPI } from 'tailwindcss/types/config';
const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin');


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
    },
    colors: {
      ...colors,
    },
  },
  plugins: [plugin(function ({ addUtilities }: PluginAPI) {
    addUtilities({
      '.drag-none': {
        '-webkit-user-drag': 'none',
        '-khtml-user-drag': 'none',
        '-moz-user-drag': 'none',
        '-o-user-drag': 'none',
        'user-drag': 'none'
      }
    });
  })
],
};
export default config;
