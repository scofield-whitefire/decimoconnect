<template>
  <div>
    <template  v-if='$nuxt.isOnline'>
      <div id="dia-preloader"></div>
      <Header />
      <div data-elementor-type="wp-page" data-elementor-id="3876" class="elementor elementor-3876">
        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-b25e62d elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default false"
          data-id="b25e62d"
          data-element_type="section"
          id="home"
          data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}"
        >
          <div class="elementor-container elementor-column-gap-no">
            <div
              class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7e3ea3e"
              data-id="7e3ea3e"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-79fb6b0 elementor-widget elementor-widget-crypto_banner"
                  data-id="79fb6b0"
                  data-element_type="widget"
                  data-widget_type="crypto_banner.default"
                >
                  <div class="elementor-widget-container">
                    <section
                      id="cripto-banner"
                      class="cripto-banner-section position-relative"
                      :style="{backgroundImage: `url(${require('~/assets/uploads/sites/59/2022/03/bn-bg.png')})`}"
                    >
                      <span class="cr-banner-shape1 position-absolute">
                        <img src="~/assets/uploads/sites/59/2022/03/s-sh1.png" alt />
                      </span>
                      <span class="cr-banner-shape2 position-absolute">
                        <img src="~/assets/uploads/sites/59/2022/03/s-sh2.png" alt />
                      </span>
                      <span class="cr-banner-shape3 position-absolute">
                        <img src="~/assets/uploads/sites/59/2022/03/bit1-1.png" alt />
                      </span>
                      <span class="cr-banner-shape4 position-absolute">
                        <img src="~/assets/uploads/sites/59/2022/03/Frame.png" alt />
                      </span>
                      <span class="cr-banner-shape5 position-absolute">
                        <img src="~/assets/uploads/sites/59/2022/03/bit3.png" alt />
                      </span>
                      <span class="cr-banner-shape6 position-absolute">
                        <img src="~/assets/uploads/sites/59/2022/03/st9.png" alt />
                      </span>
                      <div class="container">
                        <div class="cripto-banner-text cr-headline pera-content">
                          <h1
                            class="wow fadeFromUp"
                            data-wow-delay="300ms"
                            data-wow-duration="1500ms"
                          >
                            Trusted &amp; Secure
                            <span>Wallet Sync</span>
                          </h1>
                          <p
                            class="wow fadeFromUp"
                            data-wow-delay="600ms"
                            data-wow-duration="1500ms"
                          >An Open Source protocol for connecting Wallets to Dapps.</p>
                          <div
                            class="banner-btn wow fadeFromUp"
                            data-wow-delay="900ms"
                            data-wow-duration="1500ms"
                          >
                            <div class="cr-banner-btn-wrapper d-flex align-items-center">
                              <div class="cr-banner-btn">
                                <NLink
                                  class="d-flex justify-content-center align-items-center"
                                  to="/wallet"
                                >Connect now</NLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-e7d55d9 elementor-section-full_width elementor-section-height-default elementor-section-height-default false"
          data-id="e7d55d9"
          data-element_type="section"
          data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"
        >
          <div class="elementor-container elementor-column-gap-no">
            <div
              class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-aedbfaa"
              data-id="aedbfaa"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-7f74847 elementor-widget elementor-widget-crypto_partner"
                  data-id="7f74847"
                  data-element_type="widget"
                  data-widget_type="crypto_partner.default"
                >
                  <div class="elementor-widget-container">
                    <div id="cr-partner" class="cr-partner-section">
                      <div class="container crypto-container-1200">
                        <div class="cr-partner-content">
                          <div class="cr-partner-slide owl-carousel">
                            <div class="cr-parner-img">
                              <a href="#">
                                <img src="~/assets/uploads/sites/59/2022/03/p1.png" alt />
                              </a>
                            </div>
                            <div class="cr-parner-img">
                              <a href="#">
                                <img src="~/assets/uploads/sites/59/2022/03/p2.png" alt />
                              </a>
                            </div>
                            <div class="cr-parner-img">
                              <a href="#">
                                <img src="~/assets/uploads/sites/59/2022/03/p3.png" alt />
                              </a>
                            </div>
                            <div class="cr-parner-img">
                              <a href="#">
                                <img src="~/assets/uploads/sites/59/2022/03/p4.png" alt />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-b91739b elementor-section-full_width elementor-section-height-default elementor-section-height-default false"
          data-id="b91739b"
          data-element_type="section"
          id="Features"
          data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"
        >
          <div class="elementor-container elementor-column-gap-no">
            <div
              class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-607e651"
              data-id="607e651"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-13524bc elementor-widget elementor-widget-crypto_feature"
                  data-id="13524bc"
                  data-element_type="widget"
                  data-widget_type="crypto_feature.default"
                >
                  <div class="elementor-widget-container">
                    <div id="cr-feature" class="cr-feature-section position-relative">
                      <span class="cr-shape1 position-absolute">
                        <img src="~/assets/uploads/sites/59/2022/03/sh1.png" alt />
                      </span>
                      <span class="cr-shape2 position-absolute">
                        <img src="~/assets/uploads/sites/59/2022/03/sh6.png" alt />
                      </span>
                      <span class="cr-shape3 position-absolute">
                        <img src="~/assets/uploads/sites/59/2022/03/st2.png" alt />
                      </span>
                      <span class="cr-shape4 position-absolute">
                        <img src="~/assets/uploads/sites/59/2022/03/st10.png" alt />
                      </span>
                      <div class="container crypto-container-1200">
                        <div class="cr-feature-content">
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="cr-feature-item-wrapper">
                                <div class="row">
                                  <div
                                    class="col-md-6 wow fadeFromUp"
                                    data-wow-delay="0ms"
                                    data-wow-duration="1500ms"
                                  >
                                    <div class="cr-feature-item-innerbox">
                                      <div class="thx-inner-item">
                                        <div
                                          class="thx-inner-icon d-flex align-items-center justify-content-center"
                                        >
                                          <img src="~/assets/uploads/sites/59/2022/03/ic1.png" alt />
                                        </div>
                                        <div class="thx-inner-text cr-headline pera-content">
                                          <h3>QR Codes & Deep Links</h3>
                                          <p>The connection is initiated by one peer displaying a QR Code or deep link with a standard Decimo Wallet Connect URI and is established when the counter-party approves this connection request.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    class="col-md-6 wow fadeFromUp"
                                    data-wow-delay="0ms"
                                    data-wow-duration="1500ms"
                                  >
                                    <div class="cr-feature-item-innerbox">
                                      <div class="thx-inner-item">
                                        <div
                                          class="thx-inner-icon d-flex align-items-center justify-content-center"
                                        >
                                          <img src="~/assets/uploads/sites/59/2022/03/ic2.png" alt />
                                        </div>
                                        <div class="thx-inner-text cr-headline pera-content">
                                          <h3>Secure Encryption</h3>
                                          <p>The protocol establishes a remote connection between two apps and/or devices. These payloads are symmetrically encrypted through a shared key between the two peers.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    class="col-md-6 wow fadeFromUp"
                                    data-wow-delay="0ms"
                                    data-wow-duration="1500ms"
                                  >
                                    <div class="cr-feature-item-innerbox">
                                      <div class="thx-inner-item">
                                        <div
                                          class="thx-inner-icon d-flex align-items-center justify-content-center"
                                        >
                                          <img src="~/assets/uploads/sites/59/2022/03/ic3.png" alt />
                                        </div>
                                        <div class="thx-inner-text cr-headline pera-content">
                                          <h3>Protocol</h3>
                                          <p>Decimo Wallet Connect is not an app, but an open protocol to communicate securely between Wallets and Dapps (Web3 Apps).</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    class="col-md-6 wow fadeFromUp"
                                    data-wow-delay="0ms"
                                    data-wow-duration="1500ms"
                                  >
                                    <div class="cr-feature-item-innerbox">
                                      <div class="thx-inner-item">
                                        <div
                                          class="thx-inner-icon d-flex align-items-center justify-content-center"
                                        >
                                          <img src="~/assets/uploads/sites/59/2022/03/ic4.png" alt />
                                        </div>
                                        <div class="thx-inner-text cr-headline pera-content">
                                          <h3>Multi Chain</h3>
                                          <p>Connect to a wallet with one or more chains simultaneously and send transactions to different chains at the same time. No more chain switching.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-lg-6 wow fadeFromRight"
                              data-wow-delay="300ms"
                              data-wow-duration="1500ms"
                            >
                              <div class="cr-feature-text-wrapper cr-headline pera-content">
                                <div class="cr-section-title cr-headline">
                                  <span>How to use</span>
                                  <h2>Connect in three simple steps</h2>
                                </div>
                                <div class="cr-feature-text-area">
                                  <p>
                                    Select your chain from the list of supported chains
                                    <br />
                                    <br />Choose your Dapp from the list of supported Dapps
                                    <br />
                                    <br />Link your wallet to the Decimo Wallet Connect Dapps
                                  </p>
                                  <div class="cr-btn">
                                    <NLink
                                      class="d-flex justify-content-center align-items-center"
                                      to="/wallet"
                                    >Connect now</NLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-f313781 elementor-section-full_width elementor-section-height-default elementor-section-height-default false"
          data-id="f313781"
          data-element_type="section"
          id="Live-Price"
          data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"
        >
          <div class="elementor-container elementor-column-gap-no">
            <div
              class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0cb4be0"
              data-id="0cb4be0"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-dfbdb59 elementor-widget elementor-widget-crypto_live_price"
                  data-id="dfbdb59"
                  data-element_type="widget"
                  data-widget_type="crypto_live_price.default"
                >
                  <div class="elementor-widget-container">
                    <div id="cr-live-market" class="cr-live-market-section position-relative">
                      <span class="cr-shape1 position-absolute">
                        <img src="~/assets/uploads/sites/59/2022/03/sh4.png" alt />
                      </span>
                      <span class="cr-shape2 position-absolute">
                        <img src="~/assets/uploads/sites/59/2022/03/sh2-1.png" alt />
                      </span>
                      <span class="cr-shape3 position-absolute">
                        <img src="~/assets/uploads/sites/59/2022/03/st2.png" alt />
                      </span>
                      <div class="container crypto-container-1200">
                        <div
                          class="cr-section-title cr-headline text-center wow fadeFromUp"
                          data-wow-delay="0ms"
                          data-wow-duration="1500ms"
                        >
                          <span>Know your market</span>
                          <h2>Crypto Live Market Price</h2>
                          <p>
                            When someone creates a template and asks for feedback on it, they
                            don&#039;t want the people reviewing it to get distracted.
                          </p>
                        </div>
                        <template v-if="Currency.length">
                          <div class="cr-live-market-content position-relative">
                            <span class="cr-shape4 position-absolute">
                              <img src="~/assets/uploads/sites/59/2022/03/st2.png" alt />
                            </span>
                            <div class="row justify-content-center">
                              <div
                                v-for="(item, i) in filterCurrency"
                                :key="i"
                                class="col-lg-4 col-md-6 wow fadeFromUp"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                              >
                                <div
                                  class="cr-live-market-innerbox-item position-relative cr-headline pera-content"
                                >
                                  <div class="thx-inner-item">
                                    <div class="thx-inner-icon-ttitle d-flex align-items-center">
                                      <div
                                        class="thx-inner-icon d-flex align-items-center justify-content-center"
                                      >
                                        <img
                                          :src="require(`~/assets/icons/${item.symbol}.webp`)"
                                          :alt="item.name+' logo'"
                                        />
                                      </div>
                                      <div class="thx-inner-title">
                                        <h3 :id="item.symbol+'name'">{{item.name}}</h3>
                                      </div>
                                    </div>
                                    <div class="thx-inner-content d-flex position-relative">
                                      <div class="thx-live-item position-relative">
                                        <div class="lm-title">
                                          <select>
                                            <option @click="getFiat(item.symbol, 'usd')">USD</option>
                                            <option @click="getFiat(item.symbol, 'gbp')">GBP</option>
                                            <option @click="getFiat(item.symbol, 'eur')">EUR</option>
                                            <option @click="getFiat(item.symbol, 'cad')">CAD</option>
                                            <option @click="getFiat(item.symbol, 'jpy')">JPY</option>
                                            <option @click="getFiat(item.symbol, 'chf')">CHF</option>
                                            <option @click="getFiat(item.symbol, 'aud')">AUD</option>
                                            <option @click="getFiat(item.symbol, 'zar')">ZAR</option>
                                          </select>
                                        </div>
                                        <div
                                          class="lm-value"
                                          :id="item.symbol+'price'"
                                        >{{item.price}}</div>
                                      </div>
                                      <div
                                        class="thx-live-item position-relative"
                                        :class="[item.onehrc ? `price-up` : `price-down`]"
                                      >
                                        <div class="lm-title">1hr (%)</div>
                                        <div class="lm-value">
                                          <span :id="item.symbol+'onehr'">{{item.onehr}}</span>
                                        </div>
                                      </div>
                                      <div
                                        class="thx-live-item position-relative"
                                        :class="[item.twhrc ? `price-up` : `price-down`]"
                                      >
                                        <div class="lm-title">24hr (%)</div>
                                        <div class="lm-value">
                                          <span :id="item.symbol+'twhr'">{{item.twhr}}</span>
                                        </div>
                                      </div>
                                      <div
                                        class="thx-live-item position-relative"
                                        :class="[item.capc ? `price-up` : `price-down`]"
                                      >
                                        <div class="lm-title">Marketcap</div>
                                        <div class="lm-value">
                                          <span :id="item.symbol+'cap'">{{item.cap}}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              v-show="End"
                              class="cr-btn d-flex justify-content-center wow fadeFromUp"
                              data-wow-delay="500ms"
                              data-wow-duration="1500ms"
                            >
                              <a
                                @click.prevent="filter(f)"
                                class="d-flex justify-content-center align-items-center"
                                href="#"
                              >More Currency</a>
                            </div>
                          </div>
                        </template>
                        <template v-else>
                          <div
                            class="cr-section-title cr-headline text-center wow fadeFromUp"
                            data-wow-delay="0ms"
                            data-wow-duration="1500ms"
                          >
                            <h2>Unable to load market</h2>
                            <p>Refresh page to reload.</p>
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-5509f7b elementor-section-full_width elementor-section-height-default elementor-section-height-default false"
          data-id="5509f7b"
          data-element_type="section"
          data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"
        >
          <div class="elementor-container elementor-column-gap-no">
            <div
              class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f131586"
              data-id="f131586"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-952f5ec elementor-widget elementor-widget-crypto_why_choose"
                  data-id="952f5ec"
                  data-element_type="widget"
                  data-widget_type="crypto_why_choose.default"
                >
                  <div class="elementor-widget-container">
                    <div id="cr-why-choose" class="cr-why-choose-section position-relative">
                      <span class="cr-shape1 position-absolute">
                        <img src="~/assets/uploads/sites/59/2022/03/sh1.png" alt />
                      </span>
                      <span class="cr-shape2 position-absolute">
                        <img src="~/assets/uploads/sites/59/2022/03/sh6.png" alt />
                      </span>
                      <div class="container crypto-container-1200">
                        <div class="cr-why-choose-content">
                          <div class="row">
                            <div class="col-lg-5">
                              <div class="cr-why-choose-text-area cr-headline pera-content">
                                <div
                                  class="cr-section-title cr-headline wow fadeFromUp"
                                  data-wow-delay="0ms"
                                  data-wow-duration="1500ms"
                                >
                                  <span>Why Choose Us</span>
                                  <h2>We’ve Built A Platform that connects your Wallet to a secure Dapp</h2>
                                  <p>The main reason for this is Explicitly require wallets to meet compatibility with all signing methods that your dapp requires. .</p>
                                </div>
                                <div class="cr-why-choose-item-wrapper">
                                  <div
                                    class="cr-why-choose-item cr-headline pera-content wow fadeFromUp"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1500ms"
                                  >
                                    <div class="thx-inner-item d-flex align-items-center">
                                      <div
                                        class="thx-inner-icon d-flex align-items-center justify-content-center"
                                      >
                                        <img src="~/assets/uploads/sites/59/2022/03/ic12.png" alt />
                                      </div>
                                      <div class="thx-inner-text">
                                        <h3>Multi Session</h3>
                                        <p>Manage as many sessions as needed. A flexible API is provided to build the desired UX.</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    class="cr-why-choose-item cr-headline pera-content wow fadeFromUp"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1500ms"
                                  >
                                    <div class="thx-inner-item d-flex align-items-center">
                                      <div
                                        class="thx-inner-icon d-flex align-items-center justify-content-center"
                                      >
                                        <img src="~/assets/uploads/sites/59/2022/03/ic11.png" alt />
                                      </div>
                                      <div class="thx-inner-text">
                                        <h3>Chain Agnostic</h3>
                                        <p>Interoperate with any blockchain. Support new blockchains and rollups out-of-the-box.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-lg-7 wow fadeFromRight"
                              data-wow-delay="200ms"
                              data-wow-duration="1500ms"
                            >
                              <div class="cr-why-choose-img">
                                <img src="~/assets/uploads/sites/59/2022/03/wc1.png" alt />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-02b0e8d elementor-section-full_width elementor-section-height-default elementor-section-height-default false"
          data-id="02b0e8d"
          data-element_type="section"
          data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"
        >
          <div class="elementor-container elementor-column-gap-no">
            <div
              class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d064ec5"
              data-id="d064ec5"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-248c6e1 elementor-widget elementor-widget-crypto_register"
                  data-id="248c6e1"
                  data-element_type="widget"
                  data-widget_type="crypto_register.default"
                >
                  <div class="elementor-widget-container">
                    <div
                      id="cr-register"
                      class="cr-register-section position-relative"
                      :style="{backgroundImage: `url(${require('~/assets/uploads/sites/59/2022/03/rg-bg.png')})`}"
                    >
                      <!-- <div class="cr-register-img position-absolute">
                                    <img src="~/assets/uploads/sites/59/2022/03/rg.png" alt="">
                      </div>-->
                      <div class="container crypto-container-1200">
                        <div class="cr-register-content text-center">
                          <div class="cr-section-title text-center cr-headline">
                            <h2>Connect to a Dapp today</h2>
                            <!-- <p>If you use this site regularly and would like to help keep the site
                            on the Internet, please consider donating a small.</p>-->
                          </div>
                          <div class="cr-btn d-flex justify-content-center">
                            <a
                              class="d-flex justify-content-center align-items-center"
                              href="#"
                            >Connect now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </template>
    <template v-else-if='$nuxt.isOffline'>

    <div id="dia-preloader"></div>
      <Header />
      <div data-elementor-type="wp-page" data-elementor-id="3876" class="elementor elementor-3876">
      <p>Oops.... You are Offline</p>
      <Footer />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      f: 6,
      End: !0,
      Currency: [],
      filterCurrency: [],
      cur: [
        "btc",
        "eth",
        "bch",
        "ltc",
        "xrp",
        "bnb",
        "usdt",
        "usdc",
        "sol",
        "ada",
        "busd",
        "avax",
        "doge",
        "ust",
        "ftt",
        "cro",
        "wbtc",
        "trx",
        "shib",
        "gmt",
        "matic",
        "ape",
        "xlm",
        "dai"
      ]
    };
  },
  name: "IndexPage",
  async asyncData({ $axios }) {
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    const formatterx = new Intl.NumberFormat("en-US", {
      compactDisplay: "short",
      notation: "compact",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    const cur = [
      "btc",
      "eth",
      "bch",
      "ltc",
      "xrp",
      "bnb",
      "usdt",
      "usdc",
      "sol",
      "ada",
      "busd",
      "avax",
      "doge",
      "ust",
      "ftt",
      "cro",
      "wbtc",
      "trx",
      "shib",
      "gmt",
      "matic",
      "ape",
      "xlm",
      "dai"
    ];
    let Currency = [];
    let n = 0;
    let res;
    for (let i = 0; i <= 69; i++) {
      if (i % 3 == 0) {
        try {
          res = await $axios.$get(
            `https://data.messari.io/api/v1/assets/${cur[n]}/metrics`
          );
        } catch (e) {
          res = {
            status: {
              elapsed: null
            }
          };
          console.log(e);
        }
        if (typeof res.status.elapsed == "number") {
          const ohr = res.data.market_data.percent_change_usd_last_1_hour;
          const thr = res.data.market_data.percent_change_usd_last_24_hours;
          const capp = res.data.marketcap.volume_turnover_last_24_hours_percent;
          const a = ohr < 0;
          const b = thr < 0;
          const c = capp < 0;
          const data = {
            name: res.data.name,
            symbol: res.data.symbol.toLowerCase(),
            price: formatter.format(res.data.market_data.price_usd),
            onehr: formatter.format(ohr),
            twhr: formatter.format(thr),
            onehrc: a,
            twhrc: b,
            cap: formatterx.format(res.data.marketcap.current_marketcap_usd),
            capc: c
          };
          Currency.push(data);
          n++;
        }
      }
    }
    return { Currency };
  },
  mounted() {
    this.filter();
  },
  methods: {
    filter(n = 6) {
      this.filterCurrency = this.Currency.slice(0, n);
      this.f += 6;
      this.f >= 23 ? (this.End = !1) : null;
    },
    async getFiat(x, y) {
      const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      const formatterx = new Intl.NumberFormat("en-US", {
        compactDisplay: "short",
        notation: "compact",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      const res = await this.$axios.$get(
        `https://safewayfx.com/endpoint/v1/decimo/currency?class=${x}&fiat=${y}`
      );
      document.getElementById(x + "price").innerHTML = formatter.format(
        res.price
      );
      document.getElementById(x + "onehr").innerHTML = formatter.format(
        res.onehr
      );
      document.getElementById(x + "twhr").innerHTML = formatter.format(
        res.twhr
      );
      document.getElementById(x + "cap").innerHTML = formatterx.format(res.cap);
    }
  }
};
</script>
