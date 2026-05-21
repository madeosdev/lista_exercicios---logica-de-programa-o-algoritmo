let div = document.getElementById('resultado')
let palavras = ['FATEC', 'SÃO PAULO', 'CURSO DE ANÁLISE E DESENVOLVIMENTO DE SISTEMAS', 'ALGORITMOS E LÓGICA DE PROGRAMAÇÃO', 'SISTEMAS DE INFORMAÇÃO']
let palavras_escolhidas = []

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i][0].toLowerCase() === 's') {
        palavras_escolhidas.push(palavras[i])
    }
}
div.innerHTML = `As palavras que começam com 'S' são: ${palavras_escolhidas.join(', ')}`
