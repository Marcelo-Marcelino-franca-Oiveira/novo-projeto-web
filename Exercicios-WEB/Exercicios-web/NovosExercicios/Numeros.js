let n=20;




let numero=Number.isNaN(n)
console.log(numero)

while(numero==false){
    let inteiro=Number.isInteger(n)

    if (inteiro===true){
        console.log(`O numero ${n} é um numero inteiro`)
        n=n++;
    }else
    console.log(`O numero ${n} não é um numero inteiro`)

    n=n.toString();


}
