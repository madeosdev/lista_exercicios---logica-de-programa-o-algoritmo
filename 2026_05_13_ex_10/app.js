let div = document.getElementById('resultado')
let cursos = ['Tecnologia da Informação', 'Engenharia de Software', 'Sistemas de Informação', 'Ciência da Computação']
let siglas = []
let sigla = ''

for (let i = 0; i < cursos.length; i++) {
    let palavras = cursos[i].split(' ')
    for (let j = 0; j < palavras.length; j++) {
        if (j === 0 || j === palavras.length -1)
        sigla += palavras[j][0]
        }
    siglas.push(sigla)
    sigla = ''
}
div.innerHTML = `Siglas dos cursos: ${siglas.join(', ')}`
