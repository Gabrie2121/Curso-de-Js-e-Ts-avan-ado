const data = new Date('2000-12-04 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;
//coloca a variavel que deseja fazer o switch dela
switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        //necessario ter o break para fechar o case do switch
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sabado';
        break;
    //sempre fica no final default
    //se nenhum case for executado ele ativa o default
    default:
        //sempre ativa
        diaSemanaTexto = ''
        //nao é obrigatorio o break pois ele é o ultimo
        break;
}
console.log(data ,diaSemanaTexto)

//Switch com function

const getDayYearText = diaSemana =>{
    let diaSemanaTexto;
    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            //necessario ter o break para fechar o case do switch
            //sempre que a função encontra a palavra return ela acaba
            //por isso dentro de funcao para finalizar não é necessario o break
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        //sempre fica no final default
        //se nenhum case for executado ele ativa o default
        default:
            //sempre ativa
            diaSemanaTexto = ''
            //nao é obrigatorio o break pois ele é o ultimo
            return diaSemanaTexto;
    }
    
}
const diaGET = getDayYearText(diaSemana);
console.log(diaGET)