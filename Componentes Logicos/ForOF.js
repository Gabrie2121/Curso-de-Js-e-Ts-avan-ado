//age para variaveis interaveis

const nome = 'Gabriel Miranda';

//ele passa o valor letra por letra
//funciona em string e em valor
for (const i of nome) {
    console.log(i)
}
const array = ['Gabriel', 'Miranda']

for(const i of array){
    console.log(i)
}

// em for Normal
// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]) 
// }

//em for IN
// for (const i in nome) {
//     console.log(nome[i])
// }

array.forEach((valor,indice,array) => {
    console.log(valor,indice,array);
});

//for classico - geralmente usa com iteraveis (array/strings)

//for in - retorna o indice ou chave

//for of - retorna o valor em si