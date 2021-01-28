// ForEach - só é disponivel em arrays

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
let total = 0

//mesmas linhas de parametros que o .map, filter
a1.forEach((val,ind,arr)=>console.log(total+=val))
console.log('\n',total)