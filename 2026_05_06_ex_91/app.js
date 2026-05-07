let div = document.getElementById('resultado')
let nomes =['maria', 'joao', 'sabrina', 'rafael']
let listaVip = []
for (let i = 0; i < nomes.length; i++) {
    let primeira_letra = nomes[i][0].toUpperCase()
    listaVip.push(primeira_letra + nomes[i].slice(1))
}
div.innerHTML = `Lista VIP: ${listaVip}`
