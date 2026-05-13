let div = document.getElementById('resultado')
let nomes = ['Joana', 'Maria', 'João', 'Marcos', 'Pedro', 'Ana', 'Amanda', 'Carlos', 'Paulo', 'Luana']
let nomes_a = []

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i][0].toLowerCase() === 'a') {
        nomes_a.push(nomes[i])
    }
}
div.innerHTML = `Nomes que começam com 'a': ${nomes_a.length}<br>Nomes: ${nomes_a.join(', ')}.`
