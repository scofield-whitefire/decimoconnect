import webpack from 'webpack'


export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    // ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Home',
    titleTemplate: '%s || Decimo Wallet Connect',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
        class: [
          'page-template',
          'page-template-elementor_header_footer', 
          'page',
          'page-id-3876',
          'wp-embed-responsive',
          'appilo-main',
          'elementor-default',
          'elementor-template-full-width',
          'elementor-kit-3',
          'elementor-page',
          'elementor-page-3876',
        ],
        id:"",
        'data-spy':"scroll",
        'data-target':"nav",
        'data-offset':"50"

      },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'fav/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins%3A300%2C400%2C500%2C600%2C700%2C900%7CRoboto%3A100%2C300%2C400%2C500%2C700%2C900&amp;display=0&amp;ver=5.9.3'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Arimo%7CMontserrat%3A200%2C400%2C700%2C800&amp;ver=5.9.3&amp;display=0'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display%3Awght%40400%3B600%3B700&amp;ver=5.9.3&amp;display=0'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display%3Aital%401&amp;display=0&amp;ver=5.9.3'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dosis%3Awght%40400%3B600%3B700%3B800&amp;display=0&amp;ver=5.9.3'},
      { rel: 'stylesheet', href: 'asset/css/dist/block-library/style.min7404.css '},
      { rel: 'stylesheet', href: 'asset/wallet.css '},
      { rel: 'stylesheet', href: 'asset/form.css '},
      { rel: 'stylesheet', href: 'asset/plugins/contact-form-7/includes/css/styles5406.css '},
      { rel: 'stylesheet', href: 'asset/plugins/revslider/public/assets/css/rs6a8d6.css '},
      { rel: 'stylesheet', href: 'asset/themes/appilo/style7404.css'},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/bootstrap1b46.css'},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/plugins/appilo-icons-2/style1b46.css '},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/plugins/flaticon1/flaticon1b46.css '},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/plugins/appilo-icons-3/css/flaticon1b46.css '},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/plugins/appilo-icons-4/css/flaticon1b46.css '},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/plugins/appilo-icons-3/css/elegenticon1b46.css '},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/plugins/fontawesome-5/css/fontawesome-all.min1b46.css'},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/appilo-library1b46.css '},
      { rel: 'stylesheet', href: 'asset/themes/appilo/woocommerce/woocommerce1b46.css '},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/appilo1b46.css'},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/appilo-theme-style1b46.css '},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/saas-classic1b46.css'},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/app-showcase1b46.css'},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/digital-agency1b46.css '},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/gym-style1b46.css'},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/apl2-style1b46.css'},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/prysm1b46.css'},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/itsource-style1b46.css '},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/digital-marketing1b46.css '},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/business-expert1b46.css '},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/appilo-applanding1b46.css '},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/seo-agency1b46.css'},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/appilo-resume1b46.css'},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/demo-page1b46.css'},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/crypto1b46.css'},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/nft-landing1b46.css'},
      { rel: 'stylesheet', href: 'asset/themes/appilo/css/app3-landing1b46.css'},
      { rel: 'stylesheet', href: 'asset/plugins/appilo-core/inc/footer-widgets/recent-posts-thumb/public42a0.css'},
      { rel: 'stylesheet', href: 'asset/plugins/elementor/assets/lib/eicons/css/elementor-icons.min7816.css'},
      { rel: 'stylesheet', href: 'asset/plugins/elementor/assets/css/frontend-lite.min822f.css '},
      { rel: 'stylesheet', href: 'asset/uploads/sites/59/elementor/css/post-36038.css '},
      { rel: 'stylesheet', href: 'asset/plugins/appilo-core/assets/css/elementor-editor7404.css '},
      { rel: 'stylesheet', href: 'asset/uploads/sites/59/elementor/css/global88f2.css '},
      { rel: 'stylesheet', href: 'asset/uploads/sites/59/elementor/css/post-38760765.css '},
      { rel: 'stylesheet', href: 'asset/plugins/mulitsite-nav/assets/style7404.css'},
      { rel: 'stylesheet', href: 'asset/uploads/sites/59/elementor/css/post-38780765.css '},
      { rel: 'stylesheet', href: 'asset/uploads/sites/59/elementor/css/post-3846134f.css '},
      { rel: 'stylesheet', href: 'asset/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min52d5.css'},
      { rel: 'stylesheet', href: 'asset/plugins/elementor/assets/lib/font-awesome/css/brands.min52d5.css '},
      { rel: 'stylesheet', href: 'asset/plugins/appilo-core/assets/appilo-icons-3/css/elegenticon41fe.css '},
    ],
    script: [
      {type: '', body:false, src: "asset/js/jquery/jquery.minaf6c.js"},
      {type: '', body:false, src: "asset/js/jquery/jquery-migrate.mind617.js"},
      {type: '', body:false, src: "asset/plugins/revslider/public/assets/js/rbtools.min5352.js"},
      {type: '', body:false, src: "asset/plugins/revslider/public/assets/js/rs6.mina8d6.js"},
      {type: '', body:true, src: "asset/js/dist/vendor/regenerator-runtime.min3937.js"},
      {type: '', body:true, src: "asset/js/dist/vendor/wp-polyfill.min2c7c.js"},
      // {type: '', body:true, src: "/asset/plugins/contact-form-7/includes/js/index5406.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/appilo-js-plugin1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/bootstrap.min1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/swiper.min1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/woocommerce/woocommerce1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/appilo-theme-custom.min1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/typeit1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/main1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/gym1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/app-landing-21b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/app-land-scripts1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/prysm1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/itsource1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/digital-marketing1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/business-expert1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/seo-agency1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/appilo-resume1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/demo-page1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/countdown1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/crypto1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/nft-landing1b46.js"},
      {type: '', body:true, src: "asset/themes/appilo/js/app2-landing-scripts1b46.js"},
      {type: '', body:true, src: "asset/plugins/elementor/assets/js/webpack.runtime.min822f.js"},
      {type: '', body:true, src: "asset/plugins/elementor/assets/js/frontend-modules.min822f.js"},
      {type: '', body:true, src: "asset/plugins/elementor/assets/lib/waypoints/waypoints.min05da.js"},
      {type: '', body:true, src: "asset/js/jquery/ui/core.min0028.js"},
      {type: '', body:true, src: "asset/plugins/elementor/assets/js/frontend.min822f.js"},
      {type: '', body:true, src: "asset/plugins/appilo-core/assets/js/elementor-editor271b.js"},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-sweetalert2/nuxt',
  ],
  sweetalert: {
    confirmButtonColor: '#02DFBF',
    cancelButtonColor: '#ff7674'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  loading: {
    color: '#02DFBF',
    height: '3px',
    continuous: true,
    duration: 3000
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["jquery"],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
}
