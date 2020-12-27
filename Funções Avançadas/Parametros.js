//se tiver mais argumento do que parametros, vai responder como undefined
function funcao() {
    //usa isso para mostrar os argumentos
    //só funciona nesse tipo de função de expressao (function nome(){})
    //console.log(arguments[0])

    let total = 0;
    //ele pega todos os argumentos e soma 
    for (let argumentos of arguments) {
        total += argumentos;
    }
    console.log(total)
}
//mais eu n chamei o argumento na função
//funcao('valor')
funcao(1, 2, 3, 4, 5, 6, 7)

function funcao2(a, b = 2) {
    //se b tiver valor ele vai ser b, senao vai valer 2 (maneira antiga)
    //b=b||2; ISSO AQUI
    //a maneira atual é adicionar um valor padrao direto no argumento com sinal de igual

    return console.log(a + b)
}
//se quiser deixar um valor do meio como padrão, precisa adicionar ele como undefined
funcao2(2)

//atribuicao via desestruturação com parametros em objeto

function funcao3({ nome, sobrenome, idade }) {
    //desestruturar um por um
    console.log(nome, sobrenome, idade)
}
funcao3({ nome: 'Gabriel', sobrenome: 'miranda', idade: 20 })
//pode mandar a variavel tbm
let baboseira = { nome: 'Gabriel', sobrenome: 'miranda', idade: 20 }
funcao3(baboseira)

//atribuicao via desestruturação com parametros em array

function funcao4([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}
//funciona com variavel tbm
funcao4([1,2,3])

//rest operator, o argumento que tiver os 3 pontos recebe todo os argumentos finais
function conta(operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros);
    //puxar os numeros do "array"
    for(let numero of numeros){
        console.log(numero)
        if (operador==='+') {operador+=numero};
        if (operador==='-') {operador-=numero};
        if (operador==='/') {operador/=numero};
        if (operador==='*') {operador*=numero};
    }
}
conta('+',0,20,30,40,50)