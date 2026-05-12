let div = document.getElementById('resultado')
let nomes = []

for (let i = 0; i < 10; i++) {
    let nome = prompt(`Digite o nome ${i +1}: `)
    if (nomes.includes(nome)){
        alert('Nome já existe, digite outro nome')
        i--
    } else{
        nomes.push(nome)
    }
    
}
div.innerHTML = `Nomes digitados: ${nomes.join(', ')}.`
