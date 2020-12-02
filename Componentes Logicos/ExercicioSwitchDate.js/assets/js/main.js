const data = new Date();
const DayWeek = data.getDay();
const Month = data.getMonth();
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
        case 1:
            return 'Janeiro';
        case 1:
            return 'Janeiro';
        case 1:
            return 'Janeiro';
        case 1:
            return 'Janeiro';
        case 1:
            return 'Janeiro';
        case 1:
            return 'Janeiro';
        case 1:
            return 'Janeiro';
        case 1:
            return 'Janeiro';
        case 1:
            return 'Janeiro';
        case 1:
            return 'Janeiro';
        case 1:
            return 'Janeiro';
    }
}
const zeroPlus = num =>{
    return num>=10?num:`0${num}`;
}
const DayandTime = ()=>{
    const day = zeroPlus(data.getDate());
}