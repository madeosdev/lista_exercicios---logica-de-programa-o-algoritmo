let div = document.getElementById('resultado')
let nomes = ['Ana Maria Souza', 'João Carlos Pereira', 'Maria Clara Silva', 'Pedro Henrique Oliveira', 'Lucas Eduardo Santos']
let apelidos = []

for (let i = 0; i < nomes.length; i++) {
    let nomeCompleto = nomes[i]
    let nomeDividido = nomeCompleto.split(' ')
    let primeiroNome = nomeDividido[0]
    apelidos.push(primeiroNome)
}
div.innerHTML = `<p>Os nomes são: ${nomes.join(', ')}<br>Os apelidos são:${apelidos.join(', ')}</p>`
