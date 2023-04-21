const NextI18n = require('next-i18next').default

module.exports = new NextI18n({
    defaultLanguage: 'en',
    otherLanguages: ['ru', 'en'],
    localePath: 'public/locales'
})