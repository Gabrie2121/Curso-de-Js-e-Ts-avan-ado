const paragrafos = document.querySelector('.paragrafos');
//selecionou todos paragrafos dentro do div paragrafos
//funciona com indice [] like array
const ps = paragrafos.querySelectorAll('p');

//pegar os estilos do css computados
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)

for(let p of ps){
    p.style.backgroundColor= backgroundColorBody
    p.style.color = 'white'
}