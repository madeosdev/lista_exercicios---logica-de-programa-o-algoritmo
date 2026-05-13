let div = document.getElementById('resultado')
let palavras = ['FATEC', 'GUARATINGUETÁ', 'ALGORITMOS', 'PROGRAMAÇÃO', 'JAVA', 'PYTHON']
let soma = 0

for (let i = 0; i < palavras.length; i++) {
    soma += palavras[i].length
}
let divisao = soma/palavras.length
div.innerHTML = `A média de caracteres por palavra é: ${divisao.toFixed(2)}`
