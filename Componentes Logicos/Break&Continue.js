//quebrar/pular laço quando quiser
//seja for, while e todos seus descendentes

const numeros = [1,2,3,4,5,6,7,8,9];

for(let numero of numeros){
    if(numero === 2){
//o continue sempre pula pra proxima interação do laço
//no caso quando ele encontra o numero 2, ele pula pro proximo laço e n executa o codi
        console.log('Pulei o 2')
        continue;
    }
    if(numero===7){
//o break sai do bloco e termina o laço
//no caso quando ele chegar no 7 ele vai sair do loop e não executa o resto
        break;
    }
    console.log(numero);
}