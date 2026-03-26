let resultado = document.getElementById('resultado')
let area_base = parseFloat(prompt('Tamanho da circunferência do cilindro(cm): '))
let altura = parseFloat(prompt('Tamanho da altura do cilindro(cm): '))
let volume = area_base*altura
resultado.innerHTML = `O volume do cilindro é ${volume} cm.`
