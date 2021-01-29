// promessas
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
        setTimeout(() => {
            //parametro unico resolve que age como return
            if (typeof msg !== 'string') {
                reject('Não pode só numeros')
            }
            resolve(msg);
        }, tempo)
    })
}

// fazer com que elas executem na sequencia
// com callbacks seria uma arvore de natal
esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {//.then é o retorno da promisse resolve
        console.log(resposta)//aqui ta a frase 1
        return esperaAi('Frase 2', rand(1, 3))//você manda o retorno e o proximo then pega ele
    }).then(resposta => {
        console.log(resposta)//aqui ta a frase 2
        return esperaAi('Frase 3', rand(1, 3))
    }).then(resposta => { // da para mandar sem parametros tbm
        console.log(resposta)//aqui ta a frase 3
        return esperaAi(102, rand(1, 2)) // criado apenas para gerar o erro
    }).then((resposta) => {
        console.log(resposta)
    })
    .catch(e => {// quando aconteceu o erro foi direto para o catch
        console.log('ERRO:', e)
    })//.catch é o retorno da promisse reject
    // bom para usar nas questões 404, 410 etc