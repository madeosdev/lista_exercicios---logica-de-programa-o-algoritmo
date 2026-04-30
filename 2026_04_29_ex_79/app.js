let resultado = document.getElementById('resultado')
let num = parseFloat(prompt('Digite um número: '))
let sequencia = num

for (let i = 0; i < 10; i++) {
    resultado.innerHTML += sequencia + ' '
    sequencia += num
}