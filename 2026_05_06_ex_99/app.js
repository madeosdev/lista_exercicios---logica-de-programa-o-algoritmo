let div = document.getElementById('resultado')
let palavra = prompt('Digite uma palavra: ')

for (let i = palavra.length - 1; i >= 0; i--) {
    div.innerHTML += palavra[i]
}
