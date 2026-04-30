let resultado = document.getElementById('resultado')

let num_positivo = []
let zero = []
let num_negativo = []

for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt(`Digite o ${i}º número: `))
    if (num > 0) {
        num_positivo.push(num)
    } else if (num == 0) {
        zero.push(num)
    } else {
        num_negativo.push(num)
    }
}

resultado.innerHTML += `Foram digitados ${num_positivo.length} números positivos. <br> ${zero.length} números zeros. <br> ${num_negativo.length} números negativos.`

