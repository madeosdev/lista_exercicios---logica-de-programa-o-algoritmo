let resultado = document.getElementById('resultado')
let idade_anos = parseFloat (prompt('Qual a sua idade (em anos)?' ))
let idade_dias = idade_anos*365
resultado.innerHTML = `Você tem ${idade_anos} anos, que convertendo em dias, serão ${idade_dias} dias.`
