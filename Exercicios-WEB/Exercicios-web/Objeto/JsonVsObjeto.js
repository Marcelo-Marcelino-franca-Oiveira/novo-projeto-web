const obj={a:1,b:2,c:3,soma(){returna+b+c}}
console.log(JSON.stringify(obj))


console.log(JSON.parse('{"a":1,"b":2,"c":3}'))


console.log(JSON.parse('{"a":1.7,"b":"String", "c":true,"d":{},"e":[]}'))