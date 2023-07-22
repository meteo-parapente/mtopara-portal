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
og:
  title: Gagnez l'aile de parapente de votre choix !
  description: Abonnez-vous à Meteo-Parapente avant le 24 septembre
  image: https://portal.meteo-parapente.com/img/contest.webp
---

# Abonnez-vous à Meteo-Parapente !</span>
 
- Profitez des meilleures prévisions chaque jour. Meteo-Parapente existe grâce à vous !
 
- Soutenez le développement d'un outil de qualité, accessible à tous les pilotes
 
- Participez gratuitement aux formations météo organisées dans les clubs
 
- Rencontrez-moi une fois par mois pour échanger nos idées et améliorer le site

- 👋 <a href="/fr/about-us/" target="_blank">Découvrez qui nous sommes</a>

<div style="border-left : 2px #303fa1 solid; padding-left : 10px; color: #303fa1;">
<h3>Une voile de parapente à gagner !</h3>

<p>Nous nous sommes associés à deux webshops pour vous offrir le parapente de votre choix parmi leur catalogue, avec les meilleures marques et modèles du marché.</p>

<p>Pour ceux qui ne volent pas encore, on vous propose un stage d'initiation d'une semaine pour deux personnes</p>

<p><strong>Pour participer au tirage au sort, inscrivez-vous ou renouvelez simplement avant le 24 septembre.</strong></p>

<p><a href="/fr/contest/">Voir les détails et les règles ►</a></p>
</div>
<br> 

<script>
  const mp_form_locale = {
    locale: `fr`,
    locale_paypal: `fr_FR`,
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
    terms_approval: `En procédant au paiement, vous acceptez et consentez aux  <a href="/fr/legal/#terms" target="_blank">Conditions Générales d'Utilisation de Meteo-Parapente</a>, aux <a href="/fr/legal/#membership" target="_blank">Conditions Spécifiques d'Abonnement</a> et à la <a href="/fr/privacy/" target="_blank">politique de données personnelles</a>.`,
    error_email: `L'adresse email est invalide`,
    error_phone: `Le numéro portable est invalide`,
    error_request: `Erreur de communication avec le serveur. Vérifiez votre connexion et ressayez.`,
    need_help: `Besoin d'aide ?`,
    email_us: `Envoyez un email à  <strong>support@meteo-parapente.com</strong>`,
    payment_declined: `Votre banque a refusé le paiement. Merci de réessayer.`,
    payment_sepa: `Virement bancaire SEPA`,
    note_transfer: `<u>Paiement par virement :</u> <strong>Sur la page suivante, nous allons vous donner une référence de paiement</strong> (exemple :  RF12-1234-1234-1234). <strong>Il faut IMPERATIVEMENT indiquer la référence lors du virement</strong>. Si vous oubliez d'indiquer la référence, l'argent vous sera automatiquement remboursé et votre accès ne pourra pas être activé.`,
    note_paypal: `<u>Paiement par PayPal :</u> Nous proposons PayPal pour votre commodité. Mais si vous le pouvez, nous vous recommandons d'utiliser un autre moyen de paiement. Les frais prélevées par PayPal sont excessivement élevés. Je suis certain que vous préférez aider Meteo-Parapente plutôt que PayPal :)`,
    email_confirm : `Il n'y a pas de faute de frappe dans mon adresse e-mail. J'ai vérifié deux fois.`,
    error_email_confirm : `Cochez la case`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>