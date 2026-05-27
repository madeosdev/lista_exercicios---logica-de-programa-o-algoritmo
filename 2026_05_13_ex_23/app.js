let div = document.getElementById('resultado')
let letra = prompt('Digite uma letra: ')
let palavras = ['amor', 'casa', 'carro', 'gato', 'cachorro', 'computador', 'celular', 'livro', 'mesa', 'cadeira']
let filtro_palavras = []

for (let i = 0; i <palavras.length; i++) {
    let palavra = palavras[i]
    if (palavra.substring(palavra.length - 1) === letra) {
        filtro_palavras.push(palavra)
    }
}
div.innerHTML = `As palavras que terminam com a letra ${letra} são: ${filtro_palavras.join(', ')}`