/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-NZ', 'pt-BR'],
    defaultLocale: 'en-NZ',
  },
  images: {
    domains: ['images.ctfassets.net', 'localhost:3000'],
  },
}

module.exports = nextConfig
