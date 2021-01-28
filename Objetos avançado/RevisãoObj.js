// revisão emcima de objetos

const pessoa = {
    nome:'Gabriel',
    sobrenome: 'Miranda'
}
console.log(pessoa.nome)


const chave = 'sobrenome'
console.log(pessoa['sobrenome'])
//é a mesma coisa os 2
console.log(pessoa[chave])



//cria new dinamic
const pessoa1 = new Object()
pessoa1.nome = 'Gabriel'
pessoa1.sobrenome = 'Miranda'
pessoa1.falarNome = function(){
    console.log(`${this.nome} está falando seu nome`)
}
console.log(pessoa1)
pessoa1.falarNome()

//apagar 
delete pessoa1.nome
console.log(pessoa1)

