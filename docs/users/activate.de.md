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
    locale: 'de',
    fullname: `Nachname und Vorname`,
    company: `Firma<small>(optional)</small>`,
    address: `Adresse`,
    city: `Stadt`,
    country: `Land`,
    submit: `Senden ►`,
    need_help: `Brauchst du Hilfe?`,
    email_us: `Schreiben Sie eine E-Mail an <strong>support@meteo-parapente.com</strong>`,
    error_request: `Fehler: Server nicht erreichbar. Überprüfen Sie Ihre Verbindung und versuchen Sie es noch einmal`,
    error_missing_params: `<p>ERROR: Token ist ungültig oder abgelaufen.</p><p>Wenn Sie Ihren Zugang bereits aktiviert und Ihre Rechnung per E-Mail erhalten haben, können Sie diese Meldung ignorieren.</p><p>Wenn nicht, wenden Sie sich bitte an support@meteo-parapente.com und senden Sie die folgenden Informationen:</p>`,
    form_input_error: `Fülle das Formular aus`,
    thank_you: `Danke!`,
    access_activated: `Ihr Zugang ist aktiviert`,
    download_invoice: `Bitte laden Sie die Rechnung für Ihre Unterlagen herunter:`,
    invoice: `🧾 Rechnung`,
    enjoy: `Sie können nun diese Seite schließen und Meteo-Parapente genießen.`,
    might_login: `Wenn Meteo-Parapente Sie auffordert, sich anzumelden oder dem Club beizutreten, klicken Sie auf <i>Ich bin bereits Mitglied</i> und geben Sie Ihren Zugangscode ein.`,
    last_step: `Ein letzter Schritt...`,
    enter_address: `Um Ihren Zugangscode zu aktivieren, geben Sie bitte Ihre Adresse ein.`,
    address_privacy: `Wir sind gesetzlich verpflichtet, Ihre Adresse für die Buchhaltung zu erfassen. Wir verwenden sie nicht für andere Zwecke. Sie können unsere <a href="/de/privacy/" target="_blank">Datenschutzbestimmungen</a> lesen.`,
    wait_bank: `Warten, dass die Bank die Zahlung bearbeitet...`,
    error_bank: `Etwas ist merkwürdig. Die Bank braucht zu lange, um die Zahlung zu bearbeiten. Bitte kontaktieren Sie support@meteo-parapente.com und senden Sie die folgenden Informationen :`,
    close: `Schließen`,
    go_to_mp: `Gehen Sie zu Meteo-Parapente`,
    login: `Login`,
    password: `Passwort`,
    here_is_code: `Hier ist dein Code. Verlieren Sie ihn nicht!`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>