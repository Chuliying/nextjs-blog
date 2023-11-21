/** @type {import('next').NextConfig} */
const nextConfig = {
    "output": "export",
    async rewrites() {
        return [
          {
            source: '/',
            destination: '/nextjs-blog/',
          },
        ]
      },
}

module.exports = nextConfig
