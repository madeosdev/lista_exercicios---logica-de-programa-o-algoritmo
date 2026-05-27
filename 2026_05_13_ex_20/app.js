let div = document.getElementById('resultado')
let nomes = ['Maria', 'João', 'Ana', 'Pedro', 'Lucas']
let apelidos = []

for (let i = 0; i < nomes.length; i++) {
    let nome = nomes[i]
    let apelido = nome.substring(0,3) + nome.length
    apelidos.push(apelido)
}

div.innerHTML = apelidos.join(', ')
