let resultado = document.getElementById('resultado')
let nota1 = parseFloat(prompt('Digite a primeira nota: '))
let nota2 = parseFloat(prompt('Digite a segunda nota: '))
let media = (nota1 + nota2)/2
if (media > 10 || media < 0) {
    resultado.innerHTML = `Nota inválida.`
} else if (media >= 7) {
    resultado.innerHTML = `A média é ${media.toFixed(2)} e o aluno está aprovado.`
} else {
    resultado.innerHTML = `A média é ${media.toFixed(2)} e o aluno está reprovado.`
}
