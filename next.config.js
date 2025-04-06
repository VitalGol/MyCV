/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  // basePath: "/MyCV",
  // assetPrefix: "/MyCV/",
  // images: {
  //   unoptimized: true, // нужно, если ты используешь <Image>
  // },
  // Укажи basePath, если деплоишь в подкаталог (например: /my-project)
};

module.exports = nextConfig;
