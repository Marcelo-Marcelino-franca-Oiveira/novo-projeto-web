for(var i=0;i<=5;i++){
    console.log(i)
}

console.log(i)


var funcs=[];

for (var i=0;i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]();
funcs[8]();

for(let j=0;j<=5;j++){
    console.log(j);
}

var funcs1=[]

for(let j=0;j<10;j++){
    funcs1.push(function(){
        console.log(j)
    })
}

funcs1[2]();
funcs1[8]();