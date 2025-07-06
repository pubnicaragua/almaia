/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  // output: 'export',
  // distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true,
=======
  output: 'export',      // ⬅️ DESCOMENTA
  // distDir: 'out',     // opcional, no lo necesitas si usas output: 'export'
  trailingSlash: true,   // mantiene / al final → carpetas con index.html
  images: {
    unoptimized: true,   // desactiva Image Optimization server-side
>>>>>>> f5ebc5e (Updates Chat & Carrousel)
  },
};

module.exports = nextConfig;
<<<<<<< HEAD
=======

>>>>>>> f5ebc5e (Updates Chat & Carrousel)
