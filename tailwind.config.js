module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      "onload-title": "onload-title 800ms normal forwards ease-in-out",
      "onload-section": "onload-section 800ms normal forwards ease-in-out",
      "fade-in": "fade-in 800ms normal forwards ease-in-out"
    },
    keyframes: {
      "fade-in": {
        "0%": {
          opacity: 0
        },
        "100%": {
          opacity: 1,
        }
      },
      "onload-section": {
        "0%": {
          opacity: 0,
          transform: "translate(0px,-50px)"
        },
        "100%": {
          opacity: 1,
          transform: "translate(0px,0px)"
        }
      },
      "onload-title": {
        "0%": {
          opacity: 0,
          transform: "translate(-50px,0px)"
        },
        "100%": {
          opacity: 1,
          transform: "translate(0px,0px)"
        }
      }
    },
    screens: {
      'desktop': `62.5rem`,
    },
    extend: {
      colors: {
        black: `#111111`,
        'dark-200': `#999999`,
        'dark-400': `#777777`,
        dark: `#555555`,
        pink: `#FF3998`,
        red: `#FF3939`,
        orange: `#FF8139`,
        'neon-green': `#39FFA0`
      },
      fontFamily: {
        inter: ['InterRegular', 'Helvetica'],
        'inter-black': ['InterBlack', 'Helvetica'],
        'inter-medium': ['InterMedium', 'Helvetica'],
        'inter-bold': ['InterBold', 'Helvetica'],
        'inter-semi-bold': ['InterSemiBold', 'Helvetica']
      }
    },
  },
  plugins: [],
}