let valor = parseFloat(prompt('Qual é o valor a ser pago ao restaurante?'))
let gorjeta = parseFloat(prompt('Qual é o percentual da gorjeta?'))
let div_gorjeta = gorjeta/100
let val_gorjeta = valor*div_gorjeta
let valor_pago = valor + val_gorjeta
let formatado = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(valor_pago)
document.getElementById('resultado').innerHTML = `O valor total a ser pago ao restaurante é ${formatado}.`
