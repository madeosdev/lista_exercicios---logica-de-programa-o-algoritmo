let resultado = document.getElementById('resultado')
let celsius = parseFloat(prompt('Digite a temperatura (em Celsius): '))
let conversao_f = celsius*(9/5) + 32
resultado.innerHTML = `A temperatura em Celsius é ${celsius}C.<br> A temperatura em Fahrenheit é ${conversao_f}F. `
