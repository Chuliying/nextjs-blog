/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV = 'production'
const nextConfig = {
    "output": "export",
    // basePath: isProd ? '/nextjs-blog' : '',

    images: {
      loader: 'akamai',
      path: '',
    },
    // assetPrefix: './',
}

module.exports = nextConfig
