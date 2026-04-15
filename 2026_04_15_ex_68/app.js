let resultado = document.getElementById('resultado')
let num1 = parseFloat(prompt('Digite o primeiro número: '))
let num2 = parseFloat(prompt('Digite o segundo número: '))
let num3 = parseFloat(prompt('Digite o terceiro número: '))
let soma_quadrado = (Math.pow(num1, 2)) + ((Math.pow(num2, 2))) + (Math.pow(num3, 2))
resultado.innerHTML = `A soma dos quadrados dos números é ${soma_quadrado.toFixed(2)}.`
if (soma_quadrado%2 === 0) {
    resultado.innerHTML += '<br>O resultado é par.'
} else {
    resultado.innerHTML += '<br>O resultado é ímpar.'
}
