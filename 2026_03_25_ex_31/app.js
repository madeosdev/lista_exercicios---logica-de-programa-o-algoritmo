let resultado = document.getElementById('resultado')
let numero = parseFloat(prompt('Digite um número:'))
raiz_num = Math.sqrt(numero)
resultado.innerHTML = `A raiz quadrada de ${numero} é ${raiz_num}.`
