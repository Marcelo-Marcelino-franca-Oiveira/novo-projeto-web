const produtos=[
    {nome:'Notebook',preco:2499,fragil:true},
    {nome:'Ipad Pro',preco:4199,fragil:true},
    {nome:'Copo de Vidro',preco:12.49,fragil:true},
    {nome:'Copo de Plastico',preco:18.99,fragil:false}
]

console.log(produtos.filter(function(p){
    return false
}))

const objetoFragil=produto=>produto.fragil===true
const ObjetoCaro=produto=>produto.preco>1000

console.log(produtos.filter(objetoFragil).filter(ObjetoCaro))