let div = document.getElementById('resultado')
let palavras = ['Arroz', 'Feijão', 'Macarrão', 'Carne', 'Frango', 'Peixe', 'Leite', 'Pão', 'Queijo', 'Manteiga']
let palavras_pequenas = []

for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i]
    if (palavra.length <= 5) {
        palavras_pequenas.push(palavra)
    }
}
div.innerHTML = `Todas as palavras: ${palavras.join(', ')}<br>Palavras com menos de 5 letras: ${palavras_pequenas.join(', ')}`
