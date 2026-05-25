let div = document.getElementById('resultado')
let frutas = ['banana', 'maçã', 'laranja', 'uva', 'abacaxi']
let vegetais = ['alface', 'tomate', 'cenoura', 'pepino', 'beterraba']
let alimentos = [...frutas, ...vegetais]
div.innerHTML = alimentos.join(', ')
