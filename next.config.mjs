/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: '/dlehxkdtn/**',
        // https://res.cloudinary.com/dlehxkdtn/image/upload/untitled2_kaggtq.png
      },
    ],
  },
};

export default nextConfig;
