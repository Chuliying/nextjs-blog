/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    reactStrictMode: true,

    images: {
      loader: 'akamai',
      path: '',
    },
    // assetPrefix: './',
}

module.exports = nextConfig
