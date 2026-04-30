let resultado = document.getElementById('resultado')
let num = parseInt(prompt('Digite um número: '))
let i = 1
let fatorial = 1

while (i <= num) {
    fatorial *= i
    i++
}

resultado.innerHTML = `O fatorial de ${num} é ${fatorial}.`
