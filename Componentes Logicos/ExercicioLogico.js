const maior = (num1,num2)=>{
    if(num1>num2){
        return `o numero ${num1} é maior que o numero ${num2}`
    }else if(num1===num2){
        return `o numero ${num1} é igual o numero ${num2}`
    }else{
        return `o numero ${num1} é menor que o numero ${num2}`
    }
}
console.log(maior(1,5))