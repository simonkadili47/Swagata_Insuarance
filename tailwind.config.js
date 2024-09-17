
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '190': '190px', // Add custom value
        '526': '526px', // Add custom value
        
      },
      colors: {
        'custom-gray': '#e0ebe5', 
        'custom-green': '#296b64', 
        'custom-orange':'#ff7455',
        'custom-gray1': '#f7f7f7',
        'custom-blue': '#141f1a',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 1s ease-out',
      },
    },
  },
  plugins: [],
}


