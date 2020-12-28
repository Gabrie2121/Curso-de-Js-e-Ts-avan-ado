//closures é relacionado a escopo lexico
//closures é a habilidade da função referente ao escopo lexico
function criaOutra(){
    const nome = 'Luiz';
    return function(){
        return nome;
    }
}
const funcao = criaOutra();
//console.dir === console.log
console.dir(funcao)