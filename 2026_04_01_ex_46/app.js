let resultado = document.getElementById('resultado')
let degrau_escada = parseFloat(prompt('Degrau da escada (cm):'))
let total_escada = parseFloat(prompt('Tamanho total da escada (cm): '))
let num_degraus = total_escada/degrau_escada
resultado.innerHTML = `O número total de degraus da escada é ${num_degraus}.`
