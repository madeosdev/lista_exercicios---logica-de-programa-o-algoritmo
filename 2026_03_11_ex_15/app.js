let num1 = parseInt(prompt('Digite o primeiro número: '))
let num2 = parseInt(prompt('Digite o segundo número: '))
let num3 = parseInt(prompt('Digite o terceiro número: '))
let num4 = parseInt(prompt('Digite o quarto número: '))
let num5 = parseInt(prompt('Digite o quinto número: '))
let soma = num1 + num2 + num3 + num4 + num5
document.getElementById('resultado').innerHTML = `Você digitou os números: ${num1}, ${num2}, ${num3}, ${num4}, ${num5}. A soma desses números é ${soma}.`