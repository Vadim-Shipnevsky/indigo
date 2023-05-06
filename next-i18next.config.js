const path = require('path')

module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ru'],
      localePath: path.resolve('./src/locales'),
      localeSubpaths: {
        ru: 'ru'
      }
    },
  }