let div = document.getElementById('resultado')
let palavra = 'Algoritmos'
let letra = 'i'
let letra_pos = palavra.indexOf(letra)

if (letra_pos != -1) {
    div.innerHTML = `A letra ${letra} está na posição ${letra_pos}.`
} else {
    div.innerHTML = `A letra ${letra} não foi encontrada.`
}
