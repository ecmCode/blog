const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      
      keyframes:{
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeout: {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
        },
      },

      animation: {
        fadein: 'fadein 0.5s ease-in-out',
      }

    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.5xl') },
        'h2': { fontSize: theme('fontSize.4xl') },
        'h3': { fontSize: theme('fontSize.3xl') },
        'h4': { fontSize: theme('fontSize.2xl') },
        'p': { fontSize: theme('fontSize.md') },
        'li':{ fontSize: theme('fontSize.md') },
      })
    })
  ],
}