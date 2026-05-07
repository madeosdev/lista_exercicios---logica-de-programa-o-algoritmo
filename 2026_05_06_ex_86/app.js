let div = document.getElementById('resultado')
let alunos = []
for (let i = 0; i < 4; i++) {
    let nome = prompt('Digite nome do aluno: ')
    alunos.push(nome)
}
div.innerHTML += `<p>Alunos cadastrados: ${alunos.length}</p>`
for (let i = 0; i < alunos.length; i++) {
    div.innerHTML += `<p>${alunos[i]}</p>`
}
