let resultado = document.getElementById('resultado')

for (let i = 1; i <= 20; i++) {
    if (i%2 == 0){
        resultado.innerHTML += `${i} é par.<br>`
    } else {
        resultado.innerHTML += `${i} é ímpar. <br>`
    }
}
