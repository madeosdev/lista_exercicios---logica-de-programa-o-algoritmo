let div = document.getElementById('resultado')
let palavra1 = prompt('Digite a primeira palavra: ')
let palavra2 = prompt('Digite a segunda palavra: ')

if (palavra1.length > palavra2.length) {
    div.innerHTML = `A palavra ${palavra1} é maior que ${palavra2}.`
} else if (palavra2.length > palavra1.length) {
    div.innerHTML = `A palavra ${palavra2} é maior que ${palavra1}.`
} else {
    div.innerHTML = `As palavras ${palavra1} e ${palavra2} têm o mesmo comprimento.`
}
