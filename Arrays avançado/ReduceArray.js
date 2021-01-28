// Reduce -> reduzir todos os arrays a apenas um elemento juntando seu acumulador
// A maioria das coisasa aqui da pra fazer com filter e map

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//retorne um array com os pares
//difere com os padroes e não compensa fazer aqui, melhor o filter
const total = numeros.reduce((acumulador, valor, indice, array) => {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])//valor inicial pro acumulador
console.log(total)
//retorne um array com os numeros em dobro (da pra fazer com filter)
const total2 = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador.push(valor * 2)
    return acumulador
}, [])
console.log(total2)

// some todos os pares em apenas um inteiro
const total3 = numeros.reduce((acumulador, valor, indice, array) => {
    if (valor % 2 === 0) acumulador += valor
    return acumulador
}, 0)
console.log(total3)


// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 47 },
    { nome: 'Gabriel', idade: 62 },
    { nome: 'Eduardo', idade: 23 },
    { nome: 'Leticia', idade: 55 },
    { nome: 'Rosana', idade: 19 },
    { nome: 'Wallace', idade: 32 },
]
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade){
        return acumulador
    } 
    return valor
},0)
console.log(maisVelha)