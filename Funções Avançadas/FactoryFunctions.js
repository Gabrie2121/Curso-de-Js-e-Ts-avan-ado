//São funções que retornam Objetos
function criaPessoa(nome, sobrenome,a,p){
    return {
        nome,
        sobrenome,
        //outro Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor){
            //split separa peloss valores q vc propoe
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },
        fala(assunto = 'falando sobre js'){
            //nesse caso this, vai ser o p1, que foi quem chamou o metodo
            return `${this.nome} está ${assunto}`
        },
        altura: a,
        peso: p,
        //Getter - Somente para get de dados
        get imc(){
            const indice = this.peso/(this.altura**2)
            return indice.toFixed(2)
        }
    }
}
const p1 = criaPessoa('Nancy','Coelho', 1.85,100)
// O get faz o imc() virar um atributo inves de uma func
console.log(p1.imc)
p1.nomeCompleto = 'Gabriel Miranda Barboza'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())