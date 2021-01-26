const nomes = ['Eduardo','Maria','Joana'] // array literal
const novo = [...nomes] //copiei o nome mais qualquer mudança no novo não muda o nomes
// const nomes1 = new Array('Eduardo', 'Maria', Joana)// array construtor

nomes[2] = 'Joao'//replace
delete nomes[2] //remover do array sem alterar indice
novo.pop()//remove o ultimo do array
//novo.shift()//remove o primeiro do array
//novo.push('Joao')//adiciona no final
//novo.unshift('Wallace')//adiciona no começo
// da para jogar em variavel

console.log(nomes)
console.log(novo)

//fatiar array

const novoSlice = nomes.slice(1,2)//o ultimo não é incluido
console.log(novoSlice)

//converter string -> array
const name = 'Gabriel Miranda Barboza'
const names = name.split(' ')//split separa por valores escolhidos
console.log(names)