//quando a função finaliza executa a função de CallBack
function random(min =1000, max= 3000){
    const num = Math.random()*(max-min)+min
    return Math.floor(num);
}
//precisa receber um parametro de callback
function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if(callback){callback()};
    },random())
    
}
function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if(callback){callback()};
    },random())
}
function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if(callback){callback()};
    },random())
}

// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('ola mundo')
//         });
//     })
// });

f1(f1callback);
function f1callback(){
    f2(f2callback);
}
function f2callback(){
    f3(f3callback);
}
function f3callback(){
    console.log('olá mundo')
}
