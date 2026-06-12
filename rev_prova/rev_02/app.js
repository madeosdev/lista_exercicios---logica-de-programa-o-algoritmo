let div = document.getElementById('resultado')
let numeroExcluido = 0

for (let i = 100; i <= 200; i++) {
    if (i === 100 || i === 200) {
        numeroExcluido = i
    }
    else if (i === 198){
        div.innerHTML += `${i}`
    }
    else if (i%2 === 0) {
        div.innerHTML += `${i}` + ', '
    }
}
