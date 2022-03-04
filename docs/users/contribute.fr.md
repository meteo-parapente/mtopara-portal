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
title: S'abonner
---

# Abonnez-vous à Meteo-Parapente !</span>
 
- Profitez des meilleures prévisions chaque jour. Meteo-Parapente existe grâce à vous !
 
- Soutenez le développement d'un outil de qualité, accessible à tous les pilotes
 
- Participez gratuitement aux formations météo organisées dans les clubs
 
- Rencontrez-moi une fois par mois pour échanger nos idées et améliorer le site

- 👋 <a href="/fr/about-us/" target="_blank">Découvrez qui nous sommes</a>

<div style="border-left : 2px #303fa1 solid; padding-left : 10px; color: #303fa1;">
<h3>Une voile de parapente à gagner !</h3>

<p><strong>Pour fêter les 10 ans de Météo-Parapente, nous organisons un grand concours.</strong></p>

<p><strong>Gagnez la voile de votre choix, parmi la <a href="https://www.supair.com/voiles/#category_id_160" target="_blank">gamme Solo SUPAIR</a>.</strong></p>

<p><strong>Pour participer au tirage au sort, il vous suffit de vous inscrire avant le 30 mars.</strong></p>

<p>Vous ne volez pas encore ? Vous pouvez échanger contre un stage d'initiation d'une semaine.</strong></p>

<p><a href="/fr/10years/">Voir les détails et les règles ►</a></p>
</div>
<br> 

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
    terms_approval: `En cliquant sur "procéder au paiement", vous acceptez et consentez aux  <a href="/fr/legal/#terms" target="_blank">Conditions Générales d'Utilisation de Meteo-Parapente</a>, aux <a href="/fr/legal/#membership" target="_blank">Conditions Spécifiques d'Abonnement</a> et à la <a href="/fr/privacy/" target="_blank">politique de données personnelles</a>.`,
    error_email: `L'adresse email est invalide`,
    error_phone: `Le numéro portable est invalide`,
    error_request: `Erreur de communication avec le serveur. Vérifiez votre connexion et ressayez.`,
    need_help: `Besoin d'aide ?`,
    email_us: `Envoyez un email à  <strong>support@meteo-parapente.com</strong>`,
    payment_declined: `Votre banque a refusé le paiement. Merci de réessayer.`,
    payment_sepa: `Virement bancaire SEPA`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>