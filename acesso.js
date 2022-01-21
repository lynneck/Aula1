/*const acesso = (nome) => {
    return  `${nome} logou com sucesso no sistema!`
}

const usuarioLogim = (nome) => {
let array = []
for (i = 0; i < 9000; i ++){
    array.push(i)
}
    return acesso (nome)
}

console.log(usuarioLogim("Paulo"))*/

const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const autentica = (cargo) => {
    let array = []
    for( i = 0; i < cargo; i++){
      array.push(i)
    }
    return true;
  }
  
  const login = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`) {
       autentica(90000)
    } else if(pessoa.cargo === `diretoria`) {
       autentica(900000)
    }
   return acesso(pessoa.nome)
  }

  console.log(login ({cargo:`funcionario`, nome: `Leia`}, autentica));
