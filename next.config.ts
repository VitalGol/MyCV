/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/MyCV',
  output: 'export',
  distDir: 'dist',
  images: { unoptimized: true },
};

module.exports = nextConfig;
