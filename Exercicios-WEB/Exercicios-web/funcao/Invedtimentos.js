const JurosSimples=(CapInicial,juros,tempo)=>{
    let juroSimpes=CapInicial*juros*tempo
    return juroSimpes+CapInicial
}

const JurosComposto=(CapInicial,juros,tempo)=>{
    let montante=CapInicial*(1+juros)**tempo
    return montante-CapInicial
}


console.log(JurosSimples(1200,0.02,14))
console.log(JurosComposto(620,0.015,24))
