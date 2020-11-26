//algumas variaveis sao imutaveis em seu indice 
let nome = 'GABRIEL';
nome[0] =  'L';
console.log(nome[0]);
//copiando o dado primitivo
let a = 'A';
let b = a;
//a == b
console.log(b);
a= 'Outra coisa';
console.log(a, b)

//Valor por referencia mutaveis = 
//array, objetos, funcoes
let array = [1, 2, 3];
let barray = array;
//para copiar o valor de a para b e b ser independente
let carray = [...array]
console.log(array, barray);
array.push(4);
console.log(array, barray);
barray.pop();
console.log(array, barray);
carray.push(8);
array.push('Carlos')
//carray vai ser mudado com 8
//array colocara o Carlos e nao mudara o c
console.log(carray, barray);
//com objeto
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};
const bpessoa = pessoa;
pessoa.nome = 'Joao';
console.log(bpessoa);
const cpessoa = {...pessoa};
bpessoa.nome = 'Claudio';
//mesma coisa do carray
console.log(cpessoa, bpessoa);