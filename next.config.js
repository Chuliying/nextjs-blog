/** @type {import('next').NextConfig} */
const nextConfig = {
    "output": "export",
    basePath: '/nextjs-blog',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/nextjs-blog',
                basePath: false,
                permanent: false
            }
        ]
    }
}

module.exports = nextConfig
