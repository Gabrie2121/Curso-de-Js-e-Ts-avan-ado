const input = document.querySelector('#entrada');
const button = document.querySelector('#adicionar');
const list = document.querySelector('.tarefas');

const criaLi = _ => {
    const li = document.createElement('li')
    return li;
}
input.addEventListener('keypress', (e) => {
    //keycode 13 é o enter
    //quando ele for pressionado ele pode fazer algo
    if (e.keyCode === 13) {
        if (!input.value) { return }
        criaTarefa(input.value);
        limpaInput()
    }
})
const limpaInput = _ => {
    input.value = '';
    input.focus();
}
const criaBotaoApagar=li=>{
    li.innerHTML +=' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText='Apagar'
    //setAttribute adiciona um atributo para a tag
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(botaoApagar)
}
const criaTarefa = texto => {
    const li = criaLi();
    li.innerHTML = texto
    list.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
}
button.addEventListener('click', _ => {
    if (!input.value) { return }
    criaTarefa(input.value);
    limpaInput()
})
document.addEventListener('click',e=>{
    //pega o target do evento click
    const el = e.target;
    //se o target conter alguma classe apagar 
    if(el.classList.contains('apagar')){
        //pega o elemento pai do target
        console.log(el.parentElement)
        //remove o elemento inteiro
        el.parentElement.remove()
        salvarTarefas();
    }
})
const salvarTarefas = _ =>{
    const liTarefas = list.querySelectorAll('li')
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    //transformou o array json em string
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    //jogou pro localstorage
    localStorage.setItem('tarefas', tarefasJSON);
}
const adicionaTarefasSalvas=_=>{
    //puxou "getItem" as tarefas devolta
    const tarefas = localStorage.getItem('tarefas');
    //converteu de volta de string pra array
    const listaDeTarefas = JSON.parse(tarefas);
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)  
    }
}
adicionaTarefasSalvas();