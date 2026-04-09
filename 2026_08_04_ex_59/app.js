let resultado = document.getElementById('resultado')
let numero = parseFloat(prompt('Digite um número: '))
if (numero%2 == 0) {
    resultado.innerHTML = `Você digitou o número ${numero}, e quadrado dele é ${numero**2}.`
} else {
    resultado.innerHTML = `Você digitou o número ${numero}, e cubo dele é ${numero**3}.`
}