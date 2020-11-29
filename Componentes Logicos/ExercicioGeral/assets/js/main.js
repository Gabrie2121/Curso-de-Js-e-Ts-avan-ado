const imc = ()=>{
    const form = document.querySelector('form');
    const peso = document.querySelector('#input-teste-1');
    const altura = document.querySelector('#input-teste-2');
    const resultado = document.querySelector('.resultado');
    form.addEventListener('submit', evento=>{
        evento.preventDefault();
        const valor = peso.value/(altura.value**2);
        console.log(valor)
        if (peso.value=== "" || altura.value === "") {
            resultado.innerHTML = `Digite os valores para gerar o resultado`;
            resultado.style.background = "red";
            resultado.style.height = "50px";
        }else if (valor <=18.5 ) {
            resultado.innerHTML = `seu imc é ${valor.toFixed(2)} e você está Abaixo do peso`;
            resultado.style.background = "#0f0";
            resultado.style.height = "50px";
        }else if (valor >=18.6 && valor<=24.9) {
            resultado.innerHTML = `seu imc é ${valor.toFixed(2)} e você está no peso ideal Parabéns`;
            resultado.style.background = "#0fff0a";
            resultado.style.height = "50px";
        }else if (valor >=25 && valor<=29.9) {
            resultado.innerHTML = `seu imc é ${valor.toFixed(2)} e você está levemente acima do peso`;
            resultado.style.background = "#0f0";
            resultado.style.height = "50px";
        }else if (valor >=30 && valor<=34.9) {
            resultado.innerHTML = `seu imc é ${valor.toFixed(2)} e você está com obesidade grau I`;
            resultado.style.background = "#0f0";
            resultado.style.height = "50px";
        }else if (valor >=35 && valor<=39.9) {
            resultado.innerHTML = `seu imc é ${valor.toFixed(2)} e você está com obesidade grau II (severa)`;
            resultado.style.background = "#0f0";
            resultado.style.height = "50px";
        }else if (valor >=40) {
            resultado.innerHTML = `seu imc é ${valor.toFixed(2)} e você está com obesidade grau III (mórbida)`;
            resultado.style.background = "#0f0";
            resultado.style.height = "50px";
        }
    })
}
imc()