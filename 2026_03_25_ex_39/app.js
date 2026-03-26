let resultado = document.getElementById('resultado')
let raio_menor = parseFloat(prompt('Tamanho do raio da circunferência menor(cm): '))
let raio_maior = parseFloat(prompt('Tamanho do raio da circunferência maior(cm): '))
let circun_maior = Math.PI*Math.pow(raio_maior, 2)
let circun_menor = Math.PI*Math.pow(raio_menor, 2)
let area_total = (circun_maior - circun_menor)
resultado.innerHTML = `A área total da coroa será ${area_total.toFixed(1)} cm.`
