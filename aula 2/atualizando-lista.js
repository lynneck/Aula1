// Utilizando o splace string
// remove e adiciona elementos em um array

const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjore', 'Leo']

listaDeChamada.splice(1, 2, 'Paulo');
listaDeChamada.splice(2,0, 'Rodrigo')

console.log(listaDeChamada)