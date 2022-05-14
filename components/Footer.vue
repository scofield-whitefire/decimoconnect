<template>
  <div data-elementor-type="wp-post" data-elementor-id="3846" class="elementor elementor-3846">
    <section
      class="elementor-section elementor-top-section elementor-element elementor-element-3a45baf2 elementor-section-full_width elementor-section-height-default elementor-section-height-default false"
      data-id="3a45baf2"
      data-element_type="section"
      data-settings="{'background_background':'classic'}"
    >
      <div class="elementor-container elementor-column-gap-no">
        <div
          class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-52398a10"
          data-id="52398a10"
          data-element_type="column"
        >
          <div class="elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-6507e960 elementor-widget elementor-widget-crypto_footer"
              data-id="6507e960"
              data-element_type="widget"
              data-widget_type="crypto_footer.default"
            >
              <div id="cr-footer" class="cr-footer-section position-relative">
                <span class="cr-shape1 position-absolute">
                  <img src="~/assets/uploads/sites/59/2022/03/sh5.png" alt />
                </span>
                <div class="container crypto-container-1200">
                  <div class="cr-footer-content d-flex">
                    <div class="cr-footer-widget-left">
                      <div class="cr-footer-widget">
                        <div class="logo-widget d-flex align-items-center">
                          <div class="footer-logo">
                            <a href="#">
                              <img
                                src="~/assets/uploads/sites/59/2021/03/25_coming_soon_logo-1.png"
                                alt
                              />
                            </a>
                          </div>
                          <div class="logo-text"></div>
                        </div>
                      </div>
                      <div class="cr-footer-widget-area d-flex justify-content-between">
                        <div class="cr-footer-widget cr-headline pera-content ul-li-block">
                          <div class="menu-widget">
                            <h3 class="widget-title">Quick Links</h3>
                            <ul>
                              <li>
                                <a @click.prevent="ModelA" href="/pp">Privacy Policy</a>
                              </li>
                              <li>
                                <a @click.prevent="ModelA" href="/tns">Terms of Service</a>
                              </li>
                              <li>
                                <a @click.prevent="ModelA" href="/disclamier">Disclamier</a>
                              </li>
                              <li>
                                <a @click.prevent="ModelA" href="/credits">Credits</a>
                              </li>
                              <li>
                                <a @click.prevent="ModelA" href="/faq">Faq</a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div class="cr-footer-widget cr-headline pera-content ul-li-block">
                          <div class="menu-widget">
                            <h3 class="widget-title">Contact info</h3>
                            <ul>
                              <li>
                                <i class="fas fa-envelope"></i>
                                info@decimoconnect.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="cr-footer-widget-right">
                      <div class="cr-footer-widget cr-headline pera-content ul-li-block">
                        <div class="newslatter-widget">
                          <h3 class="widget-title">Newsletter</h3>
                          <p>
                            Subscribed to our newsletter, <br> Don't worry we dont spam.
                          </p>
                          <div role="form" class="wpcf7" id="wpcf7-f3849-o1" lang="en-US" dir="ltr">
                            <form>
                              <div class="crypto-newsletter-form">
                                <input v-model="email" style="color: #fff" type="email" placeholder="Email Here" />
                                <br />
                                <button @click.prevent="ModelB">
                                  <i class="far fa-paper-plane"></i>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cr-footer-copyright">
                  <div class="container">
                    <div class="cr-footer-copyright-content d-flex justify-content-between">
                      <div
                        class="cr-copyright-text"
                      >© 2022 Decimo Wallet Connect INC. All Right Reserved</div>
                      <div class="copyright-menu ul-li"></div>
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
</template>

<script>
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            email: null
        }
    },
  methods: {
    ModelA() {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong with the link.",
        confirmButtonColor: "#02DFBF"
      });
    },
    ModelB() {
            Swal.fire({
                icon: "success",
                title:'Great',
                 text: this.email+" is now subscribed",
                confirmButtonColor: '#02DFBF'
                })
        },
  }
};
</script>

<style lang="scss" scoped>
</style>