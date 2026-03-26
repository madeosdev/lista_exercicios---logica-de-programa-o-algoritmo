let resultado = document.getElementById('resultado')
let numero = parseFloat(prompt('Digite um número:'))
let raiz_quadrada = Math.sqrt(numero)
let raiz_cubica = Math.cbrt(numero)
resultado.innerHTML = `A raiz quadrada do número ${numero} é ${raiz_quadrada}.<br>`
resultado.innerHTML += `A raiz cúbica do número ${numero} é ${raiz_cubica}.`
