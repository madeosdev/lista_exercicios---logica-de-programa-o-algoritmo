let div = document.getElementById('resultado')
let palavras = ['Sol', 'Planeta', 'Lua', 'Estrela', 'Via Lactea', 'Galáxia', 'Nebulosa', 'Asteroide']
let maior_palavra = ''

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length > maior_palavra.length) {
        maior_palavra = palavras[i]
    }
}
div.innerHTML = `A maior palavra é: ${maior_palavra}`
