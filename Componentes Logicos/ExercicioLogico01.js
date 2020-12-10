const maior = (num1,num2)=>{
    if(num1>num2){
         return `o numero ${num1} é maior que o numero ${num2}`
    }else if(num1===num2){
         return `o numero ${num1} é igual o numero ${num2}`
    }
    return `o numero ${num1} é menor que o numero ${num2}`   
}
//Feita com melhorias de ternario
const otimizada = (num1,num2)=> num1>num2? `o numero ${num1} é maior que o numero ${num2}`: `o numero ${num1} é menor que o numero ${num2}`
console.log(maior(1,5));
console.log(otimizada(1,5));