const pessoa={
    nome:'Ana',
    idade:5,
    endereco:{logradouro:'Rua abc', numero:1000}
}

const{nome,idade}=pessoa;
console.log(nome,idade);

const{nome:n, idade:i}=pessoa;
console.log(n,i);

const{ endereco:{logradouro, numero, cep= '038924'}}=pessoa
console.log(logradouro,numero,cep);