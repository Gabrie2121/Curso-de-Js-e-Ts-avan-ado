// Getter and Setter

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        //value: estoque, N precisa pq usa get e set
        //writable: false, Tem metodo para trabalhar pro valor
        configurable: false,
        get: function () {
            return estoque
        },//puxar o valor
        set: function (valor) {
            if(typeof valor !== 'number'){
                throw new TypeError('só pode inteiro')
            }
            estoque = valor//ta recebendo os 300
        }//adiciona o valor
    })
}

function criaProduto(nome){
    return {
        get nome(){return nome},
        set nome(valor){
            valor = valor.replace('coisa.', '')
            nome = valor
        }
    }
}
const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
p1.estoque = 300
console.log(p1.estoque)

const p2 = criaProduto('camiseta')
p2.nome = 'Qualquer coisa.'
console.log(p2.nome)