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

<div style="border-left: 2px #303fa1 solid; padding-left: 10px; color: #303fa1;">
<h3>¡Un ala de parapente para ganar!</h3>

<p><strong>Para celebrar los 10 años de Meteo-Parapente, estamos organizando un gran concurso.</strong></p>

<p><strong>Gana el ala de tu elección, de la <a href="https://www.supair.com/voiles/#category_id_160" target="_blank">gama Solo SUPAIR</a>.</strong></p>

<p><strong>Para participar en el sorteo solo tienes que suscribirte antes del 30 de marzo.</strong></p>

<p>¿Aún no vuelas? Se puede canjear por un curso de iniciación de una semana.</strong></p>

<p><a href="/es/10years/">Ver detalles y normas ►</a></p>
</div>
<br>

<script>
  const mp_form_locale = {
    locale: `es`,
    default_country: `ES`,
    product_contributor_title: `Colaborador`,
    product_contributor_description: `3€ al mes <small>(12 meses)</small>`,
    product_supporter_title: `Seguidor`,
    product_supporter_description: `5€ al mes <small>(12 meses)</small>`,
    product_small_text: `Pago único de €### durante 12 meses. Sin renovación.`,
    header_coordinates: `Acerca de ti`,
    email: `Correo electrónico`,
    mobile_phone: `Teléfono móvil`,
    mobile_phone_small_text: `Sólo se utiliza para recibir tu código de acceso y para restablecerlo en caso de que lo pierdas. Si no tiene un teléfono móvil, póngase en contacto con support@meteo-parapente.com`,
    payment_method: `Método de pago`,
    payment_card: `Tarjeta de crédito / Tarjeta de débito`,
    payment_proceed: `Proceder al pago ►`,
    terms_approval: `Al hacer clic en "proceder al pago", usted acepta y consiente las <a href="/es/legal/#terms" target="_blank">Condiciones Generales de Uso de Meteo-Parapente</a>, las <a href="/es/legal/#membership" target="_blank">Condiciones Específicas de Suscripción</a> y la <a href="/es/privacy/" target="_blank">Política de privacidad</a>. `,
    error_email: `La dirección de correo electrónico no es válida`,
    error_phone: `El número de teléfono no es válido`,
    error_request: `Error: no se puede alcanzar el servidor. Compruebe su conexión e inténtelo de nuevo`,
    need_help: `¿Necesita ayuda?`,
    email_us: `Escriba un correo electrónico a <strong>support@meteo-parapente.com</strong>`,
    payment_declined: `Su banco ha rechazado el pago. Por favor, inténtelo de nuevo.`,
    payment_sepa: `Transferencia bancaria SEPA`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>