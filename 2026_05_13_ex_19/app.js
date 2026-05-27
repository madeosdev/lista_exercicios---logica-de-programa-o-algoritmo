let div = document.getElementById('resultado')
let frases = ['O rato roeu a roupa do rei de Roma', 'A aranha arranha a rã', 'O tigre trincou o trigo no trigal', 'A vaca malhada foi molhada por outra vaca molhada']
let espaço = ' '

for (let i = 0; i < frases.length; i++) {
    let frase = frases[i]
    div.innerHTML += `<p>${frase}</p><br>`
    div.innerHTML += `Quantidade de caracteres na frase: ${frase.length}<br>`
    let contador = 0
    for (let j = 0; j < frase.length; j++) {
            if (frase[j] === espaço) {
                contador++
            }
        }
    

    div.innerHTML += `Quantidade de espaços na frase: ${contador}<br><br>`
}
