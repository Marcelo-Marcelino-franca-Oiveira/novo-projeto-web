let a =1
console.log(a)






const primeiroElemento=arrayOuString=> arrayOuString[0]




const letraMinuscula=String=>String.toLowerCase()


new Promise(function (resolve){
    resolve(['Ana','Bia','Antonia', 'Carlos','Leandro'])
})

.then(primeiroElemento)
 .then(primeiroElemento)
 .then(letraMinuscula)
 .then(console.log)