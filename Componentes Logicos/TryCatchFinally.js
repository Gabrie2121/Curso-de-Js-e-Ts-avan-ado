try {
    //é executada quando não há erros
    console.log(abrir)
} catch (e) {
    //é executada quando há erros
    console.log('tratar o  erro')
} finally {
    console.log('feito')
    //sempre é executada
}
function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando Instancia de Date.')
    }
    if (!data) {
        data = new Date()
    }
    return data.toLocaleTimeString('pt-BR', {
        //para deixar a hora em 12h ao inves de 24h
        hour12: true,
        //para colocar tudo com 2 digitos
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}
try {
    const dat = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(dat);
    console.log(hora);
}catch(e){
    console.log('tratar erro')
}finally{
    console.log('bom dia')
}