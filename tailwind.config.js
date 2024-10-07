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
          50: "rgba(var(--c-primary-50), 1)",
          100: "rgba(var(--c-primary-100), 1)",
          200: "rgba(var(--c-primary-200), 1)",
          300: "rgba(var(--c-primary-300), 1)",
          400: "rgba(var(--c-primary-400), 1)",
          500: "rgba(var(--c-primary-500), 1)",
          600: "rgba(var(--c-primary-600), 1)",
          700: "rgba(var(--c-primary-700), 1)",
          800: "rgba(var(--c-primary-800), 1)",
          900: "rgba(var(--c-primary-900), 1)",
        },
        accent: {
          50: "rgba(var(--c-accent-50), 1)",
          100: "rgba(var(--c-accent-100), 1)",
          200: "rgba(var(--c-accent-200), 1)",
          300: "rgba(var(--c-accent-300), 1)",
          400: "rgba(var(--c-accent-400), 1)",
          500: "rgba(var(--c-accent-500), 1)",
          600: "rgba(var(--c-accent-600), 1)",
          700: "rgba(var(--c-accent-700), 1)",
          800: "rgba(var(--c-accent-800), 1)",
          900: "rgba(var(--c-accent-900), 1)",
        },
        background: {
          50: "rgba(var(--c-background-50), 1)",
          100: "rgba(var(--c-background-100), 1)",
          200: "rgba(var(--c-background-200), 1)",
          300: "rgba(var(--c-background-300), 1)",
          400: "rgba(var(--c-background-400), 1)",
          500: "rgba(var(--c-background-500), 1)",
          600: "rgba(var(--c-background-600), 1)",
          700: "rgba(var(--c-background-700), 1)",
          800: "rgba(var(--c-background-800), 1)",
          900: "rgba(var(--c-background-900), 1)",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
