// função construtora manda objetos igual a fabrica
// Construtora sempre cria com primeira letra MAIUSCULA
// Construtora usa palavra new == Pessoa (new)
// São um molde para os objetos

//não criaPessoa
function Pessoa(nome, sobrenome) {
    //chama como um objeto direto
    //não precisa de ,(virgula)
    //seria como Pessoa.nome
    //atributos ou metodos privados
    const ID = 123456;

    const metodoInterno = () => {
        
    }

    //Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log('Sou um metodo')
    }
    //não precisa de return pois ja tem incluso
}
//nas construtoras voce usa o new antes do nome com letra maiuscula
const p1 = new Pessoa('Gabriel', 'Miranda')
const p2 = new Pessoa('Gabrier', 'Coelho')
console.log(p1)
console.log(p2.nome)
p1.metodo()
