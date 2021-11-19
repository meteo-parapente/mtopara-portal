window.addEventListener('error', document.write)

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
    <div class="choice">
      <input type="radio" name="product" value="contributor" id="product_contributor" v-model="product">
      <label for="product_contributor" class="mp-inline">
        <strong><big>{{l.product_contributor_title}}</big></strong><br>
        <span v-html="l.product_contributor_description"></span>
      </label>
      
      <input type="radio" name="product" value="supporter" id="product_supporter" v-model="product">
      <label for="product_supporter" class="mp-inline">
        <strong><big>{{l.product_supporter_title}}</big></strong><br>
        <span v-html="l.product_supporter_description"></span>
      </label>
    </div>

    <p><small class="faded">{{ productSmallText }}</small></p>

    <h2>{{ l.header_coordinates }}</h2>

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

    <h2 id="paymentMethod">{{ l.payment_method }}</h2>

    <p v-if="refused"><span class="error">{{ l.payment_declined }}</span></p>

    <!--<div class="row">
      <div class="field">
        <select v-model="paymentMethod">
          <option v-for="method in paymentMethods" :value=" method[0]">
            {{ method[1] }}
          </option>
        </select>
      </div>  
    </div>-->

    <div class="choice">

      <!--<div>
        <input type="radio" name="payment_method" value="card" id="method_card" v-model="paymentMethod">
        <label for="method_card">
          <strong><big>{{ l.payment_card }} 
    💳</big></strong><br>
          <small>Visa, Mastercard, Maestro, Electron...</small>
        </label>
      </div>-->

      <div v-for="method in paymentMethods">
        <input type="radio" name="payment_method" :value=" method[0]" :id="'method_'+method[0]" v-model="paymentMethod">
        <label :for="'method_'+method[0]" class="small">
          <strong><big>{{ method[1] }}</big></strong>
        </label>
      </div>
      
    </div>
    
    <div class="submit">
      <p v-if="loading"><img src="/img/load.gif" class="loading" alt="loading..."/></p>
      <p v-else>
        <input type="submit" class="md-typeset md-button md-button--primary" :class="{error: formErrorDisplay }" :value="formErrorDisplay ? formErrorDisplay : l.payment_proceed" @blur="formErrorDisplay = false"><br>
        <span class="error" v-if="requestError">{{ l.error_request }}</span>
      </p>
    </div>
    
    <p><small class="faded" v-html="l.terms_approval"></small></p>
    
    <h2>{{ l.need_help }}</h2>
    <p v-html="l.email_us"></p>
  </form>
  `,
  data: () => ({      
    l: mp_form_locale,
    ready: false,
    product: getParameterByName('product') == 'supporter' ? 'supporter' : 'contributor',
    paymentMethod: 'card',
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
    mollie: false,
    refused: false,
    country: (getParameterByName('country') || window.mp_country || mp_form_locale.default_country).toUpperCase() 
  }),
  computed: {
    price: function() {
      return this.product == 'contributor' ? 36 : 60
    },
    productSmallText: function() {
      return this.l.product_small_text.replace('###', this.price)
    },
    formError: function() {
      if (this.emailError) {
        return this.l.error_email
      } else if (this.phoneError) {
        return this.l.error_phone
      } else {
        return false
      }
    },
    paymentMethods: function() {
      const methods = {
        // 'card': [this.l.payment_card + ' 💳', ['*']],
        'card': [this.l.payment_card, ['*']],
        'ideal': ['iDeal', ['NL']],
        'bancontact': ['Bancontact', ['BE']],
        'giropay': ['Giropay', ['DE']],
        'eps': ['EPS', ['AT']],
        'paypal': ['PayPal', ['*']],
        'applepay': ['Apple Pay', ['*']],
        'sofort': ['SOFORT', ['DE', 'AT', 'NL', 'CH', 'IT', 'ES', 'BE', 'PL']],
        'belfius': ['Belfius', ['BE']],
        'kbc': ['KBC', ['BE']],
        'przelewy24': ['Przelewy24', ['PL']],
        'cheque': ['Chèque', ['FR']],
        'banktransfer': [this.l.payment_sepa, ['*']]
      };
      let filtered = [];
      for (let method in methods) {
        if (method == 'applepay' && !(window.ApplePaySession && window.ApplePaySession.canMakePayments())) continue;
        for (let country of methods[method][1]) {
          if (country === '*' || country === this.country) {
            filtered.push([method, methods[method][0]])
            break
          }
        }
      }
      const current = methods[this.paymentMethod][1]
      if (!current.includes(this.country) && !current.includes('*')) {
        this.paymentMethod = 'card'
      }
      return filtered
    }
  },
  mounted: function () {
    if (getParameterByName('refused')) {
      this.refused = true
      this.$nextTick(() => location.hash = 'paymentMethod')
    }
    this.mollie = getParameterByName('mollie') || this.refused // || (Math.random() < 0.5)
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
    submit: function() {
      this.requestError = false
      this.validatePhone()
      this.validateEmail()
      this.formErrorDisplay = this.formError
      if (this.formError) return
      this.loading = true
      this.prepare()
    },
    prepare: function() {
      const payload = {
        locale: this.l.locale,
        phone: this.phone,
        email: this.email,
        product: this.product,
        // paymentMethod: ((this.mollie || this.country == 'CH') && this.paymentMethod == 'card') ? 'card-mollie' : this.paymentMethod,
        paymentMethod: (this.mollie && this.paymentMethod == 'card') ? 'card-mollie' : this.paymentMethod,
        referrer: document.referrer
      }
      //console.log(payload)
      this.$http.post('prepare', payload)
        .then(response => {
          if (response.body.vads_page_action) {
            this.post('https://clicandpay.groupecdn.fr/vads-payment/', response.body)
          } else if (response.body.post) {
            this.post(response.body.post, response.body.data)
          } else if (response.body.redirect) {
            document.location = response.body.redirect
          } else {
            throw new Error('unexpected answer from server')
          }
        })
        .catch(e => {
          console.error(e)
          this.requestError = true
          this.loading = false
        })
    },
    post: (endpoint, fields) => {
      const form = document.createElement('form')
      form.action = endpoint
      form.method = 'post'
      for (let key of Object.keys(fields)) {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = key
        input.value = fields[key]
        form.appendChild(input)
      }
      document.body.append(form)
      form.submit()
    }
  }
})