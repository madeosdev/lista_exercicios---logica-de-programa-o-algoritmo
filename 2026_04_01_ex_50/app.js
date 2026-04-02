let resultado = document.getElementById('resultado')
let conta = parseFloat(prompt('Digite o valor da conta: '))
let por_gorjeta = parseFloat(prompt('Digite a porcentagem da gorjeta: '))
let valor_gorjeta = conta*(por_gorjeta/100)
let total = conta + valor_gorjeta
let format_gorjeta = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor_gorjeta)
let format_total = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total)
resultado.innerHTML = `Valor da gorjeta: ${format_gorjeta}<br>Total: ${format_total}`
