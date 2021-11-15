---
hide: footer,edit,toc,search,navigation
---

# Paiement par chèque 🇫🇷

## Comment procéder ?

Envoyez un chèque de <span id="amount"></span> €, à l'ordre de :

Meteo-Parapente<br>
16 rue Alice Eynard<br>
73100 Aix-les-Bains

Au dos du chèque, indiquez votre numéro de téléphone portable ainsi que votre adresse email <u>en lettres majuscules, de manière très lisible</u>.

Votre accès sera activé dans les 15 jours suivants la réception du chèque. Vous recevrez un SMS et un email pour vous en avertir.

Merci !

---

<a id="back" class="md-typeset md-button">◂ retour aux autres moyens de paiement</a>

<script>
  const getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, '\\$&')
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
  }
  
  const product = getParameterByName('product') == 'supporter' ? 'supporter' : 'contributor'
  const amount = product == 'supporter' ? 60 : 36
  document.getElementById('amount').innerText = amount
  const email = getParameterByName('email') || ''
  const phone = getParameterByName('phone') || ''
  
  document.getElementById('back').href = `../contribute/?email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&product=${product}#paymentMethod`
  
</script>