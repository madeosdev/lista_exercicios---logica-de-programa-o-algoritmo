let div = document.getElementById('resultado')
let frases = []

for (let i = 0; i < 3; i++) {
    let frase = prompt(`Digite a ${i + 1}ª frase: `)
    frases.push(frase)
}

for (let i = 0; i < frases.length; i++) {
    div.innerHTML += `<p>${frases[i].toUpperCase()}</p>`
    div.innerHTML += `<p>Número de caracteres: ${frases[i].length}</p>`
    div.innerHTML += `<p>Primeira palavra da frase: ${frases[i].split(' ')[0]}</p>`
}
