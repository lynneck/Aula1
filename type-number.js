// tipo Number

/*const meuNumero = 3;

const primeiroNumero = 1;
const segundaNumero = 2;

const operacaoMatematica = primeiroNumero / segundaNumero;
console.log(operacaoMatematica)

const numPontoFlutuante= 3.3;
const pontoFlutuante = .5;

const novaOperacao = primeiroNumero / numPontoFlutuante;

 
console.log(novaOperacao)

const pi = Math.PI;
console.log(pi)*/


/*var a = 10
var b = 0
console.log(a/b) // Infinity

var a = 0
var b = 0
console.log(a/b) // NaN*/


/*function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);
    console.log(salarioHora); 
  
    return Math.round(salarioHora);
  };

  ganhoPorHora(3000 , 176);*/

   
  /*function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const total = salarioHora.toFixed(2);
    console.log(total);
  
    return total;
  
  };

  ganhoPorHora(1948,180); // Formatando o resultado em duas casas decimais com metodo tofixed()*/

  function ganhoPorHora (salario, horasTrabalhadasNoMes){
    const salarioHora = (salario / horasTrabalhadasNoMes);
    const formatado = salarioHora.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'}); 

    console.log (formatado);

    return formatado;

  }

  ganhoPorHora(1948, 180);

  




  
