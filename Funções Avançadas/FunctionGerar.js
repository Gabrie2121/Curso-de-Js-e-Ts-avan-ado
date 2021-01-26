//tem um recurso especial de pausar o codigo em algum momento
function* geradora1(){
    //funciona como um retorno aqui
    //Código qualquer ...
    yield 'Valor 1';
    //Código qualquer ...
    yield 'Valor 2';
    //Código qualquer ...
    yield 'Valor 3';
}
//cada vez que você chamar, ele vai retornar o proximo valor

const g1 = geradora1()
console.log(g1)// mostra o obj

console.log(g1.next())//mostra o valor 1
console.log(g1.next().value)//mostra o valor 2
console.log(g1.next().value)//mostra o valor 3
console.log(g1.next())// o valor vai undefined mais o done vai como true, pois finalizou

function* geradora2(){
    let i = 0    

    while(true){
        yield i;
        i++
    }
}
const g2 = geradora2();
console.log(g2.next().value)//0
console.log(g2.next().value)//1
console.log(g2.next().value)//2
console.log(g2.next().value)//3
console.log(g2.next().value)//4
console.log(g2.next().value)//5


function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4(){
    //delegou o 0 1 2 para outra geradora e chamou ela antes
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}
const g4 = geradora4()

//da para iteragir na func
for(let valor of g4){console.log(valor)}