module.exports = {
  head: {
    title: 'ec-site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader'
  ],
  styleResources: {
    sass: [
      '~/assets/style/_variable.scss',
      '~/assets/style/_reset.scss',
    ],
  },
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP']
    }
  },
  mode: 'universal',
}