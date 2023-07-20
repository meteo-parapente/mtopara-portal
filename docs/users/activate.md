---
hide: footer,edit,toc,search,navigation
extra_css:
  #- https://cdn.jsdelivr.net/combine/npm/vue-tel-input@5.6.2/dist/css/component.min.css,npm/vue-tel-input@5.6.2/dist/css/sprite.min.css
  - /css/contribute.css
extra_javascript:
  # - https://cdn.jsdelivr.net/combine/npm/vue@2.6.14,npm/vue-tel-input@5.6.2/dist/vue-tel-input.umd.min.js,npm/vue-resource@1.5.3/dist/vue-resource.min.js
  - /js/vendors.js
  - /js/activate.js
title: Meteo-Parapente
---
<h1></h1>
<script>
  const mp_form_locale = {
    locale: 'en',
    fullname: `Full name`,
    company: `Company <small>(optional)</small>`,
    address: `Address`,
    city: `City`,
    country: `Country`,
    submit: `Submit ►`,
    need_help: `Do you need help?`,
    email_us: `Write an email to <strong>support@meteo-parapente.com</strong>`,
    error_request: `Error: cannot reach server. Check your connection and try again.`,
    error_missing_params: `<p>ERROR: Token is invalid or expired.</p><p>If you already activated your access and received your invoice by email, you can ignore this message.</p><p>If not, please contact support@meteo-parapente.com and send the following information :</p>`,
    form_input_error: `Please fill in the form`,
    thank_you: `Thank you!`,
    access_activated: `Your access is activated.`,
    download_invoice: `Please download the invoice for your records:`,
    invoice: `🧾 Invoice`,
    enjoy: `You can now close this page and go enjoy Meteo-Parapente.`,
    might_login: `When Meteo-Parapente asks you to <i>login or join the club</i>, click on <i>I am already a contributor</i> and enter your access code.`,
    last_step: `One last step...`,
    enter_address: `To activate your acces code, please enter your address.`,
    address_privacy: `We are required by law to collect your address for accounting records. We do not use it for any other purpose. You can read our <a href="/privacy/" target="_blank">privacy policy</a>.`,
    wait_bank: `Waiting for the bank to process the payment...`,
    error_bank: `Something is weird. The bank takes too long to process the payment. Please contact support@meteo-parapente.com and send the following information :`,
    close: `Close`,
    go_to_mp: `Go to Meteo-Parapente`,
    login: `Login`,
    password: `Password`,
    here_is_code: `Here is your code. Don't lose it!`,
    thank_for_payment: `Thank you for your payment`,
    sent_code: `We've sent you your access code`,
    check_spam: `If you haven't received anything, check your spam folder.<br>If you still haven't received anything 10 minutes after payment, don't pay again and contact us at support@meteo&#8209;parapente.com`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>