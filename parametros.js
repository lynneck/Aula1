// Parametros de funções 
               // parametros
function soma( num1, num2 ) {
    return num1 + num2;

}
function multiplica( num1 = 1, num2 = 1 ) {
    return num1 * num2;

}
                // passado os parametros
console.log(soma(5, 6))
console.log(multiplica (soma (4, 5), soma (3, 3))) //foi colocado os dois parametros
console.log(multiplica (soma (4, 5)))// foi colocado so um parametro

// parametros x argumentos
 // ordem dos parametros
 function nomeIdade(nome, idade){
     return `meu nome é ${nome} e minha idade é ${idade}`;
 }
 console.log(nomeIdade(30, "Paulo")) // devemos tomar cuidade com o que estamos passado para os parametros
 
 console.log(nomeIdade("Paulo", 20)) // obedecendo a ordem 


 function cumprimentar(){// função sem retorno e sem parametro
    console.log('oi gente!')
   }
   
   cumprimentar()

   function cumprimentaPessoa(pessoa){ // função sem retorno e com parametro
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Paulo');


   function cumprimentar(){ // outro exemplo
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)// template string
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”



