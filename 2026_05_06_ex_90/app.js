let div = document.getElementById('resultado')
let frase = 'aprender logica de programação e divertido'
let frase_array = frase.split(' ')

console.log(frase)
div.innerHTML = `Existem ${frase_array.length} palavras na frase, e a terceira palavra é ${frase_array[2]}.`
