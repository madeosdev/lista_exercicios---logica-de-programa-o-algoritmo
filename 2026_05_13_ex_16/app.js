let div = document.getElementById('resultado')
let frase = 'curso de algoritmo e lógica de programação'
let frase_dividida = frase.split(' ')

for (let i = 0; i < frase_dividida.length; i++) {
    let primeiraLetra = frase_dividida[i][0].toUpperCase()
    let restoLetras = frase_dividida[i].slice(1)
    div.innerHTML += primeiraLetra + restoLetras + ' '
}
