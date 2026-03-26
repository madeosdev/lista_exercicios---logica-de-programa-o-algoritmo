let resultado = document.getElementById('resultado')
let num1 = parseFloat(prompt('Digite o primeiro número: '))
let num2 = parseFloat(prompt('Digite o segundo número: '))
let num3 = parseFloat(prompt('Digite o terceiro número: '))
let num4 = parseFloat(prompt('Digite o quarto número: '))
let media = ((num1*1) + (num2*2) + (num3*3) + (num4*4))/10
resultado.innerHTML = `A média dos números ${num1}, ${num2}, ${num3}, ${num4} é ${media}.`

