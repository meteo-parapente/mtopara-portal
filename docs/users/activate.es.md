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
    locale: 'es',
    fullname: `Apellido y Nombre`,
    company: `Empresa <small>(opcional)</small>`,
    address: `Dirección`,
    city: `Ciudad`,
    country: `País`,
    submit: `Subir ►`,
    need_help: `¿Necesita ayuda?`,
    email_us: `Escribir un correo electrónico a <strong>support@meteo-parapente.com</strong>`,
    error_request: `Error: no se puede alcanzar el servidor. Compruebe su conexión e inténtelo de nuevo`,
    error_missing_params: `<p>ERROR: Token no es válido o ha caducado.</p><p>Si ya ha activado su acceso y ha recibido su factura por correo electrónico, puede ignorar este mensaje.</p><p>Si no es así, póngase en contacto con support@meteo-parapente.com y envíe la siguiente información :</p>`,
    form_input_error: `Rellene el formulario`,
    thank_you: `¡Gracias!`,
    access_activated: `Su acceso está activado.`,
    download_invoice: `Por favor, descargue la factura para sus registros:`,
    invoice: `🧾 Factura`,
    enjoy: `Ya puedes cerrar esta página e ir a disfrutar de Meteo-Parapente.`,
    might_login: `Cuando Meteo-Parapente te pida que te <i>ingreses o te unas al club</i>, haz clic en <i>Ya soy colaborador</i> e introduce tu código de acceso.`,
    last_step: `Un último paso...`,
    enter_address: `Para activar su código de acceso, introduzca su dirección.`,
    address_privacy: `Estamos obligados por ley a recoger su dirección para los registros contables. No la utilizamos para ningún otro propósito. Puede leer nuestra <a href="/es/privacy/" target="_blank">política de privacidad</a>.`,
    wait_bank: `Esperando a que el banco procese el pago...`,
    error_bank: `Algo está raro. El banco tarda demasiado en procesar el pago. Por favor, póngase en contacto con support@meteo-parapente.com y envíe la siguiente información :`,
    close: `Cerrar`,
    go_to_mp: `Ir a Meteo-Parapente`,
    login: `Login`,
    password: `Contraseña`,
    here_is_code: `Aquí está tu código. ¡No lo pierdas!`,
    thank_for_payment: `Gracias por su pago`,
    sent_code: `Le hemos enviado su código de acceso`,
    check_spam: `Si no ha recibido nada, revise su carpeta de correo no deseado.<br>Si aún no ha recibido nada 10 minutos después del pago, no haga un segundo pago y contáctenos en support@meteo&#8209;parapente.com`
  };
</script>
<div id="app">
  <p v-if="!ready"><img src="/img/load.gif" class="loading" alt="⏳ loading, please wait..." /></p>
</div>