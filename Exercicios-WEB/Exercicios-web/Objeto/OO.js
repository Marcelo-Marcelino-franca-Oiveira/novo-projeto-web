const produto= new Object
produto.nome='Cadeira'
produto['Marca do produto']='Generica'
produto.preco=220

console.log(produto)

delete produto.preco
delete produto['Marca do produto']
console.log(produto)



const carro={
    modelo:'A4',
    valor:890000,
    proprietario:{
        nome:'Raul',
        idade:56,
        endereco:{
            logradouro:'Rua ABC',
            numero:123
        }
    }, 
    condutores:[{
        nome:'Junior',
        idade:19
    },{
        nome:'Ana',
        idade:42
    }],
    calculaValorSeguro:function(){
        //...
    }
}


carro.proprietario.endereco.numero=1000


console.log(carro)

delete carro.proprietario.endereco
delete carro.calculaValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)