function Form(){
    const form=document.querySelector('.form');

    const resultado=document.querySelector('.resultado')

    const pessoas=[];

    function recEvent (evento){
        evento.preventDefault();

        const nome=form.querySelector('.nome');
        const sobrenome=form.querySelector('.sobrenome');
        const peso=form.querySelector('.peso');
        const altura=form.querySelector('.altura')
        const sexo=form.querySelector('.sexo');
    
        pessoas.push({
            nome:nome.value,
            peso:peso.value,
            altura:altura.value,
            sexo:sexo.value
        })
        //pessoa(nome.value,sobrenome.value,peso.value,altura.value,sexo.value)

        console.log(pessoas)

        resultado.innerHTML+=`<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} ${sexo.value}`


    }


   /* function pessoa(nome,sobrenome,peso,altura,sexo){
        return this.nome=nome,this.sobrenome=sobrenome,this.peso=peso,this.altura=altura,this.sexo=sexo
           
        
    };*/

    form.addEventListener('submit',recEvent)

}

Form();