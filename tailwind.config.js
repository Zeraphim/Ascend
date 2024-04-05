/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'image-1': "url('./src/assets/bg-images/png/1.jpg')",
        'image-2': "url('./src/assets/bg-images/png/2.jpg')",
        'image-3': "url('./src/assets/bg-images/png/3.jpg')",
        'image-4': "url('./src/assets/bg-images/png/4.jpg')",
        'image-5': "url('./src/assets/bg-images/png/5.jpg')",
        'image-6': "url('./src/assets/bg-images/png/6.jpg')",
        'image-8': "url('./src/assets/bg-images/png/8.jpg')",
        'image-9': "url('./src/assets/bg-images/png/9.jpg')",
      },
      boxShadow: {
        'inset': 'inset 0 0 100px 100px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-up': 'fade-up 1s',
        'fade-up-2s': 'fade-up-2s 2s',
        'fade-left': 'fade-left 1s',
        'fade-right': 'fade-right 1s',
        'fade-down': 'fade-down 1s',
      },
      keyframes: {
        'fade-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-up-2s': { // new keyframes
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-left': { // new keyframes
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'fade-right': { // new keyframes
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'fade-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
      }
    },
  },
  plugins: [],
}