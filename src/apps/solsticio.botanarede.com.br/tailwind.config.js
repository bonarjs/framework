// module.exports = require("@botanarede/config/tailwind.config")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "../../bnr-core/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}