let mesada = parseFloat(prompt('Qual é o valor da mesada?'))
let economia = parseFloat(prompt('Qual é o valor que você deseja economizar?'))
let restante = mesada - economia 
let formatado = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(restante)
document.getElementById('resultado').innerHTML = `O valor restante é ${formatado}.`
