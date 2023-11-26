/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001e4d',
        secondaryBtn: '#222',
        secondaryHover: '#ff8c66',
        timecol: '#ff5733',
      },
      fontFamily: {
        pops: ['poppins', 'sans-serif'],
        seoge: ["Segoe UI", 'Tahoma', 'Geneva', 'Verdana', 'sans-serif']
      },
      boxShadow: {
        'custom': '20px 10px 20px #001e4d',
      },
      screens: {
        'sm': '640px',  
        'md': '768px', 
        'lg': '1024px',
        'xl': '1280px', 
      },
    },
  },
  plugins: [],
}
