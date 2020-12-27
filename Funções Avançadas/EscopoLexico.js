const nome = 'Gabriel';
//escopo lexico é verficar onde uma variavel puxada pela função está declarada
//a chamada sempre vai pegar a variavel mais proxima
function falaNome(){
    console.log(nome)
}
falaNome()