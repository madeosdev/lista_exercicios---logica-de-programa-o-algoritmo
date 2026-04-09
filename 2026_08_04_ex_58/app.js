let resultado = document.getElementById('resultado')
let num1 = parseFloat(prompt('Digite a primeira nota: '))
let num2 = parseFloat(prompt('Digite a segunda nota: '))
let num3 = parseFloat(prompt('Digite a terceira nota: '))
let media = (num1 + num2 + num3)/3
if (media >= 7.5) {
    resultado.innerHTML = `A média é ${media.toFixed(2)}. Parabéns, você foi aprovado!`
} else {
    resultado.innerHTML = `A média é ${media.toFixed(2)}. Infelizmente, você foi reprovado.`
}
