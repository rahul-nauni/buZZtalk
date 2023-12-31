/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        swcPlugins: [
            ["next-superjson-plugin", {}]  // sanirize JSON
        ]
    },
    images: {
        domains: [
            "res.cloudinary.com",
            "avatars.githubusercontent.com",
            "avatars.facebook.com",
            "lh3.googleusercontent.com",
        ]
    }
}

module.exports = nextConfig
