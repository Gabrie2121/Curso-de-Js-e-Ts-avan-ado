//criar objeto literal
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)
//funcao para criar objeto
function criaPessoa(nome,sobrenome,idade){
    return{
        /**quando o atributo tiver o mesmo nome que o indicador
         * nao precisa citar o indicador. ex: nome: nome
         */
        nome,
        sobrenome,
        idade
    };
}
const pessoaretorno = criaPessoa('Raio','Otavio',25);
console.log(pessoaretorno.nome);
console.log(pessoaretorno.sobrenome);
console.log(pessoaretorno.idade);
//metodo/funcoes dentro do objeto
const pessoa3 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`)
    },
    incrementaIdade(){
        this.idade++;
    }
};
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
