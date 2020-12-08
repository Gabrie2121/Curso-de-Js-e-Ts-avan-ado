const frutas = ['Pera', 'Maça', 'Uva'];
//For in -> le os indices ou chaves do obj

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Miranda',
    idade: 13
}
for (const i in pessoa) {
    console.log(i, pessoa[i])
}