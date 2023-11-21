/** @type {import('next').NextConfig} */
const nextConfig = {
    "output": "export",
    images: {
        loader: 'custom',
        loaderFile: 'https://chuliying.github.io/nextjs-blog/loader.js',
      },
}

module.exports = nextConfig
