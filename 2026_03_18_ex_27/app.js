let flor = parseFloat(prompt('Quantas flores serão plantadas no dia 1?'))
let flor2 = flor*2
let flor3 = flor*3
let flor4 = flor*4
let flor5 = flor*5
let total_flores = flor + flor2 + flor3 + flor4 + flor5
document.getElementById('resultado').innerHTML = `Ao final de 5 dias foram plantadas ${total_flores} flores.`
