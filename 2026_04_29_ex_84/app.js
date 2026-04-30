let resultado = document.getElementById('resultado')
let num_quadrado = []

for (let i = 1; i <=5; i++) {
    let num = parseInt(prompt(`Digite o ${i}º número: `))
    num_quadrado.push(num * num)
}

resultado.innerHTML += `Os quadrados dos números digitados são: ${num_quadrado.join(', ')}.`
