const CriarProduto= (nome, preco)=>{
    
        this.nome = nome
        this.preco=preco
        const desconto=0.4
        const ValorComDesconto=()=>preco*(1-desconto)
        let PrecoAtual =ValorComDesconto()

        return {
            nome, preco,PrecoAtual
        }
    
}



console.log(CriarProduto('Faber castle',4.95))
