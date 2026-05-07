let div = document.getElementById('resultado')
let frutas = ['banana', 'maçã', 'laranja', 'uva', 'abacaxi']

for (let i = 0; i < frutas.length; i++) {
    div.innerHTML += `<p>${i} - ${frutas[i]}</p>`
}
