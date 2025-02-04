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
    locale: 'fr',
    fullname: `Nom et Prénom`,
    company: `[Optionnel] Toute information que vous souhaitez sur la facture (nom de l'entreprise, numéro de TVA...)`,
    address: `Adresse`,
    city: `Ville`,
    country: `Pays`,
    submit: `Envoyer ►`,
    need_help: `Besoin d'aide ?`,
    email_us: `Envoyez un email à  <strong>support@meteo-parapente.com</strong>`,
    error_request: `Erreur de communication avec le serveur. Vérifiez votre connection et ressayez.`,
    error_missing_params: `<p>Erreur: Token invalide ou expiré.</p><p>Si vous avez déjà activé votre accès et reçu votre facture par email, vous pouvez ignorer ce message.</p><p>Dans le cas contraire, contactez support@meteo-parapente.com en envoyant les informations suivantes :</p>`,
    form_input_error: `Remplissez le formulaire`,
    thank_you: `Merci !`,
    access_activated: `Votre accès est activé.`,
    download_invoice: `Conservez la facture dans vos archives :`,
    invoice: `🧾 Facture`,
    enjoy: `Vous pouvez maintenant fermer cette page et aller profiter de Meteo-Parapente.`,
    might_login: `Lorsque Meteo-Parapente vous demandera de vous <i>connecter ou de rejoindre le club</i>, cliquez sur <i>Je suis déjà contributeur</i> et entrez votre code d'accès.`,
    last_step: `Une dernière étape...`,
    enter_address: `Pour activer votre code d'accès, saisissez votre adresse.`,
    address_privacy: `La législation nous impose de collecter cette information à des fins comptables. Nous n'en faisons aucun autre usage. Vous pouvez lire notre <a href="/fr/privacy/" target="_blank">politique de confidentialité</a>.`,
    wait_bank: `En attente de la banque...`,
    error_bank: `C'est étrange. La banque met trop longtemps à traiter le paiement. Contactez support@meteo-parapente.com en envoyant les informations suivantes :`,
    close: `Fermer`,
    go_to_mp: `Ouvrir Meteo-Parapente`,
    login: `Login`,
    password: `Mot de passe`,
    here_is_code: `Voici votre code. Conservez-le précieusement!`,
    thank_for_payment : `Merci pour votre paiement`,
    sent_code : `Nous vous avons envoyé votre code d'accès`,
    check_spam : `Si vous n'avez rien reçu, vérifiez votre dossier spam.<br>Si vous n'avez toujours rien reçu 10 minutes après le paiement, ne faites pas de deuxième paiement et contactez-nous à support@meteo&#8209;parapente.com`,
    warn_no_edits: `Attention ! Aucune modification de la facture ne sera possible après validation du formulaire, conformément à la loi.`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>