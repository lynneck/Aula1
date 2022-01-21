// medias 10, 6.5, 8, 7.5, 9.5
// Forma tradicional
        //let nota1 = 10;
        //let nota2 =  6.5;
        //let  nota3=  8;
        //let nota4 = 7.5;

        //let media = (nota1 + nota2 + nota3 + nota4)/4;

        //console.log(media)

// Utilizando array , o que é um array => é um tipo de estrutura de dados.
const notas = [10 , 6.5, 7.5, 8];  

let media = (notas [0] + notas [1] + notas[2] +  notas [3]) / notas.length;

console.log(media)

const arrayDeNumeros = [50, 43, 12];
const arrayDeStrings = ["banana", "alura", "Juliana"];

console.log( arrayDeNumeros [0] + " " +arrayDeStrings [0] + " no estoque" );
console.log(arrayDeNumeros.length)// pega o tamanho do array 