const ajax = obj => {
    return new Promise((resolve, reject) => {
        //xhr = xml http request, nome padrão da comunidade
        const xhr = new XMLHttpRequest();
        // GET(puxar), a url que voce quer puxar, e se é assincrono
        xhr.open(obj.method, obj.url, true);
        //se fosse post 
        xhr.send()
        //Ouvir o load do arquivo
        xhr.addEventListener('load', () => {
            //verificar o protocolo http
            if (xhr.status >= 200 && xhr.status < 300) {
                // O que buscar ja vai vir aqui na func sucesso
                resolve(xhr.responseText)
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                })
            }
        })
    })
}
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
    const href = el.getAttribute('href')
    console.log(href) // temos o link da pagina
    
    try {
        const response = await ajax({
            method: 'GET',
            url: href
        })
        carregaResultado(response)
    } catch (e) {
        console.log(e)
    }

    //.then(response => {
    //    carregaResultado(response)
    //}).catch(e => console.log(e))
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response;
}