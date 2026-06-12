let div = document.getElementById('resultado')
let cursos = ['Tecnologia Informação', 'Ciência Dados', 'Engenharia Software', 'Sistemas Informação']
let siglas = []

for (let i = 0; i < cursos.length; i++) {
    let curso = cursos[i]
    let palavras = curso.split(' ')
    let sigla = ''
    for (let j = 0; j < palavras.length; j++) {
        sigla += palavras[j][0]
         }
    siglas.push(sigla)
}
div.innerHTML = siglas.join (', ')
