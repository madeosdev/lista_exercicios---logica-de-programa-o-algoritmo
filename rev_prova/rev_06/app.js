let div = document.getElementById('resultado')
let palavras = ['carro', 'casa', 'cachorro', 'gato', 'elefante', 'girafa', 'leão', 'tigre', 'urso', 'coelho']
let filtrado = []

for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i]
    if (palavra.length >= 5) {
        filtrado.push(palavra)
    }
}
div.innerHTML = filtrado.join(', ')
