//recursão mutua
//funcoes que dependem de funcoes

//trabalhar com caminhos
const fs = require('fs').promises
const path = require('path')

const readdir = async rootDir => {
    rootDir = rootDir || path.resolve(__dirname)
    //ler o caminho
    const files = await fs.readdir(rootDir)
    //enviar o caminho e os arquivos
    walk(files,rootDir)
}
const walk = async (files,rootDir) => {
    for (let file of files) {
        //pegar o caminho completo do arquivo
        const fileFullPath = path.resolve(rootDir, file)
        //pegar os status do arquivo
        const stats = await fs.stat(fileFullPath)

        //ver se é dir
        if(stats.isDirectory()){
            readdir(fileFullPath)
            continue
        }
        //ver se é git
        if(/\.git/g.test(fileFullPath))continue
        //ver se é node_modules
        if(/node_modules/g.test(fileFullPath))continue
        //ver se é css
        if(!/\.html/g.test(fileFullPath)&&!/\.css/g.test(fileFullPath))continue
        //verificar se ele é um file ou dir
        console.log(fileFullPath)
        //se for dir vai responder true
    }
}
//enviando o caminho real
readdir('/Users/Smurf/Desktop/Curso-de-Js-e-Ts-avancado')



//mandar o caminho absoluto via path
// fs.readdir(path.resolve(__dirname))
// .then(files => console.log(files))
// .catch(e=>console.log(e))