/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Important for static export on Vercel
    trailingSlash: true, // Optional, but helps avoid 404 issues
  };
  
  export default nextConfig;
  