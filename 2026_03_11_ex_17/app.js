let num = parseInt (prompt('Digite um número: '))
let antecessor = num - 1
let sucessor = num + 1
document.getElementById('resultado').innerHTML = `O número digitado foi ${num}. Seu antecessor é ${antecessor}. Seu sucessor é ${sucessor}.`
