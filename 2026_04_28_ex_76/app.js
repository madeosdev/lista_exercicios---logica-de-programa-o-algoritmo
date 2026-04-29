let resultado = document.getElementById('resultado')
let i = 0
let soma = 0

while (i<=100) {
    soma += i
    i++
}

resultado.innerHTML = `A soma dos números de 0 a 100 é ${soma}`
