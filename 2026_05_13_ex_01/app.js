let div = document.getElementById('resultado')
let palavras = ['banana', 'uva', 'melancia', 'abacaxi', 'laranja', 'morango', 'pera', 'manga']
let maior_palavra = palavras[0]
let menor_palavra = palavras[0]

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length > maior_palavra.length) {
        maior_palavra = palavras[i]
    }
    if (palavras[i].length < menor_palavra.length) {
        menor_palavra = palavras[i]
    }
}
div.innerHTML = `A maior palavra é: ${maior_palavra} <br> A menor palavra é: ${menor_palavra}`
