let div = document.getElementById('resultado')
let vogais = ['a', 'e', 'i', 'o', 'u']
let frase = prompt('Digite uma frase: ')
let frasemodificada = frase

for (let i = 0; i < frase.length; i++) {
    if (vogais.includes(frase[i].toLowerCase())) {
        frasemodificada = frasemodificada.replace(frase[i], '*')
    }
}
div.innerHTML = `A frase original é: ${frase} <br> A frase modificada é ${frasemodificada}`
