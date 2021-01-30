function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('O valor informado precisa ser letras ou letras e numeros')
                return;
            }
            resolve(msg);
            return;
        }, tempo)
    })
}
//promise com then continua sendo bem cheio assim como callback

// esperaAi('Fase 1', rand(0,3)).then(valor=>{
//     console.log(valor)
//     return esperaAi('Fase 2', rand(0,3))
// }).then(valor=>{
//     console.log(valor)
//     return esperaAi('Fase 3', rand(0,3))
// }).then(valor=>{
//     console.log(valor)
// }).catch(e=>console.log(e))

//async await vai permitir que usemos promisse dentro da função como se fosse sincrona

//só pode usar async await em uma função com async

async function executa() {
    //await espera as promessas
    try {
        const fase1 = await esperaAi('Fase 1', rand(0, 3))
        console.log(fase1)
        const fase2 = await esperaAi('Fase 2', rand(0, 3))
        console.log(fase2)
        const fase3 = await esperaAi('Fase 3', rand(0, 3))
        console.log(fase3)

        //a fase fica com pendente enquanto aguarda sem o await
        const fasePending = esperaAi('Fase Pending', rand(0,1))
        console.log(fasePending)
        setTimeout(() => { console.log(fasePending) }, 1100)//demonstra agora graças ao timeout com um valor a aguardar carregar


        const fase4 = await esperaAi(25, rand(0, 3))//para dar erro
        console.log(fase4)//quando cai no erro para o try e vai pro catch
    } catch (e) {
        console.log(e)
    }

}
executa()
//promises tem 3 estados basicos
//pendente = pending que é quando vc não usa o await no caso do async
//fullfiled = ela resolvida (sucesso)
//reject = rejeitada(falha)

