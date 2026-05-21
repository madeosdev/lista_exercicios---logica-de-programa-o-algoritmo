let div = document.getElementById('resultado')
let frases = ['O dia está lindo', 'O dia está nublado, que bom', 'O dia está chuvoso, está fresquinho', 'O dia está ventoso', 'O dia está frio', 'O dia está quente demais']
let frases_grandes =[]

for (let i= 0; i < frases.length; i++) {
    if (frases[i].length >= 20) {
        frases_grandes.push(frases[i])
    }
}

div.innerHTML = `Há ${frases_grandes.length} frases com mais de 20 caracteres: <br> ${frases_grandes.join('<br>')}`
