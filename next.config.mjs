/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // mode strict React
  swcMinify: true, // minification rapide
  images: {
    domains: ["images.unsplash.com", "khalys.ma"],
    formats: ["image/webp", "image/avif"],
  },
  i18n: {
    locales: ["fr", "ar"], // Français + Arabe
    defaultLocale: "fr",
  },
};

export default nextConfig;
