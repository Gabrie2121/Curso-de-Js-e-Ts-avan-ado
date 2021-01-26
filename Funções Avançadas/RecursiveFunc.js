// um for só que é uma função
function recursiva(max){
    if(max > 10)return; 
    console.log(max)
    max++;
    recursiva(max)
}
recursiva(1)