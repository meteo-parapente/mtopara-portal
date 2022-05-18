---
hide: footer,edit,toc,search,navigation
extra_css:
  #- https://cdn.jsdelivr.net/combine/npm/vue-tel-input@5.6.2/dist/css/component.min.css,npm/vue-tel-input@5.6.2/dist/css/sprite.min.css
  - /css/vendors.css
  - /css/contribute.css
extra_javascript:
  #- https://cdn.jsdelivr.net/combine/npm/vue@2.6.14,npm/vue-tel-input@5.6.2/dist/vue-tel-input.umd.min.js,npm/vue-resource@1.5.3/dist/vue-resource.min.js
  - https://meteo-parapente.com/api/order/country.js
  - /js/vendors.js
  - /js/contribute.js
title: Abonnieren
og:
  title: Gewinne den Gleitschirmschirm deiner Wahl!
  description: Abonnieren Sie Meteo-Parapente einfach vor dem 30. März
  image: https://portal.meteo-parapente.com/img/voile.png
---

# Meteo-Parapente abonnieren!
 
- Genießen Sie jeden Tag die besten Prognosen. Meteo-Parapente kann nur dank Ihnen existieren!
 
- Unterstützen Sie die Entwicklung eines Qualitätswerkzeugs, das für alle Piloten zugänglich ist
 
- Erhalten Sie freien Eintritt zu lokalen Wettertrainings und Nutzertreffen
 
- Treffen Sie mich einmal im Monat, um neue Funktionen und Verbesserungen zu besprechen

- 👋 <a href="/de/about-us/" target="_blank">Entdecken Sie, wer wir sind</a>

<br> 

<script>
  const mp_form_locale = {
    locale: `de`,
    default_country: `DE`,
    product_contributor_title: `Beitragszahler`,
    product_contributor_description: `€3 pro Monat <small>(12 Monate)</small>`,
    product_supporter_title: `Unterstützer`,
    product_supporter_description: `€5 pro Monat <small>(12 Monate)</small>`,
    product_small_text: `Einmalige Zahlung von €### für 12 Monate. Keine automatische Verlängerung.`,
    header_coordinates: `Über Sie`,
    email: `Email`,
    mobile_phone: `Mobiltelefon`,
    mobile_phone_small_text: `Nur verwendet, um Ihren Zugangscode zu erhalten und um ihn zurückzusetzen, falls Sie ihn verlieren. Wenn Sie kein Mobiltelefon haben, wenden Sie sich an support@meteo-parapente.com`,
    payment_method: `Zahlungsmethode`,
    payment_card: `Kreditkarte / Debitkarte`,
    payment_proceed: `Zur Zahlung gehen ►`,
    terms_approval: `Mit dem Klick auf "Zur Zahlung gehen" erklären Sie sich mit den <a href="/de/legal/#terms" target="_blank">Allgemeine Nutzungsbedingungen von Meteo-Parapente</a> einverstanden, die <a href="/de/legal/#membership" target="_blank">Besondere Abonnementbedingungen</a> und die <a href="/de/privacy/" target="_blank">Datenschutzbestimmungen</a>. `,
    error_email: `Email address is not valid`,
    error_phone: `Telefonnummer ist nicht gültig`,
    error_request: `Fehler: Server nicht erreichbar. Überprüfen Sie Ihre Verbindung und versuchen Sie es erneut`,
    need_help: `Brauchen Sie Hilfe?`,
    email_us: `Schreiben Sie eine E-Mail an <strong>support@meteo-parapente.com</strong>`,
    payment_declined: `Ihre Bank hat die Zahlung abgelehnt. Bitte versuchen Sie es erneut.`,
    payment_sepa: `SEPA-Banküberweisung`
  };
</script>

<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>