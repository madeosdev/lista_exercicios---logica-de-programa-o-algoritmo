let resultado = document.getElementById('resultado')

for (let i = 0; i < 51; i++) {
    if (i % 2 === 0){
        resultado.innerHTML += `${i} é par.<br>`
    }
}
