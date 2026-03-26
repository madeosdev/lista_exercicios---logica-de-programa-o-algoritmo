let resultado = document.getElementById('resultado')
let lado_a = parseFloat(prompt('Qual é o lado A do paralelepípedo?'))
let lado_b =  parseFloat(prompt('Qual é o lado B do paralelepípedo?'))
let lado_c = parseFloat(prompt('Qual é o lado C do paralelepípedo?'))
let volume = lado_a*lado_b*lado_c
resultado.innerHTML = `O volume do paralelepípedo é ${volume} cm.`
