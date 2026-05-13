let div = document.getElementById('resultado')
let palavras = ['Carro', 'Casa', 'Computador', 'Cachorro', 'Cadeira', 'Copo', 'Caneta', 'Caderno']
let curtas = []
let medias = []
let longas =[]

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length <= 4) {
        curtas.push(palavras[i])
    } else if (palavras[i].length <= 7) {
        medias.push(palavras[i])
    } else {
        longas.push(palavras[i])
    }
}
div.innerHTML = `<p>Palavras curtas: ${curtas.join(', ')}<br>Número de palavras curtas: ${curtas.length}</p><p>Palavras médias: ${medias.join(', ')}<br>Número de palavras médias: ${medias.length}</p><p>Palavras longas: ${longas.join(', ')}<br>Número de palavras longas: ${longas.length}</p>`