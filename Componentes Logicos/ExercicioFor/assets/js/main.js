const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];
const place = document.querySelector('.container');

for (let i = 0; i < elementos.length; i++) {
    //poderia ter destroturado elementos
    //place.innerHTML += `<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`
    //exemploo ==========
    //desestruturou
    let {tag, texto} = elementos[i];
    //criou o elemento da tag
    let el = document.createElement(tag);
    //inseriu o texto
    //quando so tem texto pode colocar somente innerText
    el.innerText = texto;
    //NÓ DE TEXTO
    //da para usar esse createTextNode tambem quando é texto
    let textoCriado = document.createTextNode(texto)
    console.log(textoCriado)
    //e colocou pra exibir
    place.appendChild(el);

}