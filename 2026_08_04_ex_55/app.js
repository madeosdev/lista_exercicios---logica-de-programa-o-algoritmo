let resultado = document.getElementById('resultado')
let num1 = parseInt(prompt('Digite o primeiro número: '))
let num2 = parseInt(prompt('Digite o segundo número: '))
if (num1 >num2) {
    resultado.innerHTML = `O número ${num1} é maior que o número ${num2}.`
} else if (num1 === num2) {
    resultado.innerHTML = `Os números são iguais.`
} else {
    resultado.innerHTML = `O número ${num2} é maior que o número ${num1}.`
}
