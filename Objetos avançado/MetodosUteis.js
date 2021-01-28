/**
 * Object.values
 * Object.entries
 * Object.asign(des,any
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ...(spread)
 * 
 * Já vimos:
 * Objects.keys(retorna as chaves)
 * Object.freeze (bloqueia o objeto)
 * Objeto.defineProperties (define varias propriedades)
 * Object.defineProperty(define uma propriedade)
 */


//OS DOIS APONTAM PARA O MESMO LOCAL DA MEMORIA
// a menos que use ...spread ou assign

const produto = {
    nome:'Caneca',
    preco: 1.8
}
const outraCoisa= produto;

//formas de copia
const outraCoisacomSpread= {...produto};//pode adicionar mais coisas tambem
const caneca = Object.assign({},produto,{material: 'porcelana'})

console.log(caneca)



//trava o objeto para n mexer
Object.freeze(produto)

//retorna o que a propriedade é
//se o objeto se tornar freeze, o configurable estara falses
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

//pega indices keys
console.log(Object.keys(produto))
//Pega os valores sem as chaves
console.log(Object.values(produto))
//Pega os dois
console.log(Object.entries(produto))

