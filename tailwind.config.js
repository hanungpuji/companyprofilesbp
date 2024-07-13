// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
// eslint-disable-next-line no-undef
const daisyui = require('daisyui');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin,
    daisyui
  ],
}
