/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themoviedb.org",
        pathname: "/t/p/w600_and_h900_bestv2/**",
      }
    ]
  }
    
};

export default nextConfig;
