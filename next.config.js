/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/MyCV",
  reactStrictMode: true,
  images: {
    unoptimized: true, // нужно, если ты используешь <Image>
  },
  // distDir: "out",
  // assetPrefix: "/MyCV/",
  // Укажи basePath, если деплоишь в подкаталог (например: /my-project)
};

module.exports = nextConfig;
