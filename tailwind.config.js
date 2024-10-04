/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--c-primary-50))",
          100: "rgb(var(--c-primary-100))",
          200: "rgb(var(--c-primary-200))",
          300: "rgb(var(--c-primary-300))",
          400: "rgb(var(--c-primary-400))",
          500: "rgb(var(--c-primary-500))",
          600: "rgb(var(--c-primary-600))",
          700: "rgb(var(--c-primary-700))",
          800: "rgb(var(--c-primary-800))",
          900: "rgb(var(--c-primary-900))",
        },
        accent: {
          50: "rgb(var(--c-accent-50))",
          100: "rgb(var(--c-accent-100))",
          200: "rgb(var(--c-accent-200))",
          300: "rgb(var(--c-accent-300))",
          400: "rgb(var(--c-accent-400))",
          500: "rgb(var(--c-accent-500))",
          600: "rgb(var(--c-accent-600))",
          700: "rgb(var(--c-accent-700))",
          800: "rgb(var(--c-accent-800))",
          900: "rgb(var(--c-accent-900))",
        },
        background: {
          50: "rgb(var(--c-background-50))",
          100: "rgb(var(--c-background-100))",
          200: "rgb(var(--c-background-200))",
          300: "rgb(var(--c-background-300))",
          400: "rgb(var(--c-background-400))",
          500: "rgb(var(--c-background-500))",
          600: "rgb(var(--c-background-600))",
          700: "rgb(var(--c-background-700))",
          800: "rgb(var(--c-background-800))",
          900: "rgb(var(--c-background-900))",
        },
      },
    },
  },
  plugins: [],
};
