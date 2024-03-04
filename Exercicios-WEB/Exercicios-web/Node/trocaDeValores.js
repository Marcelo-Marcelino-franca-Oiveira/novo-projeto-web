let varA='A';
let varB='B';
let varC= 'C';

[varA,varB,varC]=[varB,varC,varA]

console.log(varA,varB,varC)

let num1=1;
let num2=2;
let num3=3;

[num1,num2,num3]=[num2,num3,num1]

console.log(num1,num2,num3)

let num;

let decisao=true;



cont=0;
while(decisao===true){

    if(decisao===true){
        num=num1+num2
    }else{
        num=num2+num3
    }
    [num,num1,num2,num3][num,num3,num2,num1]
    cont++

    if(cont==4){
        decisao=false;
        console.log('fim do programa')
        break;
    }

    console.log(num,num1,num2,num3)
}


console.log(3**2)