let div = document.getElementById('resultado')
let frase = 'curso de algoritmos e lógica de programação'
let fraseSeparada = frase.split(' ')
let fraseBonita = ''

for (let i = 0; i < fraseSeparada.length; i++) {
    let palavra = fraseSeparada[i]
    let primeiraLetra = ''
    if (palavra.length > 0) {
        primeiraLetra = palavra[0].toUpperCase()
    }
    let palavraBonita = primeiraLetra + palavra.slice(1)
    fraseBonita += palavraBonita + ' '
}
div.innerHTML = fraseBonita