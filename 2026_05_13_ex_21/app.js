let div = document.getElementById('resultado')
let palavras = ['Eu', 'Amo', 'programação', 'em', 'JavaScript']
let frase = ''

for (let i = 0; i < palavras.length; i++) {
    frase += palavras[i] + ' '
}

div.innerHTML = frase