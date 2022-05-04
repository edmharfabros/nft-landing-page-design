module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['InterRegular','Helvetica'],
        'inter-black': ['InterBlack','Helvetica'],
        'inter-medium': ['InterMedium','Helvetica'],
        'inter-bold': ['InterBold','Helvetica'],
        'inter-semi-bold': ['InterSemiBold','Helvetica']
      }
    },
  },
  plugins: [],
}