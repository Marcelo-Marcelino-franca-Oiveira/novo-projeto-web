const ferrari={
    modelo:'F40',
    volMax:324
}

const volvo={
    modelo:'V40'
,
velMax:200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__===Object.prototype)
console.log(volvo.__proto__===Object.prototype)
console.log(Object.prototype.__proto__===null)


function MeuObejeto(){}
console.log(typeof Object, typeof MeuObejeto)
console.log(Object.prototype, MeuObejeto.prototype)