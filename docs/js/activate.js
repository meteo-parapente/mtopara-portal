const countries = {
  'af': '🇦🇫 Afghanistan (‫افغانستان‬‎)',
  'al': '🇦🇱 Albania (Shqipëri)',
  'dz': '🇩🇿 Algeria (‫الجزائر‬‎)',
  'as': '🇦🇸 American Samoa',
  'ad': '🇦🇩 Andorra',
  'ao': '🇦🇴 Angola',
  'ai': '🇦🇮 Anguilla',
  'ag': '🇦🇬 Antigua and Barbuda',
  'ar': '🇦🇷 Argentina',
  'am': '🇦🇲 Armenia (Հայաստան)',
  'aw': '🇦🇼 Aruba',
  'au': '🇦🇺 Australia',
  'at': '🇦🇹 Austria (Österreich)',
  'az': '🇦🇿 Azerbaijan (Azərbaycan)',
  'bs': '🇧🇸 Bahamas',
  'bh': '🇧🇭 Bahrain (‫البحرين‬‎)',
  'bd': '🇧🇩 Bangladesh (বাংলাদেশ)',
  'bb': '🇧🇧 Barbados',
  'by': '🇧🇾 Belarus (Беларусь)',
  'be': '🇧🇪 Belgium (België)',
  'bz': '🇧🇿 Belize',
  'bj': '🇧🇯 Benin (Bénin)',
  'bm': '🇧🇲 Bermuda',
  'bt': '🇧🇹 Bhutan (འབྲུག)',
  'bo': '🇧🇴 Bolivia',
  'ba': '🇧🇦 Bosnia and Herzegovina (Босна и Херцеговина)',
  'bw': '🇧🇼 Botswana',
  'br': '🇧🇷 Brazil (Brasil)',
  'io': '🇮🇴 British Indian Ocean Territory',
  'vg': '🇻🇬 British Virgin Islands',
  'bn': '🇧🇳 Brunei',
  'bg': '🇧🇬 Bulgaria (България)',
  'bf': '🇧🇫 Burkina Faso',
  'bi': '🇧🇮 Burundi (Uburundi)',
  'kh': '🇰🇭 Cambodia (កម្ពុជា)',
  'cm': '🇨🇲 Cameroon (Cameroun)',
  'ca': '🇨🇦 Canada',
  'cv': '🇨🇻Cape Verde (Kabu Verdi)',
  'bq': '🇧🇶 Caribbean Netherlands',
  'ky': '🇰🇾 Cayman Islands',
  'cf': '🇨🇫 Central African Republic (République centrafricaine)',
  'td': '🇹🇩 Chad (Tchad)',
  'cl': '🇨🇱 Chile',
  'cn': '🇨🇳 China (中国)',
  'cx': '🇨🇽 Christmas Island',
  'cc': '🇨🇨 Cocos (Keeling) Islands',
  'co': '🇨🇴 Colombia',
  'km': '🇰🇲 Comoros (‫جزر القمر‬‎)',
  'cd': '🇨🇩 Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
  'cg': '🇨🇬 Congo (Republic) (Congo-Brazzaville)',
  'ck': '🇨🇰 Cook Islands',
  'cr': '🇨🇷 Costa Rica',
  'ci': '🇨🇮 Côte d’Ivoire',
  'hr': '🇭🇷 Croatia (Hrvatska)',
  'cu': '🇨🇺 Cuba',
  'cw': '🇨🇼 Curaçao',
  'cy': '🇨🇾 Cyprus (Κύπρος)',
  'cz': '🇨🇿 Czech Republic (Česká republika)',
  'dk': '🇩🇰 Denmark (Danmark)',
  'dj': '🇩🇰 Djibouti',
  'dm': '🇩🇲 Dominica',
  'do': '🇩🇴 Dominican Republic (República Dominicana)',
  'ec': '🇪🇨 Ecuador',
  'eg': '🇪🇬 Egypt (‫مصر‬‎)',
  'sv': '🇸🇻 El Salvador',
  'gq': '🇬🇶 Equatorial Guinea (Guinea Ecuatorial)',
  'er': '🇪🇷 Eritrea',
  'ee': '🇪🇪 Estonia (Eesti)',
  'et': '🇪🇹 Ethiopia',
  'fk': '🇫🇰 Falkland Islands (Islas Malvinas)',
  'fo': '🇫🇴 Faroe Islands (Føroyar)',
  'fj': '🇫🇯 Fiji',
  'fi': '🇫🇮 Finland (Suomi)',
  'fr': '🇫🇷 France',
  'gf': '🇬🇫 French Guiana (Guyane française)',
  'pf': '🇬🇫 French Polynesia (Polynésie française)',
  'ga': '🇬🇦 Gabon',
  'gm': '🇬🇲 Gambia',
  'ge': '🇬🇪 Georgia (საქართველო)',
  'de': '🇩🇪 Germany (Deutschland)',
  'gh': '🇬🇭 Ghana (Gaana)',
  'gi': '🇬🇮 Gibraltar',
  'gr': '🇬🇷 Greece (Ελλάδα)',
  'gl': '🇬🇱 Greenland (Kalaallit Nunaat)',
  'gd': '🇬🇱 Grenada',
  'gp': '🇬🇵 Guadeloupe',
  'gu': '🇬🇺 Guam',
  'gt': '🇬🇹 Guatemala',
  'gg': '🇬🇬 Guernsey',
  'gn': '🇬🇳 Guinea (Guinée)',
  'gw': '🇬🇼 Guinea-Bissau (Guiné Bissau)',
  'gy': '🇬🇾 Guyana',
  'ht': '🇭🇹 Haiti',
  'hn': '🇭🇳 Honduras',
  'hk': '🇭🇰 Hong Kong (香港)',
  'hu': '🇭🇺 Hungary (Magyarország)',
  'is': '🇮🇸 Iceland (Ísland)',
  'in': '🇮🇳 India (भारत)',
  'id': '🇮🇩 Indonesia',
  'ir': '🇮🇷 Iran (‫ایران‬‎)',
  'iq': '🇮🇶 Iraq (‫العراق‬‎)',
  'ie': '🇮🇪 Ireland',
  'im': '🇮🇲 Isle of Man',
  'il': '🇮🇱 Israel (‫ישראל‬‎)',
  'it': '🇮🇹 Italy (Italia)',
  'jm': '🇯🇲 Jamaica',
  'jp': '🇯🇵 Japan (日本)',
  'je': '🇯🇪 Jersey',
  'jo': '🇯🇴 Jordan (‫الأردن‬‎)',
  'kz': '🇰🇿 Kazakhstan (Казахстан)',
  'ke': '🇰🇪 Kenya',
  'ki': '🇰🇮 Kiribati',
  'xk': '🇽🇰 Kosovo',
  'kw': '🇰🇼 Kuwait (‫الكويت‬‎)',
  'kg': '🇰🇬 Kyrgyzstan (Кыргызстан)',
  'la': '🇱🇦 Laos (ລາວ)',
  'lv': '🇱🇻 Latvia (Latvija)',
  'lb': '🇱🇻 Lebanon (‫لبنان‬‎)',
  'ls': '🇱🇸 Lesotho',
  'lr': '🇱🇸 Liberia',
  'ly': '🇱🇾 Libya (‫ليبيا‬‎)',
  'li': '🇱🇮 Liechtenstein',
  'lt': '🇱🇹 Lithuania (Lietuva)',
  'lu': '🇱🇺 Luxembourg',
  'mo': '🇲🇴 Macau (澳門)',
  'mk': '🇲🇰 Macedonia (FYROM) (Македонија)',
  'mg': '🇲🇬 Madagascar (Madagasikara)',
  'mw': '🇲🇼 Malawi',
  'my': '🇲🇾 Malaysia',
  'mv': '🇲🇻 Maldives',
  'ml': '🇲🇱 Mali',
  'mt': '🇲🇹 Malta',
  'mh': '🇲🇭  Marshall Islands',
  'mq': '🇲🇶 Martinique',
  'mr': '🇲🇷Mauritania (‫موريتانيا‬‎)',
  'mu': '🇲🇺 Mauritius (Moris)',
  'yt': '🇾🇹 Mayotte',
  'mx': '🇲🇽 Mexico (México)',
  'fm': '🇫🇲 Micronesia',
  'md': '🇲🇩 Moldova (Republica Moldova)',
  'mc': '🇲🇨 Monaco',
  'mn': '🇲🇳 Mongolia (Монгол)',
  'me': '🇲🇪 Montenegro (Crna Gora)',
  'ms': '🇲🇸 Montserrat',
  'ma': '🇲🇦 Morocco (‫المغرب‬‎)',
  'mz': '🇲🇿 Mozambique (Moçambique)',
  'mm': '🇲🇲 Myanmar (Burma) (မြန်မာ)',
  'na': '🇳🇦 Namibia (Namibië)',
  'nr': '🇳🇷 Nauru',
  'np': '🇳🇵 Nepal (नेपाल)',
  'nl': '🇳🇱 Netherlands (Nederland)',
  'nc': '🇳🇨 New Caledonia (Nouvelle-Calédonie)',
  'nz': '🇳🇿 New Zealand',
  'ni': '🇳🇮 Nicaragua',
  'ne': '🇳🇪 Niger (Nijar)',
  'ng': '🇳🇬 Nigeria',
  'nu': '🇳🇺 Niue',
  'nf': '🇳🇫 Norfolk Island',
  'kp': '🇰🇵 North Korea (조선 민주주의 인민 공화국)',
  'mp': '🇰🇵 Northern Mariana Islands',
  'no': '🇳🇴 Norway (Norge)',
  'om': '🇴🇲 Oman (‫عُمان‬‎)',
  'pk': '🇵🇰 Pakistan (‫پاکستان‬‎)',
  'pw': '🇵🇼 Palau',
  'ps': '🇵🇸 Palestine (‫فلسطين‬‎)',
  'pa': '🇵🇦 Panama (Panamá)',
  'pg': '🇵🇬 Papua New Guinea',
  'py': '🇵🇾 Paraguay',
  'pe': '🇵🇪 Peru (Perú)',
  'ph': '🇵🇭 Philippines',
  'pl': '🇵🇱 Poland (Polska)',
  'pt': '🇵🇹 Portugal',
  'pr': '🇵🇷 Puerto Rico',
  'qa': '🇶🇦 Qatar (‫قطر‬‎)',
  're': '🇷🇪 Réunion (La Réunion)',
  'ro': '🇷🇴 Romania (România)',
  'ru': '🇷🇺 Russia (Россия)',
  'rw': '🇷🇼 Rwanda',
  'bl': '🇧🇱 Saint Barthélemy',
  'sh': '🇸🇭 Saint Helena',
  'kn': '🇰🇳 Saint Kitts and Nevis',
  'lc': '🇱🇨 Saint Lucia',
  'mf': '🇲🇫 Saint Martin (Saint-Martin (partie française))',
  'pm': '🇵🇲 Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
  'vc': '🇻🇨 Saint Vincent and the Grenadines',
  'ws': '🇼🇸 Samoa',
  'sm': '🇸🇲 San Marino',
  'st': '🇸🇹 São Tomé and Príncipe (São Tomé e Príncipe)',
  'sa': '🇸🇦 Saudi Arabia (‫المملكة العربية السعودية‬‎)',
  'sn': '🇸🇳 Senegal (Sénégal)',
  'rs': '🇷🇸 Serbia (Србија)',
  'sc': '🇸🇨 Seychelles',
  'sl': '🇸🇱 Sierra Leone',
  'sg': '🇸🇬 Singapore',
  'sx': '🇸🇽 Sint Maarten',
  'sk': '🇸🇰 Slovakia (Slovensko)',
  'si': '🇸🇮 Slovenia (Slovenija)',
  'sb': '🇸🇧 Solomon Islands',
  'so': '🇸🇴 Somalia (Soomaaliya)',
  'za': '🇿🇦 South Africa',
  'kr': '🇰🇷 South Korea (대한민국)',
  'ss': '🇸🇸 South Sudan (‫جنوب السودان‬‎)',
  'es': '🇪🇸 Spain (España)',
  'lk': '🇪🇸 Sri Lanka (ශ්‍රී ලංකාව)',
  'sd': '🇸🇩 Sudan (‫السودان‬‎)',
  'sr': '🇸🇷 Suriname',
  'sj': '🇸🇯 Svalbard and Jan Mayen',
  'sz': '🇸🇿 Swaziland',
  'se': '🇸🇪 Sweden (Sverige)',
  'ch': '🇨🇭 Switzerland (Schweiz)',
  'sy': '🇸🇾 Syria (‫سوريا‬‎)',
  'tw': '🇸🇹 Taiwan (台灣)',
  'tj': '🇹🇯 Tajikistan',
  'tz': '🇹🇿 Tanzania',
  'th': '🇹🇭 Thailand (ไทย)',
  'tl': '🇹🇱 Timor-Leste',
  'tg': '🇹🇬 Togo',
  'tk': '🇹🇰 Tokelau',
  'to': '🇹🇴 Tonga',
  'tt': '🇹🇹 Trinidad and Tobago',
  'tn': '🇹🇳 Tunisia (‫تونس‬‎)',
  'tr': '🇹🇷 Turkey (Türkiye)',
  'tm': '🇹🇲 Turkmenistan',
  'tc': '🇹🇨 Turks and Caicos Islands',
  'tv': '🇹🇻 Tuvalu',
  'vi': '🇻🇮 U.S. Virgin Islands',
  'ug': '🇺🇬 Uganda',
  'ua': '🇺🇦 Ukraine (Україна)',
  'ae': '🇦🇪 United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
  'gb': '🇬🇧 United Kingdom',
  'us': '🇺🇸 United States',
  'uy': '🇺🇾 Uruguay',
  'uz': '🇺🇿 Uzbekistan (Oʻzbekiston)',
  'vu': '🇻🇺 Vanuatu',
  'va': '🇻🇦 Vatican City (Città del Vaticano)',
  've': '🇻🇪 Venezuela',
  'vn': '🇻🇳 Vietnam (Việt Nam)',
  'wf': '🇼🇫 Wallis and Futuna (Wallis-et-Futuna)',
  'eh': '🇪🇭 Western Sahara (‫الصحراء الغربية‬‎)',
  'ye': '🇾🇪 Yemen (‫اليمن‬‎)',
  'zm': '🇿🇲 Zambia',
  'zw': '🇿🇼 Zimbabwe',
  'ax': '🇦🇽 Åland Islands'
}

const preferredCountries = ['fr', 'de', 'ch', 'es', 'at', 'it', 'be', 'nl', 'gb', 'si', 'cz']

new Vue({
  el: '#app',
  template: `
    <div v-if="errorBadParams">
      <div v-html="l.error_missing_params"></div>
      <p><i>activation token: {{ payload.token || 'null' }}</i></p>
    </div>
    <div v-else-if="thankYou">
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
      <p>{{ l.download_invoice }} <a :href="invoiceUrl" target="_blank">{{ l.invoice }}</a></p>
      <p><strong>{{ l.enjoy }}</strong></p>
      <p v-html="l.might_login"></p>
      <iframe class="hidden" :src="authFrameUrl" @load="iframeLoaded"></iframe>
      <img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." v-if="!thankYouReady"/>
    </div>

    <form class="mp-form" @submit.prevent="submit" :class="{ ready }" v-else>
      <h1>{{ l.last_step }}</h1>

      <p>{{ l.enter_address }}</p>

      <p><small v-html="l.address_privacy"></small></p>
      <div class="field" :class="{error: errors.fullname}">
        <label>{{ l.fullname }}</label>
        <input type="text" class="input" v-model="payload.fullname" @blur="blur" @focus="focus" name="fullname">
      </div>
      <div class="field">
        <label v-html="l.company"></label>
        <input type="text" class="input" v-model="payload.company" name="company">
      </div>
      <div class="field" :class="{error: errors.address}">
        <label>{{ l.address }}</label>
        <input type="text" class="input" v-model="payload.address" @blur="blur" @focus="focus" name="address">
      </div>
      <div class="field" :class="{error: errors.city}">
        <label>{{ l.city }}</label>
        <input type="text" class="input" v-model="payload.city" @blur="blur" @focus="focus" name="city">
      </div>
      <div class="field" :class="{error: errors.country}">
        <label>{{ l.country }}</label>
        <select v-model="payload.country" @blur="blur" @focus="focus" name="country">
          <option v-for="(name, code) in preferredCountries" :value="code">{{ name }}</option>
          <option disabled>---</option>
          <option v-for="(name, code) in countries" :value="code">{{ name }}</option>
        </select>
      </div>
      
      <div class="submit">
        <div v-if="loading">
          <p><img src="/img/load.gif" class="loading" alt="loading..."/></p>
          <p v-if="waitingForBank"><small>{{ l.wait_bank }}</small></>
        </div>
        <div v-else-if="bankError">
          <p><span class="error">{{ l.error_bank }}</span></p>
          <p><span class="error"><i>activation token: {{ payload.token || 'null' }}</i></span></p>
        </div>
        <p v-else>
          <input type="submit" class="md-typeset md-button md-button--primary" :class="{error: formErrorDisplay }" :value="formErrorDisplay ? formErrorDisplay : l.submit" @blur="formErrorDisplay = false"><br>
          <p><span class="error" v-if="requestError">{{ l.error_request }}</span></p>
        </p>
      </div>
      
      <h2>{{ l.need_help }}</h2>
      <p v-html="l.email_us"></p>
    </form>
    
    <!--<div v-if="thankYouReady || errorBadParams">
      <a href="javascript:window.close()" class="md-typeset md-button md-button--primary" v-if="window.opener != null || window.history.length == 1">{{ l.close }}</a>
      <a href="https://meteo-parapente.com" class="md-typeset md-button md-button--primary" v-else>{{ l.go_to_mp }}</a>
    </div>-->
  `,
  data: () => ({      
    l: mp_form_locale,
    ready: false,
    errorBadParams: false,
    errors: {},
    formErrorDisplay: false,
    loading: false,
    requestError: false,
    countries,
    preferredCountries: {},
    payload: {},
    authFrameUrl: 'https://meteo-parapente.com/auth.html',
    invoiceUrl: null,
    thankYou: false,
    thankYouReady: false,
    auth: null,
    waitingForBank: false,
    bankError: false,
    login: null,
    password: null
  }),
  computed: {
    formError: function() {
      return false
    }
  },
  mounted: function () {
    this.payload.token = this.getParameterByName('tk')
    this.payload.country = this.getParameterByName('dc')
    if (!this.getParameterByName('dev') && document.location.host !== '127.0.0.1:8000') {
      Vue.http.options.root = 'https://meteo-parapente.com/api/order/'
    } else {
      Vue.http.options.root = 'http://127.0.0.1:4200/order/'
      console.log('dev api')
    }
    if (!this.payload.token) {
      this.errorBadParams = true
    }
    for (code of preferredCountries) {
      this.preferredCountries[`${code}-pref`] = this.countries[code]
      if (this.payload.country == code) this.payload.country = `${code}-pref`
    }
    this.ready = true
  },
  methods: {
    getParameterByName: (name, url = window.location.href) => {
      name = name.replace(/[\[\]]/g, '\\$&')
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url)
      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    },
    blur: function (e) {
      if (e.target.value == '') this.$set(this.errors, e.target.name, true)
      e.target.value = e.target.value.trim()
    },
    focus: function (e) {
      this.$set(this.errors, e.target.name, false)
    },
    submit: function () {
      this.loading = true
      let error = false
      for (let field of ['fullname', 'address', 'city', 'country']) {
        if (!this.payload[field]) {
          this.$set(this.errors, field, true)
          error = true
        }
      }
      if (error) {
        this.formErrorDisplay = this.l.form_input_error
        setTimeout(
          () => this.formErrorDisplay = false,
          2500
        )
        this.loading = false
        return
      }
      const activate = () => {
        this.$http.post('activate', this.payload)
        .then(response => {
          const { invoice, auth, expiry, email, password } = response.body
          this.authFrameUrl = `https://meteo-parapente.com/auth.html?tk=${auth}`
          this.auth = auth
          this.invoiceUrl = invoice
          this.email = email
          this.password = password
          this.thankYou = true
          this.waitingForBank = false
          this.loading = false
          window.scrollTo({ top: 0, behavior: 'smooth' })
        })
        .catch(e => {
          if (e.status == 402) {
            if (this.waitingForBank) {
              if (this.waitingForBank > 75) {
                this.bankError = true
                this.loading = false
                return
              } 
              this.waitingForBank++
            } else {
              this.waitingForBank = 1
            }
            setTimeout(activate, 2000)
          } else if (e.status == 403) {
            this.errorBadParams = true
          } else {
            console.error(e)
            this.requestError = true
            this.loading = false
          }
        })
      }
      activate()
    },
    iframeLoaded: function (e) {
      const win = e.target.contentWindow
      const message = JSON.stringify({ auth: this.auth })
      win.postMessage(message, 'https://meteo-parapente.com')
      this.thankYouReady = true
    }
  }
})
