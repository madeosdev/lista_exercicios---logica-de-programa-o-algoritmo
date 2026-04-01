let resultado = document.getElementById('resultado')
let salario = parseFloat(prompt('Qual o seu salário? '))
let salario_aumentado = salario + (salario*0.25)
let formatado_sal = new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(salario)
let formatado_sal_aum = new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(salario_aumentado)
resultado.innerHTML = `O seu salário é ${formatado_sal}, com 25% de aumento, é ${formatado_sal_aum}.`
