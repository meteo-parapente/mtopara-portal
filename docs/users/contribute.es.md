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
title: Suscríbase
og:
  title: ¡Gana el ala de parapente que elijas!
  description: Suscribirse a Meteo-Parapente antes del 30 de marzo
  image: https://portal.meteo-parapente.com/img/voile.png
---

# ¡Suscribirse a Meteo-Parapente!
 
- Disfruta de las mejores previsiones cada día. ¡Meteo-Parapente puede existir gracias a ti!
 
- Apoya el desarrollo de una herramienta de calidad accesible a todos los pilotos
 
- Obtenga una entrada gratuita a los entrenamientos meteorológicos locales y a los encuentros de usuarios
 
- Reúnase conmigo una vez al mes para discutir nuevas características y mejoras

- 👋 <a href="/es/about-us/" target="_blank">Descubra quiénes somos</a>

<br>

<script>
  const mp_form_locale = {
    locale: `es`,
    locale_paypal: `es_ES`,
    default_country: `ES`,
    product_contributor_title: `Colaborador`,
    product_contributor_description: `3€ al mes <small>(12 meses)</small>`,
    product_supporter_title: `Seguidor`,
    product_supporter_description: `5€ al mes <small>(12 meses)</small>`,
    product_small_text: `Pago único de €### durante 12 meses. No hay renovación automática.`,
    header_coordinates: `Acerca de ti`,
    email: `Correo electrónico`,
    mobile_phone: `Teléfono móvil`,
    mobile_phone_small_text: `Sólo se utiliza para recibir tu código de acceso y para restablecerlo en caso de que lo pierdas. Si no tiene un teléfono móvil, póngase en contacto con support@meteo-parapente.com`,
    payment_method: `Método de pago`,
    payment_card: `Tarjeta de crédito / Tarjeta de débito`,
    payment_proceed: `Proceder al pago ►`,
    terms_approval: `Al proceder al pago, usted acepta y consiente las <a href="/es/legal/#terms" target="_blank">Condiciones Generales de Uso de Meteo-Parapente</a>, las <a href="/es/legal/#membership" target="_blank">Condiciones Específicas de Suscripción</a> y la <a href="/es/privacy/" target="_blank">Política de privacidad</a>. `,
    error_email: `La dirección de correo electrónico no es válida`,
    error_phone: `El número de teléfono no es válido`,
    error_request: `Error: no se puede alcanzar el servidor. Compruebe su conexión e inténtelo de nuevo`,
    need_help: `¿Necesita ayuda?`,
    email_us: `Escriba un correo electrónico a <strong>support@meteo-parapente.com</strong>`,
    payment_declined: `Su banco ha rechazado el pago. Por favor, inténtelo de nuevo.`,
    payment_sepa: `Transferencia bancaria SEPA`,
    note_transfer: `<u>Pago por transferencia bancaria:</u> <strong>En la siguiente página, le daremos una referencia de pago</strong> (Example :  RF12-1234-1234-1234). <strong>Debe indicar la referencia al hacer la transferencia</strong>.  Si se olvida de indicar la referencia, el dinero se devolverá automáticamente y no se podrá activar su acceso.`,
    note_paypal: `<u>Pago por PayPal :</u> Para su comodidad, ofrecemos PayPal. Pero si puede, le recomendamos que utilice otro método de pago. Las tarifas que cobra PayPal son excesivamente altas. Estoy seguro de que prefiere ayudar a Meteo-Parapente que a PayPal :)`,
    email_confirm: `No hay ningún error en mi dirección de correo electrónico. Lo he comprobado dos veces.`,
    error_email_confirm: `Por favor, confirme su correo electrónico`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>