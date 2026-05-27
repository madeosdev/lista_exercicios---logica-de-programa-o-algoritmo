let div = document.getElementById('resultado')
let trecho = 'ar'
let palavras = ['arara', 'carro', 'barco', 'casa', 'gato', 'arroz', 'cachorro', 'sapato', 'cavalo']
let palavras_ar = []

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].indexOf(trecho) !== -1) {
        palavras_ar.push(palavras[i])
    }
}
div.innerHTML = palavras_ar.join(', ')
