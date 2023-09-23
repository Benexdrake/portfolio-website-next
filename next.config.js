/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    nextauth_url: 'https://test.de'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.pokemon.com',
      },
      {
        protocol: 'https',
        hostname: 'www.crunchyroll.com',
      },
    ],
  }
}

module.exports = nextConfig
