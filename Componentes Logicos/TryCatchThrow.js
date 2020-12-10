try{
    //ele tenta usar o codigo, caso de erro
    //console.log(naoExisto);
}catch(err){
    //ele pula pra esse codigo, onde tem que ter um argumento pra justificar o erro
    //console.log('NãoExisto não existe')
    //caso eu queira ver o erro chame o argumento
    //console.log(err)
}
//lançar os erros para amigos desenvolvedores ou nos mesmo
//facilita pra depois
const funcao =(x,y)=>{
    //caso o x ou y nao venham numeros podera dar erro
    //checar primeiro
    if(typeof x !== 'number' || typeof x !== 'number'){
        //serve para exibir o erro para quem está no codigo poder
        //ver e tratar o mesmo com especificações e documentado
        // new Error cria um novo erro no JS
        //pode ser ReferenceError tbm
        throw new Error('x e y precisam ser numeros.');
    }
    return x+y;
}
//não é interessante deixar isso amostra pro cliente final
//nao exibir esses erros no console.log(DE JEITO NENHUM)
try{
    console.log(funcao(1,2))
    console.log(funcao('a',2))
}catch(err){
    console.log(err)
    //tentar lançar algo mais amigavel pro usuario
}
