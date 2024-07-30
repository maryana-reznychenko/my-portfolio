/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx, html}"],
  theme: {
    colors: {
      'impact': '#a1001b',
      'rose': '#b33046',
      'white': '#FFFFFF',
      'black': '#000000',
      'black-light': '#1f1f1f',
      'gray': '#3C3C3C',
      'gray-light': '#7A7A7A',
      'background': '#F9F9F9'
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'rokkit': ['Rokkitt', 'serif'],
      },
      letterSpacing: {
        normal: '0.05em',
        wide: '0.1em',
        wider: '0.2em',
        widest: '0.3em'
      },


    },
  },
  plugins: [],
}

