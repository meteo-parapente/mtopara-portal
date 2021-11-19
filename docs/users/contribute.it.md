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
title: Entra nel club
---

# Entra nel club dei contributori di Meteo-Parapente
 
- Goditi le migliori previsioni ogni giorno. Meteo-Parapente può esistere grazie a te!
 
- Sostieni lo sviluppo di uno strumento di qualità accessibile a tutti i piloti
 
- Ottieni l'ingresso gratuito ai training meteo locali e ai meetup degli utenti
 
- Incontrami una volta al mese per discutere di nuove funzionalità e miglioramenti

- 👋 <a href="/it/about-us/" target="_blank">Scopri chi siamo</a>

<script>
  const mp_form_locale = {
    locale: `it`,
    default_country: `IT`,
    product_contributor_title: `Contributore`,
    product_contributor_description: `3€ al mese <small>(12 mesi)</small>`,
    product_supporter_title: `Supporto`,
    product_supporter_description: `5€ al mese <small>(12 mesi)</small>`,
    product_small_text: `Pagamento unico di €#### per 12 mesi. Nessun rinnovo`,
    header_coordinates: `Su di te`,
    email: `Email`,
    mobile_phone: `Cellulare`,
    mobile_phone_small_text: `Solo usato per ricevere il tuo codice di accesso e per resettarlo nel caso tu lo perda. Se non hai un cellulare, contatta support@meteo-parapente.com`,
    payment_method: `Metodo di pagamento`,
    payment_card: `Carta di credito / Carta di debito`,
    payment_proceed: `Procedi al pagamento ►`,
    termini_approvazione: `Cliccando su "procedi al pagamento", accetti e acconsenti alle <a href="/it/legal/#condizioni-generali-duso-di-meteo-parapente" target="_blank">Condizioni Generali d'Uso di Meteo-Parapente</a>, le <a href="/it/legal/#condizioni-specifiche-di-appartenenza-al-club-dei-contributori" target="_blank">Condizioni specifiche di appartenenza al Club dei contributori</a> e la <a href="/it/privacy/" target="_blank">Politica sulla riservatezza</a>. `,
    error_email: `Indirizzo e-mail non è valido`,
    error_phone: `Il numero di telefono non è valido`,
    error_request: `Errore: impossibile raggiungere il server. Controlla la tua connessione e riprova`,
    need_help: `Hai bisogno di aiuto?`,
    email_us: `Scrivi un'email a <strong>support@meteo-parapente.com</strong>`,
    payment_declined: `La sua banca ha rifiutato il pagamento. Si prega di riprovare.`,
    payment_sepa: `Bonifico bancario SEPA`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>