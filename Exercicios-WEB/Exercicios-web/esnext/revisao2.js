//Arrow function

const soma=(a,b)=>a+b

const numero=soma(1,2)
console.log(numero)

//Arrow function (this)

const lexico=()=>console.log(this===exports)

const lexico2=lexico.bind({})
lexico()
lexico2()

//parametro default

function log (texto='Node'){
    console.log(texto)
}

log()
log('Sou mais forte')



//operador rest

function total(...numeros){
    let total=0
    numeros.forEach(n=>total+=n)
    return total
}

console.log(total(1,2,3,4,5,6,7,8))