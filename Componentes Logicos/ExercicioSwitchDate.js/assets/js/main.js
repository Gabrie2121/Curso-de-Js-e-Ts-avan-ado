const data = new Date();
const getWeekDay = () =>{
    switch(DayWeek){
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda';
        case 2:
            return 'Terça';
        case 3:
            return 'Quarta';
        case 4:
            return 'Quinta';
        case 5:
            return 'Sexta';
        case 6:
            return 'Sabado';
            
    }
}
const getMonth =()=>{
    switch(Month){
        case 1:
            return 'Janeiro';
        case 2:
            return 'Fevereiro';
        case 3:
            return 'Março';
        case 4:
            return 'Abril';
        case 5:
            return 'Maio';
        case 6:
            return 'Junho';
        case 7:
            return 'Julho';
        case 8:
            return 'Agosto';
        case 9:
            return 'Setembro';
        case 10:
            return 'Outubro';
        case 11:
            return 'Novembro';
        case 12:
            return 'Dezembro';
    }
}
const zeroPlus = num =>{
    return num>=10?num:`0${num}`;
}

const DayWeek = data.getDay();
const Month = data.getMonth();
const day = zeroPlus(data.getDate());
const hour = zeroPlus(data.getHours());
const minutes = zeroPlus(data.getMinutes());
const year = data.getFullYear();

document.querySelector('h1').innerHTML = `${getWeekDay()} Feira, ${day} de ${getMonth()} de ${year}
${hour}:${minutes}`

