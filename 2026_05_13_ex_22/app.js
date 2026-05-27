let div = document.getElementById('resultado')
let palavras = ['casa', 'carro', 'bicicleta', 'avião', 'navio']
let senhas =[]

for (let i = 0; i < palavras.length; i++) {
    let senha = ''
    let primeiraparte = palavras[i].substring(0, 2)
    let segundaparte = palavras[i].substring(palavras[i].length -2)
    let terceiraparte = palavras[i].length
    senha = primeiraparte + segundaparte + terceiraparte
    senhas.push(senha)
}

div.innerHTML = `As senhas geradas são: ${senhas.join(', ')}`
