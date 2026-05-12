let div = document.getElementById('resultado')
let palavra = prompt('Digite uma palavra: ')
let letras = palavra.split('')
let qntd_vogais = 0

for (let i = 0; i < letras.length;i++) {
    if (letras[i].toLowerCase() == 'a' || letras[i].toLowerCase() == 'e' || letras[i].toLowerCase() == 'i' || letras[i].toLowerCase() == 'o' || letras[i].toLowerCase() == 'u') {
        qntd_vogais++
    } 
}
div.innerHTML = `Palavra: ${palavra} <br> Vogais encontradas: ${qntd_vogais}`
