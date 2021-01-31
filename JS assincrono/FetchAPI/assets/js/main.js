
//reconhecer os cliques
document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()
    if (tag === 'a') {
        e.preventDefault();//previnir que o A nao va pra outra pagina
        carregaPagina(el)
    }
})

const carregaPagina = async el => {
    try{
        const href = el.getAttribute('href')
        const response = await fetch(href)
        if(response.status!==200) throw new Error(response.status)
        const html = await response.text()
        carregaResultado(html)
    }catch(e){
        console.error(e)
    }

//achei muito melhor fazer com promises ao inves de async
        // fetch(href).then(res => {
        //     if(res.status !== 200) throw new Error(res.status)
        //     return res.text()
        // })
        // .then(html =>carregaResultado(html))
        // .catch(e => console.error(e))

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response;
}
//fetch retorna sempre uma promisse
// fetch('pagina4.html').then(res => {
//     if (res.status !== 200) throw new Error(res.status)
//     return res.text()
// }).then(html => console.log(html)).catch(e => console.error(e))