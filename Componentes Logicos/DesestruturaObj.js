const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Miranda',
    idade: 20,
    endereco:{
        rua: 'Av. Brasil', 
        numero: 320
    }
};
console.log(pessoa)

//atribuir via desestruturação: 
//se estiver vazio sai undefined
//caso esteja vazio aparece nao existe
const {nome = 'Não existe',sobrenome,idade: teste} = pessoa
console.log(nome,sobrenome, teste)
const {endereco: {rua, numero}} = pessoa
//dessa maneira só existem as vaariaveis rua e numero, nao xiste endereco
console.log(rua, numero)

