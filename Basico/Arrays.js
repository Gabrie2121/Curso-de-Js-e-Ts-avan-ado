const alunos = ['Luiz','João','Maria'];
//console.log(alunos[0][0]); isso pega a letra respectiva
//console.log(variavel[4]); funciona assim tbm
//console.log(alunos[0]);
//console.log(alunos[2]);
console.log(alunos.length);
//adicionar item no final no array
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Rafael'; 
console.log(alunos); 
//adicionar item no final do array
alunos.push('Otávio');
alunos.push('Fabiana')
console.log(alunos);
//adicionar item no inicio do array
alunos.unshift('Segundo')
alunos.unshift('Primeiro')
console.log(alunos)
//remover item do final do array
const removido = alunos.pop();
console.log(alunos);
console.log(removido);
//remover item do inicio do array
const removidoPrimeiro = alunos.shift();
console.log(alunos);
console.log(removidoPrimeiro);
//remover item do array sem mexer na ordem de valor, 0, 1, 2 etc
delete alunos[1]; //o indice nao altera e deixa o elemento vazio
//fatia o array
alunos.push('Luiza');
alunos.push('Eduardo');
console.log(alunos.slice(0, 3));//vai do 0 ao 2, o ultimo n iclui
console.log(alunos.slice(0, -2));//fatia eliminando os indices finais
//saber se é array
console.log(alunos instanceof Array);//se sim, retrna true
/*os melhore sao push e unshift se quiser adicionar no inicio
*adicionar no inicio pode quebrar umpoco a performance do sistema
*o mais usado é o .push()
*/
