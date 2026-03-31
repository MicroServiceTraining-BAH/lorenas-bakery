/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow Next.js <Image /> to serve files from /public/uploads
    localPatterns: [
      { pathname: '/uploads/**' },
      { pathname: '/bakery-**' },
    ],
  },
};

export default nextConfig;
