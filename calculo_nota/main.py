print('Calcular Nota Final')
nota1 = float(input('Digite a primeira nota: '))
nota2 = float(input('Digite a segunda nota: '))
nota3 = float(input('Digite a terceira nota: '))
calculo_notas = (nota1*2) + (nota2*3) + (nota3*5)
nota_final = calculo_notas/10
print (f'A nota final é: {nota_final:.1f}')
