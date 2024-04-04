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
      }
    },
  },
  plugins: [],
}