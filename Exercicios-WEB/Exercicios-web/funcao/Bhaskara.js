const Calculo=(a,b,c)=>{
    let delta=b**2-(4*a*c)
    if(delta>=0){
    let X1=(-b+(Math.sqrt(delta)))/(2*a)
    let X2=(-b-(Math.sqrt(delta)))/(2*a)
    X1.toFixed(2)
    X2.toFixed(2)
    return {
        X1,X2
    }
    }else{
        return console.log("Delta é negativo")
    }

}


console.log(Calculo(2,2,2))
console.log(Calculo(5,20,1))