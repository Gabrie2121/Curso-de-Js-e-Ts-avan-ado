const nome = 'Gabriel'
const sobrenome = 'Miranda'

const falaNome = () => {
    console.log(nome, sobrenome, ' FALEI')
}

//ta exportando o nome agora
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome;

//atalho

exports.nomeee = nome// não precisa ter o nome da chave, apenas a indicação precisa
exports.sobrenome = sobrenome
exports.falaNome = falaNome
this.qualquerCoisa = 'O que eu quiser exportar'// o this com . é module.exports
//ele emite um objeto com o nome, sobrenome e a func


class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

const nome1 = 'Gabi'
const sobre = 'Mira'
module.exports = {
    nome1, sobre, Pessoa
}
