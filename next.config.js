/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // нужно, если ты используешь <Image>
  },
  // Укажи basePath, если деплоишь в подкаталог (например: /my-project)
  basePath: "/MyCV",
  assetPrefix: "/MyCV/",
};

module.exports = nextConfig;
