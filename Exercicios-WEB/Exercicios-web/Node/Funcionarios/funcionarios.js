const url='http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios=require('axios')

const china=people=>people.pais==='China'
const female=people=>people.genero==='F'

const menorSalario=(func,funcAtual)=>{
    return func.salario<funcAtual.salario?func:funcAtual
}

axios.get(url).then(response=>{
    const funcionarios=response.data

    console.log(funcionarios)

    const func=funcionarios.filter(china).filter(female).reduce(menorSalario)

    console.log(func)
})





