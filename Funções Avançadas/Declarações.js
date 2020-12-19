//declaração de função  (function hoisting) hoisting= a engine do js vai elevar as declarações variaveis com var pro topo do JS
//se vc chamar a função antes de declarar ela dessa maneira, ela vai rodar, pois o javascript joga ela pra cima
//declaração classica
falaOi();
function falaOi() { console.log('oi') }

//as funções são first-class-objects
//function expressions
//quando a variavel recebe uma função ela passa a ser uma função
const SouUmDado = function () { console.log('sou um dado') }
//SouUmDado();

function executaFuncao(funcao) { funcao() }
executaFuncao(SouUmDado)

//arrow function
const arrow = _ => console.log('sou uma arrow function')
arrow()
//dentro de objeto posso ter função

const obj ={
    falar: function(){
        console.log('to falando')
    }
}
obj.falar()