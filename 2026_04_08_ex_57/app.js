let resultado = document.getElementById('resultado')
let nota1 = parseFloat(prompt('Digite a primeira nota:'))
let nota2 = parseFloat(prompt('Digite a segunda nota:'))
let nota3 = parseFloat(prompt('Digite a terceira nota:'))
let nota4 = parseFloat(prompt('Digite a quarta nota:'))
let media = ((nota1*3) + (nota2*5) + (nota3*6) + (nota4*6))/20
if (media >= 6) {
    resultado.innerHTML = `A média do aluno é ${media.toFixed(2)}. O aluno foi aprovado.`
} else {
    resultado.innerHTML = `A média do aluno é ${media.toFixed(2)}. O aluno foi reprovado.`
}
