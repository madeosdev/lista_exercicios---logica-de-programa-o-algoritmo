let resultado = document.getElementById('resultado')
let lado = parseFloat(prompt('Lado do Triângulo da Base(cm): '))
let altura = parseFloat(prompt('Altura do Triângulo da Base(cm): '))
let base_triângulo = lado*3
let area_triangulo = (base_triângulo*altura)/2
let volume_prisma = area_triangulo*altura
resultado.innerHTML = `O volume do prisma será ${volume_prisma}cm.`
