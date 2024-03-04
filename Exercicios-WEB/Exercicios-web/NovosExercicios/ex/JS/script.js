


const n=prompt('Digite um número');
const numero=parseFloat(n.replace(',','.'))


const numberTitle=document.getElementById('numero-titulo');
const text=document.getElementById('texto');


numberTitle.innerHTML=numero;
text.innerHTML=`<p>Seu número -2 é igual a ${numero-2}</p>
                <p>Seu número +2 é igual a ${numero+2}</p>
                <p>Raiz quadrada de seu numero é ${Math.sqrt(numero)}</p>
                <p>O ${numero} é um numero inteiro? ${Number.isInteger(numero)} </p>
                <p>É um NaN: ${Number.isNaN(numero)} </p>
                <p>Arredondando para baixo ${Math.floor(numero)} </p>
                <p>Arredondando para cima ${Math.ceil(numero)} </p>
                <p>Com duas casas decimais: ${numero.toFixed(2)} </p>`
