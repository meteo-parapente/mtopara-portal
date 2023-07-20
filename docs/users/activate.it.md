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
    locale: 'it',
    fullname: `Cognome e Nome`,
    company: `Azienda <small>(opzionale)</small>`,
    address: `Indirizzo`,
    city: `Città`,
    country: `Paese`,
    submit: `Inviare ►`,
    need_help: `Hai bisogno di aiuto?`,
    email_us: `Scrivi un'email a <strong>support@meteo-parapente.com</strong>`,
    error_request: `Errore: impossibile raggiungere il server. Controlla la tua connessione e riprova.`,
    error_missing_params: `<p>ERROR: Token non valido o scaduto.</p><p>Se hai già attivato il tuo accesso e ricevuto la fattura via email, puoi ignorare questo messaggio.</p><p>In caso contrario, contatta support@meteo-parapente.com e invia le seguenti informazioni :</p>`,
    form_input_error: `Compila il modulo`,
    thank_you: `Grazie!`,
    access_activated: `Il tuo accesso è attivato.`,
    download_invoice: `Si prega di scaricare la fattura per il tuo archivio:`,
    invoice: `🧾 Fattura`,
    enjoy: `Ora puoi chiudere questa pagina e andare a goderti Meteo-Parapente.`,
    might_login: `Quando Meteo-Parapente ti chiede di <i>login o entrare nel club</i>, clicca su <i>Sono già un collaboratore</i> e inserisci il tuo codice di accesso.`,
    last_step: `Un ultimo passo...`,
    enter_address: `Per attivare il tuo codice d'accesso, inserisci il tuo indirizzo.`,
    address_privacy: `Ci è richiesto dalla legge di raccogliere il tuo indirizzo per le registrazioni contabili. Non lo usiamo per nessun altro scopo. Puoi leggere la nostra <a href="/it/privacy/" target="_blank">politica sulla riservatezza</a>.`,
    wait_bank: `In attesa che la banca elabori il pagamento...`,
    error_bank: `Qualcosa di strano. La banca impiega troppo tempo per elaborare il pagamento. Contatta support@meteo-parapente.com e invia le seguenti informazioni :`,
    close: `Chiudi`,
    go_to_mp: `Vai a Meteo-Parapente`,
    login: `Login`,
    password: `Password`,
    here_is_code: `Qui c'è il tuo codice. Non perderlo!`,
    thank_for_payment: `Grazie per il pagamento`,
    sent_code: `Ti abbiamo inviato il tuo codice di accesso`,
    check_spam: `Se non hai ricevuto nulla, controlla la tua cartella spam.<br>Se non hai ancora ricevuto nulla 10 minuti dopo il pagamento, non effettuare un secondo pagamento e contattaci a support@meteo&#8209;parapente.com`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>