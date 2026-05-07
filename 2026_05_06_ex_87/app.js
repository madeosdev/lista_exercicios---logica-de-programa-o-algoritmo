let div = document.getElementById('resultado')
let equipes_f1 = ['Mercedes', 'Ferrari', 'Red Bull', 'McLaren', 'Alpine', 'Racing Bulls', 'Audi', 'Haas', 'Williams','Cadillac', 'Aston Martin']

div.innerHTML += `A equipe ${equipes_f1[0]} lidera o campeonato da F1 em 2026, até o momento.<br>`
div.innerHTML += `A equipe ${equipes_f1[equipes_f1.length - 1]} é a lanterna do campeonato da F1 em 2026, até o momento.<br>`
