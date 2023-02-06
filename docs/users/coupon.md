---
#hide: footer,edit,toc,search,navigation
hide: edit,footer
extra_css:
  #- https://cdn.jsdelivr.net/combine/npm/vue-tel-input@5.6.2/dist/css/component.min.css,npm/vue-tel-input@5.6.2/dist/css/sprite.min.css
  - /css/vendors.css
  - /css/contribute.css
extra_javascript:
  #- https://cdn.jsdelivr.net/combine/npm/vue@2.6.14,npm/vue-tel-input@5.6.2/dist/vue-tel-input.umd.min.js,npm/vue-resource@1.5.3/dist/vue-resource.min.js
  - https://meteo-parapente.com/api/order/country.js
  - /js/vendors.js
  - /js/coupon.js
title: Meteo-Parapente
---
<h1></h1>
<script>
  const mp_form_locale = {
    locale: `en`,
    default_country: `GB`,
    activate: `Activate your access`,
    soon_enjoy: `You will be able to enjoy the full potential of Meteo-Parapente.`,
    fill_the_form: `Fill the form to receive your login and password.`,
    activation_code: `Your 16-digits activation code`,
    email: `Email`,
    mobile_phone: `Mobile phone`,
    mobile_phone_small_text: `Only used to receive your access code and to reset it in case you lose it. If you don't have a cell phone, contact support@meteo-parapente.com`,
    submit: `Submit ►`,
    terms_approval: `By clicking on "submit", you hereby agree and consent to the <a href="/legal/#general-conditions-of-use-of-meteo-parapente" target="_blank">general conditions of use of Meteo-Parapente</a>, the <a href="/legal/#specific-conditions-of-membership-of-the-contributors-club" target="_blank">specific conditions of membership of the contributors club</a> and the <a href="/privacy/" target="_blank">privacy policy</a>.`,
    error_email: `Email address is not valid`,
    error_phone: `Phone number is not valid`,
    error_coupon: `Please check activation code`,
    invalid_coupon: `Activation code is not longer valid`,
    unknown_coupon: `Unknown activation code`,
    error_request: `Error: cannot reach server. Check your connection and try again.`,
    need_help: `Do you need help?`,
    email_us: `Write an email to <strong>support@meteo-parapente.com</strong>`,
    thank_you: `Thank you!`,
    access_activated: `Your access is activated.`,
    enjoy: `You can now enjoy Meteo-Parapente, on <a href="https://meteo-parapente.com">meteo-parapente.com</a> website or using the <a href="https://play.google.com/store/apps/details?id=com.meteo_parapente" target="_blank">Android</a> or <a href="https://apps.apple.com/app/meteo-parapente/id1255974302" target="_blank">iOS</a> mobile app.`,
    might_login: `When Meteo-Parapente asks you to <i>login or join the club</i>, click on <i>I am already a contributor</i> and enter your access code.`,
    login: `Login`,
    password: `Password`,
    here_is_code: `Here is your code. Don't lose it!`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>