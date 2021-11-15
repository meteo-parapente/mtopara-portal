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
title: Rejoignez le club
---

# Rejoignez le club des contributeurs !</span>
 
- Profitez des meilleures prévisions chaque jour. Meteo-Parapente existe grâce à vous !
 
- Soutenez le développement d'un outil de qualité, accessible à tous les pilotes
 
- Participez gratuitement aux formations météo organisées dans les clubs
 
- Rencontrez-moi une fois par mois pour échanger nos idées et améliorer le site

- 👋 <a href="/fr/about-us/" target="_blank">Découvrez qui nous sommes</a>

<script>
  const mp_form_locale = {
    locale: `fr`,
    default_country: `FR`,
    product_contributor_title: `Contributeur`,
    product_contributor_description: `3 € par mois <small>(12 mois)</small>`,
    product_supporter_title: `Soutien`,
    product_supporter_description: `5 € par mois <small>(12 mois)</small>`,
    product_small_text: `Un seul paiement unique de €### pour 12 mois. Pas de renouvellement.`,
    header_coordinates: `À propos de vous`,
    email: `Email`,
    mobile_phone: `Téléphone portable`,
    mobile_phone_small_text: `Utilisé seulement pour envoyer votre code d'accès et le réinitialiser en cas de perte. Si vous n'avez pas de téléphone portable, contactez support@meteo-parapente.com`,
    payment_method: `Moyen de paiement`,
    payment_card: `Carte de crédit / Carte de débit`,
    payment_proceed: `Procéder au paiement ►`,
    terms_approval: `En cliquant sur "procéder au paiement", vous acceptez et consentez aux  <a href="/fr/legal/#conditions-generales-dutilisation-de-meteo-parapente" target="_blank">conditions générales d'utilisation de Meteo-Parapente</a>, aux <a href="/fr/legal/#conditions-specifiques-dadhesion-au-club-des-contributeurs" target="_blank">conditions spécifiques d'adhésion au club des contributeurs</a> et à la <a href="/fr/privacy/" target="_blank">politique de données personnelles</a>.`,
    error_email: `L'adresse email est invalide`,
    error_phone: `Le numéro portable est invalide`,
    error_request: `Erreur de communication avec le serveur. Vérifiez votre connexion et ressayez.`,
    need_help: `Besoin d'aide ?`,
    email_us: `Envoyez un email à  <strong>support@meteo-parapente.com</strong>`,
    payment_declined: `Le paiement n'a pas abouti. Vous n'avez pas été débité. Veuillez réessayer.`,
    payment_sepa: `Virement bancaire SEPA`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>