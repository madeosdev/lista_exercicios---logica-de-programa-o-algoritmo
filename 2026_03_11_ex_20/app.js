let amigos = parseInt(prompt('É sua festa de aniversário. Quantos amigos você convidou?: '))
let presentes = amigos*2
document.getElementById('resultado').innerHTML = 'FELIZ ANIVERSÁRIO!'
document.getElementById('resultado2').innerHTML = `Você convidou ${amigos} amigos e recebeu ${presentes} presentes!`
