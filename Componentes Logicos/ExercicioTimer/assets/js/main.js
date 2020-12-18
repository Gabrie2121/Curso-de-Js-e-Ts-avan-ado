const relogio = document.querySelector('#relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let hour = 0;
let minutes = 0;
let seconds = 0;

iniciar.addEventListener('click', event => {
    console.log(event)
    const conta = setInterval(() => {
        seconds = seconds + 1
        if (seconds >= 60) {
            minutes = minutes++;
            seconds = 0
        }
        else if (minutes >= 60) {
            hour = hour++;
            minutes = 0
        }
        else if (hour >= 24) {
            hour = 0
            minutes = 0
            seconds = 0
        }
        relogio.style = 'color: #000'
        return relogio.innerHTML = `${hour >= 10 ? hour : `0${hour}`}:${minutes >= 10 ? minutes : `0${minutes}`}:${seconds >= 10 ? seconds : `0${seconds}`}`
    }, 1000)
    pausar.addEventListener('click', event => {
        clearInterval(conta)
        relogio.style = 'color: red'
    })
    zerar.addEventListener('click', event => {
        clearInterval(conta)
        hour = 0;
        minutes = 0;
        seconds = 0;
        relogio.style = 'color: #000'
        return relogio.innerHTML = `${hour >= 10 ? hour : `0${hour}`}:${minutes >= 10 ? minutes : `0${minutes}`}:${seconds >= 10 ? seconds : `0${seconds}`}`

    })
})


