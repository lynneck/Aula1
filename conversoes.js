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

//let telefone = 12341234;
//console.log("O telefone é " + telefone.toString()); 

// o .toString() é uma outra forma para  fazer essa conversão, que é
// mais parecida com outras linguagens de programação.

//let usuarioConectado = false;
//console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
//usuarioConectado = true;
//console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// Vamos calcular a área de um retângulo
//let largura = "11";
//let altura = "5";
//console.log(Number(largura) * Number(altura));
 // teremos a conversão de String para números, possibilitando a realização da da multiplicação

 let largura = "10";
 let altura = "5";
console.log( + largura * + altura); 
// teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN


let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.

/*A melhor prática, nesse caso, é não utilizar nenhum dos termos da lista abaixo como identificadores,
 seja de variáveis, funções, classes ou qualquer outro bloco que precise de um nome. As únicas exceções
 são from, set e target,  que são seguras e comumente utilizadas.

 arguments
as
async
await
break
case
catch
class
const
continue
debugger
default
delete
do
else
eval
export
extends
false
finally
for
from
function
get
if
import
in
instanceof
let
of
new
null
return
set
static
super
switch
target
this
throw
true
try
typeof
var
void
while
with
yieldCOPIAR CÓDIGO
Como as linguagens estão em constante desenvolvimento, o JavaScript também restringe o uso de mais algumas 
palavras que podem ser utilizadas nas próximas versões:

enum
implements
interface
package
private
protected
public

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)


var tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.
let e const têm escopo local, sendo assim, não podem ser acessadas em outros escopos, e const não pode ter seu valor alterado depois de definido.
O JavaScript considera alguns valores como false durante comparações, como com null, undefined, 0, NaN e Strings vazias.
null é usado quando não queremos dar um valor para uma variável, mas também não queremos deixá-lo como undefined (não definido).
null é um objeto no JavaScript, diferente de undefined, que tem seu próprio tipo, e isso pode causar problemas se não tomarmos cuidado ao utilizá-lo.
O JavaScript converte automaticamente entre tipos de valores, como números para texto e para booleanos, porém não é interessante deixá-lo fazer isso automaticamente, pois podem ocorrer erros.
Temos como forçar uma mudança de tipo utilizando os métodos Number() e String(), onde Number() converte as variáveis para números ou NaN caso tenha algum erro na conversão, e String() converte as variáveis para texto.*/

let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100