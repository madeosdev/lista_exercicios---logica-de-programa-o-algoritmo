let resultado = document.getElementById('resultado')
let num = parseFloat(prompt('Digite um número: '))
if (num <= 0) {
    resultado.innerHTML = 'Número inválido.'
} else if (num%2 === 0) {
    resultado.innerHTML = `Número par. <br>Elevado ao quadrado: ${Math.pow(num, 2)}<br>Elevado ao cubo: ${Math.pow(num, 3)}<br>Elevado a sétima: ${Math.pow(num, 7)}`
} else if (num%2 !== 0) {
    resultado.innerHTML = `Número ímpar.<br>Raiz quadrada: ${Math.sqrt(num).toFixed(1)}<br>Raiz cúbica: ${Math.cbrt(num).toFixed(1)}<br>Raiz sétima: ${Math.pow(num,1/7).toFixed(1)}`
}
