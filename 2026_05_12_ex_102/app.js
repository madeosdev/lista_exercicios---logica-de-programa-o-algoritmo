let div = document.getElementById('resultado')
let frase = '  logica de programacao  '
div.innerHTML = `${frase.trim()}<br>${frase.trim().split(' ')}<br>${frase.trim().split(' ').length} palavras.`
