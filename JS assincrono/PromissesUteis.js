//metodos para ajudar nas promisses

function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}
function esperaAi(msg, tempo) {
    //chamar o construtor da promise
    //resolve == codigo executo sucesso = resolve
    //reject == codigo deu erro = rejeita ele
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('O valor informado precisa ser letras ou letras e numeros')
            return;
        }
        setTimeout(() => {
            //parametro unico resolve que age como return   
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo)
    })
}

// Promise.all | Promise.race | Promise.resolve | Promise.reject

const promises = ['Primeiro valor',esperaAi('Promisse1',3000),
esperaAi('Promisse2',500),esperaAi('Promisse3',1000),esperaAi(1000,1000),'Outro valor']

//Promise.all = array com promises
Promise.all(promises).then(valor=>{
    console.log(valor)
}).catch(e=> console.log(e))//vai dar catch pq tem um promise inteiro


const promises2 = [esperaAi('Promise1',3000),
esperaAi('Promise2',500),esperaAi('Promise3',1000)]
//Promise.race = a primeira q resolver me manda
Promise.race(promises2).then(valor=>{
    console.log(valor);//a promise 2 foi resolvida pos é a que foi mais rapido 500ms
    //ele continua carregando as promises porem só mostra o valor do primeiro
}).catch(e=>console.log(e))//se o erro for mais devagar que o valor, o valor aparece primeiro


//Promise.resolve = ele não precisa esperar pois a promessa ja esta pronta

function baixaPagina(){
    const emCache = false;

    if(emCache){
        //vai automatico, não precisa esperar
        return Promise.resolve('Pagina em cache')
        //return Promise.reject('Pagina em cache')
        //se for reject ele cai direto no catch
    }else{
        return esperaAi('Baixei a pagina', 3000)
    }
}
baixaPagina().then(dadosPagina=>{
    console.log(dadosPagina)
}).catch(e=>console.log(e))