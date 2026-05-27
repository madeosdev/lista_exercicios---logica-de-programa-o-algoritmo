let div = document.getElementById('resultado')
let palavras = ['carro', 'moto', 'bicicleta', 'ônibus', 'avião', 'navio', 'trem', 'metrô', 'barco', 'caminhão']
let palavras_pares = []
let palavras_impares = []

for (let i = 0; i <palavras.length; i++) {
    console.log(`Palavra ${i + 1}: ${palavras[i]}`)
    console.log (`Número de letras: ${palavras[i].length}`)
    if (palavras[i].length % 2 === 0) {
        palavras_pares.push(palavras[i])
        console.log(`Palavra ${i + 1} é par: ${palavras[i]}`)
    } else {
        palavras_impares.push(palavras[i])
        console.log(`Palavra ${i + 1} é ímpar: ${palavras[i]}`)
    }
}
div.innerHTML = `Nada para ver aqui... Veja o log do console!`
console.log(`Palavras de tamanho par: ${palavras_pares.length}`)
console.log(`Palavras de tamanho ímpar: ${palavras_impares.length}`)