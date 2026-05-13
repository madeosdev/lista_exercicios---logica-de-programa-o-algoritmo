let div = document.getElementById('resultado')
let palavra = prompt('Digite uma palavra: ')
let invertido = ''

for (let i = palavra.length - 1; i >= 0; i--) {
    invertido += palavra [i]
}

if (palavra === invertido) {
    div.innerHTML = `A palavra ${palavra} é um palíndromo.`
} else {
    div.innerHTML = `A palavra ${palavra} não é um palíndromo.`
}
