let resultado = document.getElementById('resultado')
let nota1 = parseFloat(prompt('Digite a primeira nota:'))
let nota2 = parseFloat(prompt('Digite a segunda nota: '))
let nota3 = parseFloat(prompt('Digite a terceira nota: '))
let nota4 = parseFloat(prompt('Digite a quarta nota: '))
let nota5 = parseFloat(prompt('Digite a quinta nota: '))
let media = (nota1 + nota2 + nota3 + nota4 + nota5)/5
resultado.innerHTML = `A média do aluno foi: ${media.toFixed(1)}`
