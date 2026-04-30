let resultado = document.getElementById('resultado')
let num = parseInt(prompt('Digite um número: '))
let tabuada = 0

for (let i = 0; i <= 10; i++) {
    tabuada = num*i
    resultado.innerHTML += `${num} x ${i} = ${tabuada} <br>`
}
