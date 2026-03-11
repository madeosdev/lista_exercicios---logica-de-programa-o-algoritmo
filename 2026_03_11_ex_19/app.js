let base = parseFloat(prompt('Digite a base do retângulo: '))
let altura = parseFloat(prompt('Digite a altura do retângulo: '))
let area = base*altura
let perimetro = (base*2) + (altura*2)
document.getElementById('resultado').innerHTML = `A base do retângulo é ${base} metros e a altura do retângulo é ${altura} metros.`
document.getElementById('resultado2').innerHTML = `A área do retângulo é ${area} metros quadrados e o perímetro do retângulo é ${perimetro} metros.`
