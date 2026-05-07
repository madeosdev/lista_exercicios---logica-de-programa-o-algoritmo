let div = document.getElementById('resultado')
let palavra = 'Fatec'
let um_letra = palavra[0]
let last_letra = palavra[palavra.length - 1]
let minus = palavra.toLowerCase()
div.innerHTML = `A primeira letra da palavra é: ${um_letra}; <br> A última letra da palavra é: ${last_letra}; <br> A palavra em letras minúsculas é: ${minus}.`
