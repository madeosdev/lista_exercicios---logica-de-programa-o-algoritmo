let div = document.getElementById('resultado')
let nome = 'Natalia Souza Lima'
div.innerHTML = `Primeiro nome: ${nome.substring(0, nome.indexOf(' '))}<br>Último nome: ${nome.substring(nome.lastIndexOf(' '))}`
