let sorvete = parseFloat(prompt('Quantos sorvetes foram vendidos?'))
let preco = parseFloat(prompt('Qual é o preço do sorvete?'))
let total = sorvete*preco
let formatado = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(total)
document.getElementById('resultado').innerHTML = `O total em R$ de sorvetes vendidos foi ${formatado}.`
