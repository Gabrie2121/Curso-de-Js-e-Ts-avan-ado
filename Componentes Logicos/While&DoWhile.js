// const nome = 'Luiz';
// let control = 0;

// da para usar lenght
//  while(control<10){
//      console.log(control)
//      control++
//  }
const random = (min,max)=>{
    const r = Math.random()*(max-min)+min;
    return Math.ceil(r);
}

let rand = random(1, 50);
console.log(rand);
let i = 0
//ele só sai do loop quando o argumento der diferente
while(rand !== 10){
    rand = random(1,50)
    console.log('Não')
    i++
    console.log(i)
}
//ele executa uma vez sempre seja la o que acontecer
do{
    rand = random(1,50)
    console.log('Não')
}while(rand !== 10);