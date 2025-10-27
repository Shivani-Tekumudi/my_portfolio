/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6D2849",   // main brand color
        secondary: "#f4e1f1",
        accent: "#ffb6c1",
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans-jp)", "var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
