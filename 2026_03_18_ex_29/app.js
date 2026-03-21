let valor_livro = parseFloat(prompt('Qual é o valor do livro?'))
let desconto = 10/100
let valor_desconto = valor_livro*desconto 
let valor_descontado = valor_livro - valor_desconto
let formatado = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(valor_descontado)
document.getElementById('resultado').innerHTML  = `O valor do livro com o desconto é ${formatado}.`
