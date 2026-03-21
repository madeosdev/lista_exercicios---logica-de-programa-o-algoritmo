let valor_lanche = parseFloat(prompt('Valor do lanche: '))
let economia = parseFloat(prompt('Valor economizado: '))
let valor_faltante = valor_lanche - economia
let formatado = new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(valor_faltante)
document.getElementById('resultado').innerHTML = `Ainda restam ${formatado} para conseguir comprar o lanche.`
