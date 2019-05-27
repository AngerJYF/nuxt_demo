const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js" },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/reset.css',
    '~assets/styles/border.css',
    { src: "swiper/dist/css/swiper.css" },
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/route',
    { src: '~plugins/iview', ssr: true },
    { src: '~plugins/animate', ssr: false },
    { src: '~plugins/wow', ssr: false },
    { src: '~/plugins/swiper.js', ssr: false },
    '@/plugins/element-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
