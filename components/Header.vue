<template>
  <div>
    <div data-elementor-type="wp-post" data-elementor-id="3878" class="elementor elementor-3878">
      <section
        class="elementor-section elementor-top-section elementor-element elementor-element-5a372ee8 elementor-section-stretched elementor-hidden-tablet elementor-hidden-mobile appilo-sticky elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="5a372ee8"
        data-element_type="section"
        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}"
      >
        <div class="elementor-container elementor-column-gap-no">
          <div
            class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-3e64096c"
            data-id="3e64096c"
            data-element_type="column"
          >
            <div class="elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-2094a3f3 elementor-widget elementor-widget-appilo-logo"
                data-id="2094a3f3"
                data-element_type="widget"
                data-widget_type="appilo-logo.default"
              >
                <div class="elementor-widget-container">
                  <div class="elementor-image">
                    <NLink to="/">
                      <!-- <h5 style="color: #fff;">Decimo Wallet Connect</h5> -->
                      <img width="250" height="39" src="~/assets/logo/logo.png"
                      class="attachment-full size-full" alt="logo" loading="lazy" />
                    </NLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-214916bd"
            data-id="214916bd"
            data-element_type="column"
          >
            <div class="elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-15cbf7a5 crypto-header-menu elementor-widget elementor-widget-appilo-nav-menu"
                data-id="15cbf7a5"
                data-element_type="widget"
                data-widget_type="appilo-nav-menu.default"
              >
                <div class="elementor-widget-container">
                  <div class="app-res-menu-item">
                    <nav class="app-res-main-navigation clearfix ul-li">
                      <div class="menu-multi-page-menu-container">
                        <ul id="main-nav" class="navbar-nav text-uppercase clearfix">
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                          >
                            <a @click.prevent="Model" href="#" class>Docs</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                          >
                            <NLink to="/wallet" class>Wallets</NLink>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                          >
                            <a @click.prevent="ModelA" href="/apps" class>Apps</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                          >
                            <a href="/contact" @click.prevent="ModelB" class>Contact</a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>

                  <div class="app-res-mobile_menu position-relative">
                    <div class="app-res-mobile_menu_button app-res-open_mobile_menu">
                      <i class="fas fa-bars"></i>
                    </div>
                    <div class="app-res-mobile_menu_wrap">
                      <div class="mobile_menu_overlay app-res-open_mobile_menu"></div>
                      <div class="app-res-mobile_menu_content">
                        <div class="app-res-mobile_menu_close app-res-open_mobile_menu">
                          <i class="fas fa-times"></i>
                        </div>
                        <nav class="app-res-mobile-main-navigation clearfix ul-li">
                          <div class="menu-multi-page-menu-container">
                            <ul id="m-main-nav" class="navbar-nav text-capitalize clearfix">
                              <li
                                class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                              >
                                <a @click.prevent="Model" href="#" class>Docs</a>
                              </li>
                              <li
                                class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                              >
                                <NLink to="/wallet" class>Wallets</NLink>
                              </li>
                              <li
                                class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                              >
                                <a @click.prevent="ModelA" href="/apps" class>Apps</a>
                              </li>
                              <li
                                class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                              >
                                <a href="/contact" @click.prevent="ModelB" class>Contact</a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-68f02df6"
            data-id="68f02df6"
            data-element_type="column"
          >
            <div class="elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-5d6624a elementor-align-right elementor-widget elementor-widget-button"
                data-id="5d6624a"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div class="elementor-widget-container">
                  <div class="elementor-button-wrapper">
                    <NLink
                      to="/wallet"
                      class="elementor-button-link elementor-button elementor-size-sm"
                      role="button"
                    >
                      <span class="elementor-button-content-wrapper">
                        <span class="elementor-button-text">Connect now</span>
                      </span>
                    </NLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="elementor-section elementor-top-section elementor-element elementor-element-6b96b3bf elementor-section-stretched elementor-hidden-desktop elementor-section-boxed elementor-section-height-default elementor-section-height-default false"
        data-id="6b96b3bf"
        data-element_type="section"
        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}"
      >
        <div class="elementor-container elementor-column-gap-no">
          <div
            class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-7c360e07"
            data-id="7c360e07"
            data-element_type="column"
          >
            <div class="elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-6cf3e638 elementor-widget elementor-widget-appilo-logo"
                data-id="6cf3e638"
                data-element_type="widget"
                data-widget_type="appilo-logo.default"
              >
                <div class="elementor-widget-container">
                  <div class="elementor-image">
                    <img
                      width="250" height="39" src="~/assets/logo/logo.png"
                      class="attachment-full size-full"
                      alt="logo"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5559fa41"
            data-id="5559fa41"
            data-element_type="column"
          >
            <div class="elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-6ff74e9a elementor-align-right elementor-widget elementor-widget-button"
                data-id="6ff74e9a"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div class="elementor-widget-container">
                  <div class="elementor-button-wrapper">
                    <NLink
                      to="/wallet"
                      class="elementor-button-link elementor-button elementor-size-sm"
                      role="button"
                    >
                      <span class="elementor-button-content-wrapper">
                        <span class="elementor-button-text">Connect now</span>
                      </span>
                    </NLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-53faa469"
            data-id="53faa469"
            data-element_type="column"
          >
            <div class="elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-20fb963a crypto-header-menu elementor-widget elementor-widget-appilo-nav-menu"
                data-id="20fb963a"
                data-element_type="widget"
                data-widget_type="appilo-nav-menu.default"
              >
                <div class="elementor-widget-container">
                  <div class="app-res-menu-item">
                    <nav class="app-res-main-navigation clearfix ul-li">
                      <div class="menu-multi-page-menu-container">
                        <ul id="main-nav" class="navbar-nav text-uppercase clearfix">
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                          >
                            <a @click.prevent="Model" href="#" class>Docs</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                          >
                            <NLink to="/wallet" class>Wallets</NLink>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                          >
                            <a @click.prevent="ModelA" href="/apps" class>Apps</a>
                          </li>
                          <li
                            class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                          >
                            <a href="/contact" @click.prevent="ModelB" class>Contact</a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>

                  <div class="app-res-mobile_menu position-relative">
                    <div class="app-res-mobile_menu_button app-res-open_mobile_menu">
                      <i class="fas fa-bars"></i>
                    </div>
                    <div class="app-res-mobile_menu_wrap">
                      <div class="mobile_menu_overlay app-res-open_mobile_menu"></div>
                      <div class="app-res-mobile_menu_content">
                        <div class="app-res-mobile_menu_close app-res-open_mobile_menu">
                          <i class="fas fa-times"></i>
                        </div>
                        <nav class="app-res-mobile-main-navigation clearfix ul-li">
                          <div class="menu-multi-page-menu-container">
                            <ul id="m-main-nav" class="navbar-nav text-capitalize clearfix">
                              <li
                                class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                              >
                                <a @click.prevent="Model" href="#" class>Docs</a>
                              </li>
                              <li
                                class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                              >
                                <NLink to="/wallet" class>Wallets</NLink>
                              </li>
                              <li
                                class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                              >
                                <a @click.prevent="ModelA" href="/apps" class>Apps</a>
                              </li>
                              <li
                                class="menu-item menu-item-type-custom menu-item-object-custom no-mega-menu"
                              >
                                <a href="/contact" @click.prevent="ModelB" class>Contact</a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    methods: {
        Model() {
            Swal.fire({
                icon: 'info',
                title: 'Still in Beta',
                text: 'The Docs are been tested',
                confirmButtonColor: '#02DFBF',
            })
        },
        ModelA() {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong with the link.',
                confirmButtonColor: '#02DFBF',
            })
        },
        ModelB() {
            Swal.fire({title:'info@decimoconnect.com',confirmButtonColor: '#02DFBF'})
        },

    }
};
</script>

<style lang="scss" scoped>
</style>