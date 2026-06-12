let div = document.getElementById('resultado')
let palavras = ['banana', 'abacaxi', 'laranja', 'uva', 'melancia', 'morango', 'pera', 'kiwi', 'manga', 'caju']
let maior_palavra = palavras[0]
let menor_palavra = palavras[0]

for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i]
    if (palavra.length > maior_palavra.length) {
        maior_palavra = palavra
    } else if (palavra.length < menor_palavra.length) {
        menor_palavra = palavra
    }
}
div.innerHTML = `A maior palavra é: ${maior_palavra}<br>A menor palavra é: ${menor_palavra}`
