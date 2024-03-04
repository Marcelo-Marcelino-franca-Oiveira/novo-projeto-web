    const calculadora=(a,operacao,b)=>{
        switch (operacao) {
            case "+":
                var resultado=a+b
                return resultado
        
            case "-":
                resultado=a-b
                return resultado
            case"*":
                resultado=a*b
                return resultado
            case"/":
                resultado=a/b
                return resultado
            default:
                resultado="Operação invalida"
                return resultado
        }
        
    }


    console.log(calculadora(10,"+",10))
    console.log(calculadora(20,'*',10))
    console.log(calculadora(10,'/',10))
    console.log(calculadora(2,'-',1))

    
    