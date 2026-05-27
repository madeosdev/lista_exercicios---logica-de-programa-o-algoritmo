let div = document.getElementById('resultado')
let nomes = ['Maria Souza', 'João Silva', 'Ana Pereira', 'Carlos Oliveira', 'Fernanda Costa']
let caracteres = parseInt(prompt('Digite um número de caracteres: '))
let nomeFiltrado = []

for (let i = 0; i < nomes.length; i++) {
    let nome_separado = nomes[i].split(' ')
    let nome = nome_separado[0]
    if (nome.length > caracteres) {
        nomeFiltrado.push(nome)
        break
    }
}
div.innerHTML = `Nome encontrado: ${nomeFiltrado.join(', ')}`
