let num1 = parseInt(prompt('Digite um número: '))
let num2 = parseInt(prompt('Digite outro número: '))
let num1_up = num1 + 1
let num2_down = num2 - 1
document.getElementById('resultado').innerHTML = `Os números digitados foram ${num1} e ${num2}.`
document.getElementById('resultado2').innerHTML = `${num1} + 1 = ${num1_up}`
document.getElementById('resultado3').innerHTML = `${num2} - 1 = ${num2_down}`
