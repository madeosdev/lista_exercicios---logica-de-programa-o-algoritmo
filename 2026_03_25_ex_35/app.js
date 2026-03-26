let resultado = document.getElementById('resultado')
let raio = parseFloat(prompt('Digite o tamanho do raio (cm): '))
let area = Math.PI*Math.pow(raio, 2)
let perimetro = 2*Math.PI*raio
resultado.innerHTML = `O valor do raio é ${raio} cm.<br>O valor da área da circunferência é ${area.toFixed(2)} cm.<br>O valor do perímetro da circunferência é ${perimetro.toFixed(2)} cm.`
