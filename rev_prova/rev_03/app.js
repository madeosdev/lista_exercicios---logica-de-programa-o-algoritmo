let div = document.getElementById('resultado')
let vogaisMaiusculas = ['A', 'E', 'I', 'O', 'U']
let vogaisMinusculas = ['a', 'e', 'i', 'o', 'u']
let qntd_vogaisUpper = 0
let qntd_vogaisLower = 0
let qntd_consoantes = 0
let palavra = prompt('Digite uma palavra: ')
let qntd_letras = palavra.length

for (let i = 0; i < qntd_letras; i++) {
    if (vogaisMaiusculas.includes(palavra[i])) {~
        qntd_vogaisUpper++
    } else if (vogaisMinusculas.includes(palavra[i])) {
        qntd_vogaisLower++
    } else {
        qntd_consoantes++
    }
}
div.innerHTML = `Palavra: ${palavra}<br>
Quantidade de letras: ${qntd_letras}<br>
Quantidade de vogais maiúsculas: ${qntd_vogaisUpper}<br>
Quantidade de vogais minúsculas: ${qntd_vogaisLower}<br>
Quantidade de consoantes: ${qntd_consoantes}`
