mpdb.hookVue(Vue)

Vue.use(window['vue-tel-input'])

const getParameterByName = (name, url = window.location.href) => {
  name = name.replace(/[\[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

new Vue({
  el: '#app',
  template: `
  <form class="mp-form" @submit.prevent="submit" :class="{ ready }">

    <div v-if="thankYou">
      <h1>{{ l.thank_you }}</h1>
      <p>{{ l.access_activated }}</p>
      <div v-if="password">
        <hr>
        <p><strong>{{ l.here_is_code }}</strong></p>
        <p>
          <strong>
            {{ l.login }}: {{ email }}<br>
            {{ l.password }}: {{ password }}
          </strong>
        </p>
        <hr>
      </div>
      <p><strong v-html="l.enjoy"></strong></p>
      <p v-html="l.might_login"></p>
      <iframe class="hidden" :src="authFrameUrl" @load="iframeLoaded"></iframe>
      <img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." v-if="!thankYouReady"/>
    </div>
    
    <div v-else>
      
      <h1>{{ l.activate }}</h1>
      
      <p>{{ l.soon_enjoy }}</p>
      <p>{{ l.fill_the_form }}</p>
    
      <div class="row">
        <div class="field" :class="{error: couponError}">
          <label>{{ l.activation_code }}</label>
          <input type="tel" class="input" v-model="coupon" @focus="couponError = false" @blur="validateCoupon"><br>
        </div>
      </div>


      <div class="row">
        <div class="field" :class="{error: emailError}">
          <label>{{ l.email }}</label>
          <input type="email" class="input" v-model="email" @focus="emailError = false" @blur="validateEmail">
        </div>
      </div>

      <div class="row">
        <div class="field" :class="{error: phoneError}">
          <label>
            {{ l.mobile_phone }}
          </label>
          <vue-tel-input 
            @focus="phoneError = false"
            @blur="validatePhone"
            @input="inputPhone"
            @country-changed="countryChanged"
            v-bind:default-country="country"
            auto-default-country="false"
            v-bind:preferred-countries="['FR', 'DE', 'CH', 'ES', 'AT', 'IT', 'BE', 'NL', 'GB', 'SI', 'CZ']"
            mode="international"
            v-model="phoneTmp"
            v-bind:input-options="telInputOptions"
          >
          </vue-tel-input>
          <small class="faded">{{ l.mobile_phone_small_text }}</small>
        </div>
      </div>

      <div class="submit">
        <p v-if="loading"><img src="/img/load.gif" class="loading" alt="loading..."/></p>
        <p v-else>
          <input type="submit" class="md-typeset md-button md-button--primary" :class="{error: formErrorDisplay }" :value="formErrorDisplay ? formErrorDisplay : l.submit" @blur="formErrorDisplay = false"><br>
          <span class="error" v-if="requestError">{{ l.error_request }}</span>
        </p>
      </div>
    
      <p><small class="faded" v-html="l.terms_approval"></small></p>
    </div>
    <h2>{{ l.need_help }}</h2>
    <p v-html="l.email_us"></p>
  </form>
  `,
  data: () => ({      
    l: mp_form_locale,
    ready: false,
    thankYou: false,
    thankYouReady: false,
    coupon: getParameterByName('coupon') || '',
    couponError: false,
    email: getParameterByName('email') || '',
    emailError: false,
    phone: '',
    phoneTmp: getParameterByName('phone') || '',
    phoneError: false,
    phoneErrorTmp: false,
    formErrorDisplay: false,
    loading: false,
    requestError: false,
    telInputOptions: {
      autocomplete: 'on',
      autofocus: false,
      id: '',
      maxlength: 25,
      name: 'telephone',
      placeholder: '',
      readonly: false,
      required: false,
      tabindex: 0,
      type: 'tel',
      styleClasses: ''
    },
    country: (getParameterByName('country') || window.mp_country || mp_form_locale.default_country).toUpperCase(),
    login: null,
    password: null,
    authFrameUrl: 'https://meteo-parapente.com/auth.html'
  }),
  computed: {
    formError: function() {
      if (this.couponError) {
        return this.l.error_coupon
      } else if (this.emailError) {
        return this.l.error_email
      } else if (this.phoneError) {
        return this.l.error_phone
      } else {
        return false
      }
    }
  },
  mounted: function () {
    if (!getParameterByName('dev') && document.location.host !== '127.0.0.1:8000') {
      Vue.http.options.root = 'https://meteo-parapente.com/api/order/'
    } else {
      Vue.http.options.root = 'http://127.0.0.1:4200/order/'
      console.log('dev api')
    }
    this.ready = true
  },
  methods: {
    inputPhone: function(text, object) {
      this.phone = object.number,
      this.phoneErrorTmp = !object.valid
    },
    countryChanged: function({ iso2 }) {
      this.country = iso2
    },
    validatePhone: function() {
      this.phoneError = this.phoneErrorTmp
    },
    validateEmail: function() {
      this.emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    },
    validateCoupon: function() {
      this.couponError = !/^\s*\d{4}[-_\s]*\d{4}[-_\s]*\d{4}[-_\s]*\d{4}\s*$/.test(this.coupon);
    },
    submit: function() {
      this.requestError = false
      this.validateCoupon()
      this.validatePhone()
      this.validateEmail()
      this.formErrorDisplay = this.formError
      setTimeout(
        () => this.formErrorDisplay = false,
        2500
      )
      if (this.formError) return
      this.loading = true
      
      const payload = {
        locale: this.l.locale,
        coupon: this.coupon,
        phone: this.phone,
        email: this.email,
        referrer: document.referrer
      }
      //console.log(payload)
      this.$http.post('coupon', payload)
        .then(response => {
          const { auth, expiry, email, password } = response.body
          this.authFrameUrl = `https://meteo-parapente.com/auth.html?tk=${auth}`
          this.auth = auth
          this.email = email
          this.password = password
          this.thankYou = true
          this.loading = false
          window.scrollTo({ top: 0, behavior: 'smooth' })
        })
        .catch(e => {
          if (e.status == 404) {
            this.couponError = true
            this.formErrorDisplay = this.l.unknown_coupon
            setTimeout(
              () => this.formErrorDisplay = false,
              2500
            )
          } else if (e.status == 403) {
            this.couponError = true
            this.formErrorDisplay = this.l.invalid_coupon
            setTimeout(
              () => this.formErrorDisplay = false,
              2500
            )
          } else {
            console.error(e)
            this.requestError = true
          }
          this.loading = false
        })
    },
    iframeLoaded: function (e) {
      const win = e.target.contentWindow
      const message = JSON.stringify({ auth: this.auth })
      win.postMessage(message, 'https://meteo-parapente.com')
      this.thankYouReady = true
    }
  }
})