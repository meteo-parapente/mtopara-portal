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
title: Abonneren
#og:
#  title: Win de paraglidervleugel naar keuze!
#  description: Abonneer u op Meteo-Parapente voor 30 maart
#  image: https://portal.meteo-parapente.com/img/voile.png
---

# Abonneren op Meteo-Parapente
 
- Geniet elke dag van de beste voorspellingen. Meteo-Parapente kan bestaan dankzij jou!
 
- Steun de ontwikkeling van een kwaliteitstool die toegankelijk is voor elke piloot
 
- Krijg gratis toegang tot lokale weertrainingen en gebruikers meetups
 
- Ontmoet me één keer per maand om nieuwe functies en verbeteringen te bespreken

- 👋 <a href="/nl/about-us/" target="_blank">Ontdek wie we zijn</a>

<script>
  const mp_form_locale = {
    locale: `nl`,
    locale_paypal: `nl_NL`,
    default_country: `NL`,
    product_contributor_title: `Bijdrager`,
    product_contributor_description: `€3 per maand <small>(12 maanden)</small>`,
    product_supporter_title: `Supporter`,
    product_supporter_description: `5€ per maand <small>(12 maanden)</small>`,
    product_small_text: `Eenmalige betaling van €### voor 12 maanden. Geen verlenging.`,
    header_coordinates: `Over u`,
    email: `Email`,
    mobile_phone: `Mobiele telefoon`,
    mobile_phone_small_text: `Alleen gebruikt om uw toegangscode te ontvangen en om deze te resetten in geval u deze verliest. Als u geen mobiele telefoon heeft, neem dan contact op met support@meteo-parapente.com`,
    payment_method: `Betaalmethode`,
    payment_card: `Kredietkaart / Debetkaart`,
    payment_proceed: `Doorgaan naar betaling ►`,
    terms_approval: `Door over te gaan tot betaling, gaat u akkoord en stemt u in met de <a href="/nl/legal/#terms" target="_blank">Algemene gebruiksvoorwaarden van Meteo-Parapente</a>, de <a href="/nl/legal/#membership" target="_blank">Specifieke abonnementsvoorwaarden</a> en het <a href="/nl/privacy/" target="_blank">Privacybeleid</a>. `,
    error_email: `Emailadres is ongeldig`,
    error_phone: `Het telefoonnummer is ongeldig`,
    error_request: `Fout: kan de server niet bereiken. Controleer uw verbinding en probeer het opnieuw.`,
    need_help: `Hebt u hulp nodig?`,
    email_us: `Schrijf een email naar <strong>support@meteo-parapente.com</strong>`,
    payment_declined: `Uw bank heeft de betaling geweigerd. Probeer het alstublieft opnieuw.`,
    payment_sepa: `SEPA-overschrijving`,
    note_transfer: `<u>Betaling via overschrijving:</u> <strong>Op de volgende pagina geven wij u een betalingskenmerk</strong> (example :  RF12-1234-1234-1234). <strong>U MOET de referentie vermelden wanneer u de overschrijving doet.</strong>. Als u vergeet de referentie aan te geven, wordt het geld automatisch terugbetaald en kan uw toegang niet worden geactiveerd.`,
    note_paypal: `<u>Betaling via PayPal:</u> Wij bieden PayPal aan voor uw gemak. Maar als u kunt, raden wij u aan een andere betaalmethode te gebruiken. De kosten die PayPal in rekening brengt zijn buitensporig hoog. Ik weet zeker dat je liever Meteo-Parapente helpt dan PayPal :)`,
    email_confirm: `Er staan geen typefouten in mijn e-mailadres. Ik heb het dubbel gecontroleerd.`,
    error_email_confirm: `Vink het vakje aan`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>