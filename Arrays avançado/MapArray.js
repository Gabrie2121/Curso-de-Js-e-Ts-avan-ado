// Map -> vai ter sempre o mesmo tamanho do array original e pode modificar o valor do array

// Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//no filter so filtrava, aqui podemos modificar o valor
const numerosDobro = numeros.map(valor => valor * 2)
console.log(numerosDobro)


// Retorne apenas uma string com o nome da pessoa
// remova apenas a chave nome do objeto
// adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 47 },
    { nome: 'Gabriel', idade: 62 },
    { nome: 'Eduardo', idade: 23 },
    { nome: 'Leticia', idade: 55 },
    { nome: 'Rosana', idade: 19 },
    { nome: 'Wallace', idade: 32 },
]
const pessoasNome = pessoas.map(valor => valor.nome)
console.log(pessoasNome)

const pessoasRemove = pessoas.map(valor => ({idade:valor.idade}))
console.log(pessoasRemove)

const pessoasID = pessoas.map((valor, indice) =>{ 
    //precisa do newObj senao meche no array original
    const newObj = {...valor}
    newObj.id = indice
    return valor

    //podia ser 
    // delete newObj.nome
})
console.log(pessoasID)