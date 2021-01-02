//São funções que retornam Objetos
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            return `${nome} está falando ${assunto}`
        }
    }
}
const p1 = criaPessoa('gabriel','miranda')
console.log(p1)