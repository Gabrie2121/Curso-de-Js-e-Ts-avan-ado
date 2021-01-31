const express = require("express");
const app = express();

//CRUD -> CREATE, READ, UPDATE, DELETE
//         POST   GET    PUT      DELETE
// http://meusite.com/ -> rota /
// http://meusite.com/sobre -> rota sobre

app.get("/", (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
});
//quando o formulario com method post enviar
//ele vai cair no app.post
app.post("/",(req,res)=>{
    res.send('Recebi o formulario')
})

app.get('/contato',(req,res)=>{
    res.send('Obrigado por entrar em contato')
})

app.listen(3333,()=>{
    console.log('Acessar http://localhost:3333')
    console.log(`servidor executando na porta 3333`)
})