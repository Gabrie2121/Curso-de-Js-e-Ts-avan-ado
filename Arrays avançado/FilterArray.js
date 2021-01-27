//Filter -> Sempre retornar um array com a mesma qtd de elementos ou menos

//Retorne os numeros maiores que 10 apenas
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
//não modifica o original

const numerosFiltrados = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array)
    return valor > 10
})//ja tem 3 parametros sozinhos

//ele filtra os valores conforme a condição especificada na func callback
console.log(numerosFiltrados)

// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 47 },
    { nome: 'Gabriel', idade: 62 },
    { nome: 'Eduardo', idade: 23 },
    { nome: 'Leticia', idade: 55 },
    { nome: 'Rosana', idade: 19 },
    { nome: 'Wallace', idade: 32 }, 
]
// 5 letras ou mais
const pessoasNome5 = pessoas.filter(valor=> valor.nome.length >= 5)//pode trocar valor por qualquer coisa
console.log(pessoasNome5)

const pessoa50 = pessoas.filter(valor => valor.idade >50)
console.log(pessoa50)

//endsWith para pegar a ultima letra
const pessoaA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'))
console.log(pessoaA)