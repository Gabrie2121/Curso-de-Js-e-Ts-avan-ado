const path = require("path");
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escrever = require("./modules/escrever");
const ler = require("./modules/ler");

//CRIAR ARQUIVO JSON
// const pessoas=[
//     {nome:'joao'},
//     {nome:'Gabie'},
//     {nome:'Nancy'},
//     {nome:'josafa'},
//     {nome:'joao'},
//     {nome:'Gabie'},
//     {nome:'Nancy'},
//     {nome:'josafa'},
// ]
// //transforma o array de obj, para JSONstring
// // identação com 2 espaços
// const json = JSON.stringify(pessoas,'',2)
// escrever(caminhoArquivo,json)
const leArquivo = async (caminho) => {
  const dados = await ler(caminho);
  renderizaDados(dados)
};
function renderizaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(val =>console.log(val.nome))
}
leArquivo(caminhoArquivo)