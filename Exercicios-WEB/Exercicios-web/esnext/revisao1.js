{
    var a=1
    let b=2
    console.log(b)
}
console.log(a)

//Templete String

const produto='iPad'

console.log(`${produto} é caro demais!`)


//destructuring 


const [l,e,...tras]="cod3r"

console.log(l,e,tras)

const [x,y]=[1,2,3]
console.log(x,y)


const {idade:i, nome}={nome:'Ana',idade:3}
console.log(i,nome)