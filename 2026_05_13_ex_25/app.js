let div = document.getElementById('resultado')
let palavra = 'Javascript'
let frases = ['javascript é uma linguagem de programação',
              'python é muito utilizada para desenvolvimento web',
              'Javascript é uma linguagem de script',
              'C é fácil de aprender']
let contador = 0
let frases_filtradas = []

for (let i = 0; i < frases.length; i++) {
    if (frases[i].toLowerCase().includes(palavra.toLowerCase())) {
        contador++
        frases_filtradas.push(frases[i])
    }
}
div.innerHTML = `Frases encontradas: ${contador}<br>Frases: ${frases_filtradas.join('<br>')}`
