let resultado = document.getElementById('resultado')
let cat1 = parseFloat(prompt('Digite o valor do cateto 1: '))
let cat2 = parseFloat(prompt('Digite o valor do cateto 2: '))
let hipotenusa = Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2))
let area = (cat1*cat2)/2
if (cat1 < 0 || cat2 < 0) {
    resultado.innerHTML = 'Valor inválido. Os catetos devem ser positivos.'
} else {
    resultado.innerHTML = `Os catetos são ${cat1}cm e ${cat2}cm, a hipotenusa é ${hipotenusa.toFixed(1)}cm, e a área é ${area.toFixed(1)}cm².`
}
