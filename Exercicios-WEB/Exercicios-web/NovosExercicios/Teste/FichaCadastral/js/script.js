

function form(){
    const form=document.querySelector('.form');

    const resultado=document.querySelector('.resultado')


    const cadastro=[];

    function event(evento){
        evento.preventDefault();
        const nome=form.querySelector('.nome');
        const idade=form.querySelector('idade');
        const rg=form.querySelector('.rg')
        const email=form.querySelector('.email');
        const endereco=form.querySelector('.endereco');
        const cidade=form.querySelector('.cidade');
        const estado=form.querySelector('.estado')
        const cep=form.querySelector('.cep')


        cadastro.push({
            nome:nome.value,
            idade:idade.value,
            rg:rg.value,
            email:email.value,
            endereco:endereco.value,
            cidade:cidade.value,
            estado:estado.value,
            cep:cep.value
        })

        console.log(cadastro)

        resultado.innerHTML+=`<p>Cadastro realizado. Nome: ${nome.value} idade:${idade.value} RG: ${rg.value} E-mail: ${email.value} Endereço: ${endereco.value} Cidade: ${cidade.value} Estado ${estado.value} CEP: ${cep.value}`;
                    
       


    }
    form.addEventListener('submit',event)
        

}

form();