let div = document.getElementById('resultado')
let palavras = ['sarar', 'morrer', 'doer', 'morar', 'contar', 'sofrer', 'enzo', 'soltar']
let trecho = 'ar'


for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].includes(trecho)) {
        div.innerHTML += `Palavra: ${palavras[i]}<br>Possui 'ar': Sim`
    } else {
         div.innerHTML += `Palavra: ${palavras[i]}<br>Possui 'ar': Não`
    }
}