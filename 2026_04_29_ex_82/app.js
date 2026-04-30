let resultado = document.getElementById('resultado')
let nota = 0
let soma_nota = 0
let i = 1

while (i <= 5) {
    nota = parseFloat(prompt('Digite a nota do aluno'))
    soma_nota += nota
    i++
}
let media = soma_nota/5
resultado.innerHTML = `A média do aluno é: ${media.toFixed(1)}`
