let div = document.getElementById('resultado')
let palavra = 'japonesa'
let vogais = ['a', 'e', 'i', 'o', 'u']
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
let contadorVogais = 0
let contadorConsoantes = 0

for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i])) {
        contadorVogais++
    } else if (consoantes.includes(palavra[i])) {
        contadorConsoantes++
    }
}
div.innerHTML = `Palavra: ${palavra}<br>Vogais: ${contadorVogais}<br>Consoantes: ${contadorConsoantes}`
