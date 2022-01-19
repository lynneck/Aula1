// tipo de dados
// Boolean

// conversao implicita

//const numero = 456;
//const numeroString = "456";

//console.log(numero == numeroString); // se colocar === o resultado altera


//console.log(numero + numeroString);  // vira uma concatenação
 


// conversao explicita
// tranformando uma string para numero é so utiizar a função Number

// outra forma de tranformação pode ocorrer na decaração
// const numeroString = Number("456");
// temos que garantir que a string contenha apenas numeros errado -> ("456a") o resultado será um NaN


//console.log(numero + Number(numeroString));


//let telefone = 12341234;
//console.log("O telefone é " + String(telefone));

// teremos a conversão do número 12341234 para uma string “12341234” e assim
// poderemos fazer a concatenação entre as strings

let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); 

// o .toString() é uma outra forma para  fazer essa conversão, que é
// mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// Vamos calcular a área de um retângulo
let largura = "11";
let altura = "5";
console.log(Number(largura) * Number(altura));
 // teremos a conversão de String para números, possibilitando a realização da da multiplicação
