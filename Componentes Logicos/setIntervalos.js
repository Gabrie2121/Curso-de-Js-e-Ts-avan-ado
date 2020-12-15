 function mostraHora(){
     let data = new Date();
     return data.toLocaleTimeString('pt-BR',{
         hour12: false
     });
 }
//  function funcaodoInteval(){
//      console.log(mostraHora())
//  }

// //passa a referencia da funcao sem as parenteses
// //funcao,parametros em MS
// setInterval(funcaodoInteval,1000);

//usar função anonima ajuda com o codigo limpo
//funciona com ou sem variavel pra chamar
const timer = setInterval(() => {
    console.log(mostraHora())
}, 1000);

//set TimeOut
setTimeout(()=>{
    clearInterval(timer)
},10000)
//da pra colocar coisas dentro e usar como timeOut
setTimeout(()=>{
    console.log('erro')
},10000)