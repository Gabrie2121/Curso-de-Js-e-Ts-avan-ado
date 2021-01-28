//travar objeto frezze
//defineProperty - defineProperties

function Produto(nome, preco, estoque){
    this.nome = nome;    
    this.preco = preco;
    //this.estoque = estoque//forçar com que essa var n seja alterada
    //quero que ele seja exibido
    Object.defineProperty(this,'estoque',{
        //mostra a chave no for in ou indice
        enumerable: true,
        //valor é = estoque
        value: estoque,
        //pode alterar o valor? não vai alterar
        writable: false,
        // pode apagar a chave? ou reconfigurar a chave? criar outro object.defineProperty para reconfigurar
        configurable: false // tambem nao pode ser apagado
    })
}
const p1 = new Produto('Camiseta',20,3)
console.log(p1)

//se o enmerable estiver falso, voce n pode ver ele aqui nem no for in
//mostra as chaves do objeto
console.log(Object.keys(p1))

function Produtos(nome, preco, estoque){
    Object.defineProperty(this,'estoque',{
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: false
    })

    //a mesma coisa só q vc faz em quais vc quiser definir
    Object.defineProperties(this,{
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: false
        },
    })
}
const p2 = new Produtos('Camiseta',20,3)