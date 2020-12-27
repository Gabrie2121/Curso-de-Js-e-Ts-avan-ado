//return 
//retorna um valor
//finaliza a função
//a função não necessariamente precisa de um retorno, ela pode apenas fazer modificações
function cria1(nome, sobrenome){
    return{nome,sobrenome};
}
const p1 = cria1('gabriel','miranda');
console.log(p1);

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}

const duplicador = criaMultiplicador(2)
const triplicador = criaMultiplicador(3)
const quadriplicador = criaMultiplicador(4)

console.log(duplicador(3))
console.log(triplicador(4))
console.log(quadriplicador(10))