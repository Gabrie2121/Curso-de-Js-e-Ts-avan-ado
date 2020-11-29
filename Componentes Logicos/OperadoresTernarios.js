// ? :
const pontuacaoUsuario = 1000;
if(pontuacaoUsuario >=1000){
    console.log('vip User')
} else{
    console.log('regular User')
}

//operação ternaria =>
//condicao?'valor verdadeiro': 'valor falso'
const nivelUsuario = pontuacaoUsuario>=1000?'vip user':'regular User'
console.log(nivelUsuario)

const corUsuario = null;//fallback, se o valor continuar em null ou falsa, ela ira pegar a proxima e assim em diante
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);