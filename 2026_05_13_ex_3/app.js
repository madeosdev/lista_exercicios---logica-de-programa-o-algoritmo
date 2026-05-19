let div = document.getElementById('resultado')
let palavra = 'Pneumoultramicroscopicosilicovulcanoconiose'
let palavra_metade = palavra.substring(0, (palavra.length/2))
div.innerHTML = `Palavra: ${palavra}<br>Metade da palavra: ${palavra_metade}`
