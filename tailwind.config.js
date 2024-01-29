/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/images/peculiar-banner.jpg')",
        'hero-bg-mobile': "url('/src/assets/images/peculiar-banner-mobile.jpg')",
        'hero-bg-2': "url('/src/assets/images/peculiar-banner-2.jpg')",
        'hero-bg-2-mobile': "url('/src/assets/images/peculiar-banner-2-mobile.jpg')",
        'contact-us-bg': "url('/src/assets/images/contact-us-cocktail.jpg')",
        'contact-us-bg-mobile': "url('/src/assets/images/contact-us-cocktail-mobile.jpg')",
        'about-hero-1': "url('https://res.cloudinary.com/dpp5z9ik2/image/upload/v1690588548/pcfandmore/1_wl747v.jpg')",
        'about-hero-1-mobile': "url('https://res.cloudinary.com/dpp5z9ik2/image/upload/v1690588548/pcfandmore/3_pmmaba.jpg')",
        'about-hero-2': "url('https://res.cloudinary.com/dpp5z9ik2/image/upload/v1690588549/pcfandmore/2_tqcp79.jpg')",
        'about-hero-2-mobile': "url('https://res.cloudinary.com/dpp5z9ik2/image/upload/v1690588548/pcfandmore/4_erbnfi.jpg')",
      }
    },
  },
  plugins: [],
}