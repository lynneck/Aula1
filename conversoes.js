// tipo de dados
// Boolean

// conversao implicita

const numero = 456;
const numeroString = "456";

console.log(numero == numeroString); // se colocar === o resultado altera


console.log(numero + numeroString);  // vira uma concatenação
 


// conversao explicita
// tranformando uma string para numero é so utiizar a função Number

// outra forma de tranformação pode ocorrer na decaração
// const numeroString = Number("456");
// temos que garantir que a string contenha apenas numeros errado -> ("456a") o resultado será um NaN


console.log(numero + Number(numeroString));

