let resultado = document.getElementById('resultado')
let raio_esfera = parseFloat(prompt('Raio da Esfera(cm): '))
let area_esfera = 4*Math.PI*Math.pow(raio_esfera, 2)
let volume_esfera = ((4*Math.PI*Math.pow(raio_esfera, 3))/3)
resultado.innerHTML = `A área da esfera será ${area_esfera.toFixed(1)} cm.<br>O volume da esfera será ${volume_esfera.toFixed(1)} cm.`
