

// const { i18n } =require('./next-i18next.config.js')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // i18n,
  trailingSlash: true,
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'en',
    // localePath: 'public/locales'
  },
};

module.exports = nextConfig;
