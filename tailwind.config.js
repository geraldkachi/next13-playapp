/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./app/**/*.{html,js,ts,jsx,tsx,mdx}",
    './sections/**/*.{html,js,ts,jsx,tsx,mdx}',
    './styles/**/*.{html,js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-to-b':'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
      },
    },
  },
  plugins: [
    // require('tailwindcss-textshadow'),
    // require('tailwind-scrollbar-hide'),
    // require('tailwind-scrollbar'),
  ],
};
