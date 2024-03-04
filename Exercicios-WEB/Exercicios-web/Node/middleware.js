//middleware pattern (chain of responsibility)
const passo1=(ctx,next)=>{
    ctx.valor1='mid1'
    next()
}

const passo2=(ctx,next)=>{
    ctx.valor='mid2'
    next()
}

const passo3=ctx=>ctx.valor3='mid3'


const exec=(ctx,...middleware)=>{
    const execPasso=inidice=>{
        middleware&&inidice<middleware.length&&middleware[inidice](ctx,()=>execPasso(inidice+1))
    }
    execPasso(0)
}


const ctx={}
exec(ctx,passo1,passo2,passo3)
console.log(ctx)