let resultado = document.getElementById('resultado')
let num = parseFloat(prompt('Digite um número: '))
if (num < 0) {
    resultado.innerHTML = 'Número inválido. Insira apenas números positivos.'
} else if (num%2 === 0) {
    resultado.innerHTML = 'O número é par.'
} else if (num%2 !== 0) {
    resultado.innerHTML = 'O número é ímpar.'
}
