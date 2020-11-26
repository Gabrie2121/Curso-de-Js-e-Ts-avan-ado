//iife funcao auto invocada
const escopo = () =>{
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    //bloquear que a pagina atualize apos o click no botao
    form.addEventListener('submit', evento=>{
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobre');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const users = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }
        //poderia ter feito o objeto dentro do push. o professor colocou dentro porem funciona igual
        pessoas.push(users);
        console.log(pessoas);
        resultado.innerHTML += `Nome: ${users.nome} ${users.sobrenome} tem ${users.peso}kg e ${users.altura} de altura<br/>`;
    } );
}
escopo();
/**
     * forma diferente porem mais hard
     * form.onsubmit = function(evento){
     *   evento.preventDefault();
    };* */
    //as duas fazem a mesma coisa