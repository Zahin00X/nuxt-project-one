export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
    

  head: {
    title: 'WD Blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cool web development blog' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
           { rel: 'stylesheet', href:"https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"}],
  },

  loading: { 
    color: '#45ff17',
    height: '5px',
    duration: 500000,
    failedColor: '#e8090d',
    throttle: 0
  },
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    baseUrl : process.env.BASE_URL || 'https://nuxt-blog-af5c6-default-rtdb.asia-southeast1.firebasedatabase.app' 
  },
  router: {
    extendRoutes(routes, resolve)
    {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
