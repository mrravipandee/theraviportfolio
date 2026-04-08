/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/blog",
                destination: "https://imravidev.vercel.app/blog",
            },
            {
                source: "/blog/:path*",
                destination: "https://imravidev.vercel.app/blog/:path*",
            },
        ];
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
