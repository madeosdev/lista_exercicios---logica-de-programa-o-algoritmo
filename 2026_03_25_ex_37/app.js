let resultado = document.getElementById('resultado')
let base_menor = parseFloat(prompt('Tamanho da base menor do Trapézio(cm): '))
let base_maior = parseFloat(prompt('Tamanho da base maior do Trapézio(cm):'))
let altura = parseFloat(prompt('Altura do Trapézio(cm): '))
let area = ((base_menor + base_maior)*altura)/2
resultado.innerHTML = `A área do trapézio é ${area} cm.`
