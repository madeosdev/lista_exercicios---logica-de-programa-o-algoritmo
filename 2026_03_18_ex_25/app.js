let total_balas = parseFloat(prompt('Qual é a quantidade total de balas?'))
let amigos = parseFloat(prompt('Quantos amigos você dividirá as balas?'))
let resposta = total_balas/amigos
document.getElementById('resultado').innerHTML = `Cada amigo receberá ${resposta} balas.`
