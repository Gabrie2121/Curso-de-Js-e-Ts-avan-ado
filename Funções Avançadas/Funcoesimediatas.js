// IIFE -> expressão de função invocada imediatamente
//objetivo de fugir do escopo global

//dessa maneira precisa dar nome pra função e chamar ela logo apos
function any() {
    console.log(1211)
}
any();

//chamada automaticamente quando criada
//this is a IIFE->  

(function () {
    const nome = 'luz'
    console.log(nome)
})();
(function (nome,idade) {
    console.log(nome, idade)
})('gabriel',20);