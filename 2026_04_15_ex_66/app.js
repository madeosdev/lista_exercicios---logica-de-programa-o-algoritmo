let resultado = document.getElementById('resultado')
let num1 = parseFloat(prompt('Digite o primeiro número: '))
let num2 = parseFloat(prompt('Digite o segundo número: '))
let num3 = parseFloat(prompt('Digite o terceiro número: '))

if (num1 === 0) {
    resultado.innerHTML = 'Primeiro número: Nulo'
}else if (num1 > 0) {
    resultado.innerHTML = 'Primeiro número: Positivo'
}else {
    resultado.innerHTML = 'Primeiro número: Negativo'
}
if (num2 === 0) {
    resultado.innerHTML += '<br>Segundo número: Nulo'
}else if (num2 > 0) {
    resultado.innerHTML += '<br>Segundo número: Positivo'
}else {
    resultado.innerHTML += '<br>Segundo número: Negativo'
}
if (num3 === 0) {
    resultado.innerHTML += '<br>Terceiro número: Nulo'
}else if (num3 > 0) {
    resultado.innerHTML += '<br>Terceiro número: Positivo'
}else {
    resultado.innerHTML += '<br>Terceiro número: Negativo'
}

let lista_numeros = [num1, num2, num3]
let maior_numero = Math.max(...lista_numeros)
resultado.innerHTML += `<br>O maior número é: ${maior_numero}`
