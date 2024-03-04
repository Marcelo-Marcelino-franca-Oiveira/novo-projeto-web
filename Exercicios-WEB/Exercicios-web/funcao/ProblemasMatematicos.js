const calculoDivisao=(a,b)=>{
    let divisao=a/b 
    let restoDaDivisao=a%b
    return {
        divisao, restoDaDivisao
    }
}

const Exponencial=(a,b)=>a**b


console.log(calculoDivisao(20,2))
console.log(Exponencial(2,2))