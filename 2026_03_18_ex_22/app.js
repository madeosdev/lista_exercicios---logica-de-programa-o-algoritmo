let preco_baunilha = parseFloat(prompt('Qual é o preço do sorvete de baunilha?'))
let preco_chocolate = parseFloat(prompt('Qual é o preço do sorvete de chocolate?'))
let sorvete_baunilha = parseFloat(prompt('Quantos sorvetes de baunilha foram vendidos?'))
let sorvete_chocolate = parseFloat(prompt('Quantos sorvetes de chocolate foram vendidos?'))
let valor_total = (sorvete_baunilha*preco_baunilha) + (sorvete_chocolate*preco_chocolate)
let formatado = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(valor_total)
document.getElementById('resultado').innerHTML = `O valor total arrecadado com a venda de sorvetes é ${formatado}.`
