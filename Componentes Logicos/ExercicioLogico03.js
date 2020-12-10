const fizzBuzz = (num)=>{
    if(num%3 === 0 && num%5 === 0)return 'fizzbuzz';
    if(num%3===0)return 'fizz';
    if(num%5===0)return 'buzz';
    if(typeof numero!== 'number')return num;
}
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
    
}
console.log(fizzBuzz(30))