let div = document.getElementById('resultado')
let ano = 365
let idade = parseInt(prompt('Digite sua idade: '))
let dias = idade*ano

div.innerHTML = `Idade: ${idade} anos = ${dias} dias`
