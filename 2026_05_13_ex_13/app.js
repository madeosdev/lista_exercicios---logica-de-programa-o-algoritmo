let div = document.getElementById('resultado')
let palavras = ['FATEC', 'SENAI', 'ETEC', 'UNIP', 'USP', 'UNESP', 'UNIFESP', 'UNIMEP', 'UNIVAP', 'UNIVESP']
let tamanho_palavras = []

for (let i = 0; i <palavras.length; i++) {
    tamanho_palavras.push(palavras[i].length)
}
div.innerHTML = `Palavras: ${palavras.join(', ')} <br>Tamanhos das palavras: ${tamanho_palavras.join(', ')}`
