let div = document.getElementById('resultado') //Facilitrar a escrita do resultado no HTML
let frase = prompt('Digite uma frase: ') //Entrada de dados do usuário
let fraseSeparada = frase.split(' ') //Usando .split para separar a frase em um array de palavras.
let vogaisUpper = ['A', 'E', 'I', 'O', 'U'] //Para facilitar a contagem de vogais maiúsculas.
let vogaisLower = ['a', 'e', 'i', 'o', 'u'] //Para facilitar a contagem de vogais minúsculas.
let qntd_palavras = fraseSeparada.length //Contagem de palavras da frase escrita pelo usuário.
let qntd_caracteres = frase.length //Contagem de caracteres totais da frase escrita pelo usuário, incluindo espaços.
let qntd_vogais_upper = 0 //Incialização da variável para contagem de vogais maiúsculas.
let qntd_vogais_lower = 0 //Incialização da variável para contagem de vogais minúsculas.
let consoantes = 0 //Incialização da variável para contagem de consoantes. 
let qntd_espacos = 0 //Incialização da variável para contagem de espaços.
let maior_palavra = fraseSeparada[0] //Incialização da variável para armazenar a maior palavra, começando com a primeira palavra do array de palavras.

if (fraseSeparada.length < 2) { //Se a frase tiver menos de 2 palavras, o programa exibe um alerta de frase inválida
    alert('FRASE INVÁLIDA!') //Em seguida, o programa encerra.
} 
else { //Caso tenha mais de 2 palavras, realizará a análise da frase normalmente.
    for (let i = 0; i < frase.length; i++) {
        let caracteres = frase[i] //Variável para armazenar cada caractere da frase, um por um, usando um loop for.
        if (vogaisUpper.includes(caracteres)) { //Usando .includes para verificar se o caractere atual é uma vogal maiúscula, e caso seja, incrementa a variável de contagem de vogais maiúsculas.
            qntd_vogais_upper++ 
        } else if (vogaisLower.includes(caracteres)) { //Usando .includes para verificar se o caractere atual é uma vogal minúscula, e caso seja, incrementa a variável de contagem de vogais minúsculas.
            qntd_vogais_lower++
        } else if (caracteres === ' ') { //Verificando se o caractere atual é um espaço, e caso seja, incrementa a variável de contagem de espaços.
            qntd_espacos++
        } else { //Caso o caractere atual não seja uma vogal maiúscula, nem uma vogal minúscula, nem um espaço, o programa considera que é uma consoante e incrementa a variável de contagem de consoantes.
            consoantes++
        }
    }

    for (let i = 0; i < fraseSeparada.length; i++) { //Loop for para percorrer o array de palavras da frase, usando o .length do array para determinar o número de iterações.
        let palavra = fraseSeparada[i] //Variável para armazenar cada palavra do array, uma por uma, usando um loop for.
        if (palavra.length > maior_palavra.length) { //Verificando se a palavra atual tem um comprimento maior do que a palavra armazenada na variável maior_palavra, e caso seja, a variável maior_palavra é atualizada para armazenar a palavra atual.
            maior_palavra = palavra
        }
    }
    div.innerHTML = `Frase digitada: ${frase}<br>Quantidade de palavras:${qntd_palavras}<br>Quantidade de caracteres: ${qntd_caracteres}<br>Quantidade de vogais minúsculas: ${qntd_vogais_lower}<br>Quantidade de vogais maiúsculas: ${qntd_vogais_upper}<br>Quantidade de consoantes: ${consoantes}<br>Quantidade de espaços: ${qntd_espacos}<br>Palavra mais longa: ${maior_palavra} (${maior_palavra.length} letras).` //Exibindo o resultado da análise da frase no HTML, usando a variável div para facilitar a escrita do resultado, e utilizando template literals para organizar as informações de forma clara e legível.
}
//CONSEGUI!!!!!
//Tudo comentadinho pra ajudar meus compatriotas.