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
title: Abbonati
#og:
#  title: Vinci la vela da parapendio di tua scelta!
#  description: Iscriversi a Meteo-Parapente entro il 30 marzo
#  image: https://portal.meteo-parapente.com/img/voile.png
---

# Abbonarsi a Meteo-Parapente
 
- Goditi le migliori previsioni ogni giorno. Meteo-Parapente può esistere grazie a te!
 
- Sostieni lo sviluppo di uno strumento di qualità accessibile a tutti i piloti
 
- Ottieni l'ingresso gratuito ai training meteo locali e ai meetup degli utenti
 
- Incontrami una volta al mese per discutere di nuove funzionalità e miglioramenti

- 👋 <a href="/it/about-us/" target="_blank">Scopri chi siamo</a>

<p style="color: darkred; font-size: 110%">
  <strong>🎂 13º anniversario di Meteo-Parapente</strong><br>
  Per celebrare l'occasione, offriamo 13 mesi al prezzo di 12!<br>
  Questa offerta è valida per tutti gli abbonamenti acquistati o rinnovati durante il mese di febbraio.
</p>

<script>
  const mp_form_locale = {
    locale: `it`,
    locale_paypal: `it_IT`,
    default_country: `IT`,
    product_contributor_title: `Contributore`,
    product_contributor_description: `3€ al mese <small>(12 mesi + 1 gratis)</small>`,
    product_supporter_title: `Supporto`,
    product_supporter_description: `5€ al mese <small>(12 mesi + 1 gratis)</small>`,
    product_small_text: `Pagamento unico di €### per 12 + 1 mesi. Nessun rinnovo`,
    header_coordinates: `Su di te`,
    email: `Email`,
    mobile_phone: `Cellulare`,
    mobile_phone_small_text: `Solo usato per ricevere il tuo codice di accesso e per resettarlo nel caso tu lo perda. Se non hai un cellulare, contatta support@meteo-parapente.com`,
    payment_method: `Metodo di pagamento`,
    payment_card: `Carta di credito / Carta di debito`,
    payment_proceed: `Procedi al pagamento ►`,
    terms_approval: `Procedendo al pagamento, accetti e acconsenti alle <a href="/it/legal/#terms" target="_blank">Condizioni Generali d'Uso di Meteo-Parapente</a>, le <a href="/it/legal/#membership" target="_blank">Condizioni di abbonamento specifiche</a> e la <a href="/it/privacy/" target="_blank">Politica sulla riservatezza</a>. `,
    error_email: `Indirizzo e-mail non è valido`,
    error_phone: `Il numero di telefono non è valido`,
    error_request: `Errore: impossibile raggiungere il server. Controlla la tua connessione e riprova`,
    need_help: `Hai bisogno di aiuto?`,
    email_us: `Scrivi un'email a <strong>support@meteo-parapente.com</strong>`,
    payment_declined: `La sua banca ha rifiutato il pagamento. Si prega di riprovare.`,
    payment_sepa: `Bonifico bancario SEPA`,
    note_transfer: `<u>Pagamento tramite bonifico bancario:</u> <strong>Nella pagina successiva, vi forniremo un riferimento per il pagamento.</strong> (example :  RF12-1234-1234-1234). <strong>È necessario indicare il riferimento quando si effettua il bonifico</strong>. Se si dimentica di indicare il riferimento, il denaro verrà automaticamente rimborsato e l'accesso non potrà essere attivato.`,
    note_paypal: `<u>Pagamento con PayPal :</u> Per comodità, offriamo il servizio PayPal. Ma se è possibile, vi consigliamo di utilizzare un altro metodo di pagamento. Le tariffe applicate da PayPal sono eccessivamente elevate. Sono sicuro che preferiresti aiutare Meteo-Parapente piuttosto che PayPal :)`,
    email_confirm: `Non ci sono errori di battitura nel mio indirizzo e-mail. Ho controllato due volte.`,
    error_email_confirm: `Selezionare la casella`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>