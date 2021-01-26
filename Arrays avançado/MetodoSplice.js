const nomes = ['Maria','Joao','Eduardo','Gabriel','Julia']

//nomes.splice(indice, delete, add,add,add);
//pop em splice:
const removidos =  nomes.splice(-1,Number.MAX_VALUE)
//Number.max_value quer que altere o maximo possivel
nomes.splice(-1,0, 'Nancy','Taina')
//Adiciona o valor no indice escolhido
console.log(nomes, removidos)