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
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: '#3A1078',
      secondary: '#4E31AA',
      third: '#3795BD',
      background: '#170132'
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
