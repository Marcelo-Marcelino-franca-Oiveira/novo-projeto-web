let dobro = function(a){
    return 2*a;
}

dobro =(a)=>{
    return2*a;
}

dobro = a=>2*a //retorno implicito.

console.log(dobro(Math.PI));

let ola= function(){
    return 'ola';

}

ola=()=>'Ola'
ola=_=>'Ola'// possui param

console.log(ola())