let div = document.getElementById('resultado')
let lista = ['banana', 'abacaxi', 'laranja', 'manga', 'uva', 'maracuja']
let palavrasvencedoras = []
let maioraparicao = 0

for (let i = 0; i < lista.length; i++) { //Percorre a lista de palavras
    let palavraAtual = lista[i] //Pega a palavra atual da lista pelo indice
    let contador = 0 //Inicializa o contador de aparições da letra 'a' perante a palavra atual
    for (let j = 0; j < lista[i].length; j++) { //Percorre cada letra da palavra atual
        if (palavraAtual[j].toLowerCase() === 'a') { //Verifica se a letra atual é idêntica a "a" (considerando maiúscula e minúscula)
            contador++
        }

    }
    if (contador > maioraparicao) { //Verifica se o contador de letras 'a' presentes na palavra atual é maior que o maior contador de aparições da letra 'a' encontrados até então.
        maioraparicao = contador //Atualiza o maior contador de aparições da letra 'a' encontrados até então.
        palavrasvencedoras = [palavraAtual] //Atualiza a palavra vencedora, apartir do número de aparições da letra 'a' presenets na palavra atual.
    } else if (contador === maioraparicao && contador > 0) { //Verifica se o contador de letras 'a' presentes na palavra atual é igual ao maior contador de aparições da letra 'a' encontrados até então, e se o contador é maior que 0 (para evitar palavras sem a letra 'a').
        palavrasvencedoras.push(palavraAtual)
    }
}

div.innerHTML = `As palavras com maior aparição da letra 'a' são: ${palavrasvencedoras.join(', ')} com ${maioraparicao} aparições da letra 'a'.`
