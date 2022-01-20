const nome = "Paulo"
const idade = 2022 - 1992;
const cidadeDeNascimento = "Sao Luis";
/*const apresentação = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de "
+ cidadeDeNascimento;*/

// usando o temlates string ficar mais facil de escrever
const apresentação = `Meu nome é ${nome},\nminha idade é ${idade} anos \ne nasci na cidade de ${cidadeDeNascimento}`
console.log (apresentação);
