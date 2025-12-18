import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // SSG - статический экспорт
  trailingSlash: true, // Для GitHub Pages
  images: {
    unoptimized: true, // Для статического экспорта
  },
  // basePath: '', // Если репо username.github.io - пустой
  // basePath: '/repo-name', // Если репо project page
};

export default nextConfig;

