const { nextui } = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|calendar|card|checkbox|input|progress|scroll-shadow|skeleton|slider|spacer|ripple|spinner|popover).js"
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    nextui({
      defaultTheme: 'dark',
      themes: {
        dark: {
          colors: {
            background: {
              50: '#e6e4f2',
              100: '#ccc9dc',
              200: '#b2afc4',
              300: '#87849c',
              400: '#5f5c78',
              500: '#251f44', // Original RGB(37, 31, 68)
              600: '#211c3d',
              700: '#1d1836',
              800: '#19152e',
              900: '#151127',
              DEFAULT: '#251f44',
              foreground: '#ffffff',
            },
            primary: {
              50: '#ae80ff',
              100: '#9b66ff',
              200: '#8648ff',
              300: '#732eff',
              400: '#601cff',
              500: '#5200ff', // Original RGB(82, 0, 255)
              600: '#4a00e6',
              700: '#4100cd',
              800: '#3800b4',
              900: '#2f009b',
              DEFAULT: '#5200ff',
              foreground: '#ffffff',
            },
            accent: {
              50: '#f0e6ff',
              100: '#dcccff',
              200: '#c7b2ff',
              300: '#b091ff',
              400: '#a57dff',
              500: '#9d70ff', // Original RGB(157, 112, 255)
              600: '#8b64e6',
              700: '#7955cd',
              800: '#6948b4',
              900: '#5b3c9b',
              DEFAULT: '#9d70ff',
              foreground: '#eeeeee',
            },
            focus: '#F182F6',
          },
        },
      },
    }),
  ],
};
