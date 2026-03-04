let nome = prompt('Qual o seu nome?')
let sobrenome = prompt('Qual o seu sobrenome?')
let idade = parseInt(prompt('Qual a sua idade?'))
document.getElementById('resultado').innerHTML = `Seu nome é ${nome}; <br> Seu sobrenome é ${sobrenome}; <br> Sua idade é ${idade} anos.`
