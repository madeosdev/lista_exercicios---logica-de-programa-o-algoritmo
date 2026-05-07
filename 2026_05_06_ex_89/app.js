let div = document.getElementById('resultado')
let nomes = ['Carlos', 'Fernanda', 'Thiago', 'Letícia']

for (let i = 0; i < nomes.length; i++) {
    div.innerHTML += `<p>${nomes[i][0]}</p>`
}
console.log(nomes)
