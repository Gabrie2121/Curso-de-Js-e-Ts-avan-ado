const verdadeira = true;
let nome = 'Luiz';
var nome2 = 'Luiz';
//let tem escopo de bloco {bloco}
//var só vai ter o escopo de função
//o let ele cria novamente
//o var ele redeclara
//o let vai usar a declaraçao feita no bloco
//o var vai usar a mais proxima redeclarada
if(verdadeira){
    let nome = 'Otavio'
    console.log(nome, nome2)
    if(verdadeira){
        var nome2 = 'RAIZ'
        console.log(nome, nome2) 
    }
}
