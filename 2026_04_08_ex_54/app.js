let resultado = document.getElementById('resultado')
let num = parseInt(prompt("Digite um número: "))
if (num%2 == 0) {
    resultado.innerHTML = `O número ${num} é par.`
} else {
    resultado.innerHTML = `O número ${num} é ímpar.`
}
