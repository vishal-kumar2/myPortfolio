// tailwind.config.js
module.exports = {
  darkMode: 'class', // ✅ Very important
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tw-animate-css'),],
};
