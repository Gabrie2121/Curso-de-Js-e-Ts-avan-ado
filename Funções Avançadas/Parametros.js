//se tiver mais argumento do que parametros, vai responder como undefined
function funcao(){
    //usa isso para mostrar os argumentos
    //só funciona nesse tipo de função de expressao (function nome(){})
    //console.log(arguments[0])

    let total = 0;
    //ele pega todos os argumentos e soma 
    for(let argumentos of arguments){
        total += argumentos;
    }
    console.log(total)
}
//mais eu n chamei o argumento na função
//funcao('valor')
funcao(1,2,3,4,5,6,7)

function funcao2(a,b =2){
    //se b tiver valor ele vai ser b, senao vai valer 2 (maneira antiga)
    //b=b||2; ISSO AQUI
    //a maneira atual é adicionar um valor padrao direto no argumento com sinal de igual
    
    return console.log(a+b)
}
//se quiser deixar um valor do meio como padrão, precisa adicionar ele como undefined
funcao2(2)