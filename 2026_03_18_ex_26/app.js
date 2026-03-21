let total_dinheiro = parseFloat(prompt('Qual é o valor total que será dividido?'))
let amigo1 = total_dinheiro*0.1
let amigo2 = amigo1*2
let amigo3 = amigo2*2
let formatado_amigo1 = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(amigo1)
let formatado_amigo2 = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(amigo2)
let formatado_amigo3 = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(amigo3)
document.getElementById('resultado').innerHTML = `Amigo 1 recebe ${formatado_amigo1}. <br>Amigo 2 recebe ${formatado_amigo2}. <br>Amigo 3 recebe ${formatado_amigo3}.`
