//function com parametro
function saudacao(nome){
    //console.log("Hello World "+nome)
    console.log(`Bom dia ${nome}`);
}
saudacao("Gabriel")
saudacao("Carol")
//function com retorno
function retorno(nome){
    return `Bom dia ${nome}`;
}
const variavel = retorno('retornando');
//funcao sem retorno roda porem tambem gera undefined
console.log(variavel);
//funcao return utilizando parametro
//nao da para alterar nada dentro da função do lado de fora
function soma(x,y){
    const resultado = x + y
    return resultado;
}
//console.log(soma(2,2))
const resultado = soma(2,2)
console.log(resultado)
//function anonima com variavel
const raiz = function(n){
    return n ** 0.5
};
console.log(raiz(9))
//function arrow 
const arrow = n => n ** 0.5
const arrow2 = (n) =>{
    const resultado = n ** 0.5;
    return resultado
} 
//se for só uma linha nao precisa de chave
//se for so um parametro n parece parenteses
console.log(arrow(9))
console.log(arrow2(9))