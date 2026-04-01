let resultado = document.getElementById('resultado')
let altura = parseFloat(prompt('Qual é a sua altura?(em metros): '))
let peso = parseFloat(prompt('Qual é o seu peso?(em kg): '))
let imc = peso/(altura*altura)
resultado.innerHTML = `O seu IMC é ${imc.toFixed(1)}.`
console.log(`O seu IMC é ${imc.toFixed(1)}.`)
