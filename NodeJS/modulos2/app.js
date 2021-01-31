const mod = require('./mod')
const path = require('path')
console.log(mod(2,5))

console.log(__filename)//caminho real do arquivo
console.log(__dirname)//caminho real da pasta atual

console.log(path.resolve(__dirname))
console.log(path.resolve(__filename))


console.log(path.resolve(__dirname, '..','..'))
//voltar pastas ou entrar em pastas
//assim como funciona com arquivos tbm

//alinha os caminhos para diferentes s.o