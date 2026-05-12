let div = document.getElementById('resultado')
let email = prompt('Digite um e-mail: ')
let nome_usuario = email.substring(0, email.indexOf('@'))
div.innerHTML = `Nome de usuário: ${nome_usuario}`
