let div = document.getElementById('resultado')
let palavras = ['arroz', 'feijão', 'macarrão', 'carne', 'frango', 'peixe', 'batata', 'cenoura', 'alface', 'tomate']
let palavras_impares = []

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length % 2 === 1) {
        palavras_impares.push(palavras[i])
    }
}
div.innerHTML = `<p>As palavras de tamanho ímpar: ${palavras_impares.join(', ')} </p>`
