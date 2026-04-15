let resultado = document.getElementById('resultado')
let num1 = parseFloat(prompt('Digite o primeiro número: '))
let num2 = parseFloat(prompt('Digite o segundo número: '))
let soma = num1 + num2

if (soma > 10) {
    resultado.innerHTML = `A soma de ${num1} e ${num2} é ${soma}.`
    let raizcubo_soma = Math.cbrt(soma)
    resultado.innerHTML += `<br>A raiz cúbica da soma é ${raizcubo_soma.toFixed(2)}.`
} else {
    resultado.innerHTML = `A soma de ${num1} e ${num2} é ${soma}.`
}