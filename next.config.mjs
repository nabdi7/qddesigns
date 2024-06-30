/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    // domains: ['localhost'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
