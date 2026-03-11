let lado = parseFloat(prompt('Digite o tamanho do lado de um quadrado: '))
let area = lado*lado
let perimetro = lado*4
document.getElementById('resultado').innerHTML = `A área deste quadrado é ${area} metros quadrados.`
document.getElementById('resultado2').innerHTML = `O perímetro deste quadrado é ${perimetro} metros.`
