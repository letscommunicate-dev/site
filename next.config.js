/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-NZ', 'pt-BR'],
    defaultLocale: 'en-NZ',
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
}

module.exports = nextConfig
