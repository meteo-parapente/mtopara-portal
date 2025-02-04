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
    locale: 'nl',
    fullname: `Achternaam en Voornaam`,
    company: `[Optioneel] Alle informatie die u op de factuur wilt (bedrijfsnaam, btw-nummer...)`,
    address: `Adres`,
    city: `Stad`,
    country: `Land`,
    submit: `Indienen ►`,
    need_help: `Hebt u hulp nodig?`,
    email_us: `Schrijf een email naar <strong>support@meteo-parapente.com</strong>`,
    error_request: `Fout: kan server niet bereiken. Controleer uw verbinding en probeer het opnieuw.`,
    error_missing_params: `<p>ERROR: Token is ongeldig of verlopen.</p><p>Als u uw toegang al heeft geactiveerd en uw factuur per e-mail heeft ontvangen, kunt u dit bericht negeren.</p><p>Als dat niet het geval is, neem dan contact op met support@meteo-parapente.com en stuur de volgende informatie :</p>`,
    form_input_error: `Vul het formulier in`,
    thank_you: `Dank u wel!`,
    access_activated: `Uw toegang is geactiveerd.`,
    download_invoice: `Gelieve de factuur te downloaden voor uw administratie:`,
    invoice: `🧾 Factuur`,
    enjoy: `Je kunt nu deze pagina sluiten en gaan genieten van Meteo-Parapente.`,
    might_login: `Wanneer Meteo-Parapente je vraagt om <i>in te loggen of lid te worden</i>, klik dan op <i>Ik ben al bijdrager</i> en voer je toegangscode in.`,
    last_step: `Een laatste stap...`,
    enter_address: `Om uw toegangscode te activeren, voert u uw adres in.`,
    address_privacy: `Wij zijn wettelijk verplicht uw adres te verzamelen voor de boekhouding. We gebruiken het niet voor andere doeleinden. U kunt ons <a href="/nl/privacy/" target="_blank">privacybeleid</a> lezen.`,
    wait_bank: `Wachten op de bank om de betaling te verwerken...`,
    error_bank: `Er is iets vreemds aan de hand. De bank doet er te lang over om de betaling te verwerken. Neem contact op met support@meteo-parapente.com en stuur de volgende informatie :`,
    close: `Sluit`,
    go_to_mp: `Ga naar Meteo-Parapente`,
    login: `Login`,
    password: `Paswoord`,
    here_is_code: `Hier is uw code. Verlies hem niet!`,
    thank_for_payment: `Bedankt voor uw betaling`,
    sent_code: `We hebben je je toegangscode gestuurd`,
    check_spam: `Als je niets hebt ontvangen, controleer dan je spammap.<br>Als je 10 minuten na betaling nog steeds niets hebt ontvangen, voer dan geen tweede betaling uit en neem contact met ons op via support@meteo&#8209;parapente.com`,
    warn_no_edits: `Let op! Na het verzenden van het formulier zijn er geen wijzigingen meer mogelijk op de factuur, in overeenstemming met de wet.`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>