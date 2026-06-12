let div = document.getElementById('resultado')
let palavras = ['carro', 'bicicleta', 'avião', 'navio', 'ônibus', 'moto', 'cadarço', 'arrumado', 'ônibus escolar', 'caminhão']
let filtro = 'ar'
let palavrasFiltradas = []

for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i]
    if (palavra.includes(filtro)) {
        palavrasFiltradas.push(palavra)
    }
}
div.innerHTML = palavrasFiltradas.join(', ')
