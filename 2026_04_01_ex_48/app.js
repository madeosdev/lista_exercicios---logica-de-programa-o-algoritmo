let resultado = document.getElementById('resultado')
let preco1 = parseFloat(prompt('Digite o preço do primeiro produto:'))
let preco2 = parseFloat(prompt('Digite o preço do segundo produto:'))
let preco3 = parseFloat(prompt('Digite o preço do terceiro produto:'))
let total_preco = preco1 + preco2 + preco3
let desconto_dez = total_preco - (total_preco*0.1)
let desconto_vinte = total_preco - (total_preco*0.2)
let desconto_trinta = total_preco - (total_preco*0.3)
let desconto_cinquenta = total_preco - (total_preco*0.5)
let formato_total = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(total_preco)
let formato_desconto_dez = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(desconto_dez)
let formato_desconto_vinte = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(desconto_vinte)
let formato_desconto_trinta = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(desconto_trinta)
let formato_desconto_cinquenta = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(desconto_cinquenta)
resultado.innerHTML = `
    <p>O total da compra é: ${formato_total}</p>
    <p>Com 10% de desconto: ${formato_desconto_dez}</p>
    <p>Com 20% de desconto: ${formato_desconto_vinte}</p>
    <p>Com 30% de desconto: ${formato_desconto_trinta}</p>
    <p>Com 50% de desconto: ${formato_desconto_cinquenta}</p>
`
console.log(`
    <p>O total da compra é: ${formato_total}</p>
    <p>Com 10% de desconto: ${formato_desconto_dez}</p>
    <p>Com 20% de desconto: ${formato_desconto_vinte}</p>
    <p>Com 30% de desconto: ${formato_desconto_trinta}</p>
    <p>Com 50% de desconto: ${formato_desconto_cinquenta}</p>
`)
