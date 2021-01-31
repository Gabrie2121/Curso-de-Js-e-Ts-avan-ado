//escrever arquivos
const fs = require('fs').promises

//passar o caminho final teste.txt

//CRIAR ARQUIVO TXT
//passar o caminho que queremos escrever
//escrever o texto
//flag w = apagar tudo que estiver dentro dele, caso ele ja exista
//flag a = adicionar o texto toda vez
//mandar formato de UTF-8
//ele vai criar o archive teste.txt
//fs.writeFile(caminhoArquivo,'Frase 1\n',{flag:'a',encoding:'utf-8'})
//muito util para arquivo de log

module.exports = (caminho,dados)=>{
    fs.writeFile(caminho,dados,{flag:'w',encoding:'utf8'})
}