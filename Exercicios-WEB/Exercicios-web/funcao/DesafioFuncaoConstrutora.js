const Pessoa=(nome)=>{
    return {
        falar:()=>console.log(`Meu nome é ${nome}`)
    }
}

const p1=Pessoa('Tele Santana')
p1.falar()