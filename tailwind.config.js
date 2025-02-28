/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-geist-sans)", "sans-serif"],
          mono: ["var(--font-geist-mono)", "monospace"],
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  };
  