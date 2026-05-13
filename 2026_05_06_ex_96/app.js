let div = document.getElementById('resultado')
let palavras = ['sol', 'lua', 'estrela', 'nuvem', 'chuva', 'vento', 'neve', 'raio', 'arco', 'tempestade']
let pares = []

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length % 2 === 0) {
        pares.push(palavras[i])
    }
}
div.innerHTML = `Palavras com quantidade par de letras: ${pares.length} `
