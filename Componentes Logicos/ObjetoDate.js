//adc 3horas => const tresHoras = 60*60*3*1000
//adc 1 dia =>const umDia = 60*60*24*1000;
//const data = new Date(ano, mes, dia, horas,minutos,segundos, milesimos); se voce n colocar um, ele coloca o primeiro
const data = new Date(2020, 0, 29, 00, 12, 20, 500);
console.log(data.toString());

//mais utilizado usa new Date('ano-mes-dia hora:min:sec.ms')
//pode ser tbm usa new Date('ano-mes-diaThora:min:sec.ms')
const data2 = new Date('2019-10-21 20:20:59');
//lembrando que tudo começa do zero, se quiser o valor real tem que adicionar +1
console.log('Dia', data2.getDate());
console.log('Mês', data2.getMonth());
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Min', data2.getMinutes());
console.log('Sec', data2.getSeconds());
console.log('Ms', data2.getMilliseconds());
console.log('Dia semana', data2.getDay());//0 é domingo
console.log(data2.toString());

console.log(Date.now())//vai gerar em ms

//funcao geradora de data formada
const formataData = (data)=>{
    //console.log(data);
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth()+1);
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());
    const sec = zeroAesquerda(data.getSeconds());
    return `${dia} ${mes} ${ano} ${hora} ${min} ${sec}`
}
//adiciona um zero a esquerda em numeros que forem menor do que 10 para questão de embelezamento msm
const zeroAesquerda = num=>{
    return num>=10?num:`0${num}`
}

const date = new Date();
const dataBrasil = formataData(date);
console.log(dataBrasil)