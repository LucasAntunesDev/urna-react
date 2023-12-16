/** @type {import ('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "node_modules/flowbite-react/**/*. {js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'urna': {
          'primario': '#c2c3c6',
          'secundario': '#afaba2',
          'terciario': '#e7e7e7',
        },
      },
    },
    plugins: [
      require("flowbite/plugin")
    ],
  },
};