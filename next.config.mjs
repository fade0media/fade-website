/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    images: {
        domains: ['images.unsplash.com', 'assets.aceternity.com', 'resourceboy.com'], // Add any additional domains if necessary
    },
};

export default nextConfig;

