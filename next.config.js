/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    "output": "export",
    basePath: isProd ? '/nextjs-blog' : '',
    "images": {
      "unoptimized": true
    }
}

module.exports = nextConfig
