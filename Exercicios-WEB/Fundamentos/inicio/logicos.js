function compras (trabalho1, trabalho2){
    const compraSorvete= trabalho1 ||trabalho2;
    const comprarTv50=trabalho1&& trabalho2;
    const comprarTv30b=!!(trabalho1^trabalho2);// bitwise xor
    const comprarTv30=trabalho1!=trabalho2;
    const manterMaisSaudavel= !compraSorvete;

    return {compraSorvete,comprarTv50,comprarTv30b,comprarTv30, manterMaisSaudavel}
}

console.log(compras(true,true));
console.log(compras(true,false));
console.log(compras(false,true));
console.log(compras(false,false));