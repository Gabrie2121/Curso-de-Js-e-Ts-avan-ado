const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
//isso para poder usar o req.body
//em qualquer post ou put

app.get("/", (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar formulario</button>
    </form>
    `);
});

app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  console.log(req.params); //parametros de requisição /testes/das/as
  console.log(req.query); //stringquery da requisição ?nome=gabriel&sobrenome=miranda
  console.log(req.query.nome); //puxei só o nome
  res.send(req.query); //exibi o obj da stringQuery
});

app.post("/", (req, res) => {
  console.log(req.body); //corpo da requisição post
  res.send(`você escreveu: ${req.body.nome}`);
  //precisa do app.use para o urlencoded
  //o req.body puxa o valor enviado pelo method post do form
  //criando um objeto com o nome do input e seu resultado
});

app.listen(3333, () => {
  console.log("Acessar http://localhost:3333");
  console.log(`servidor executando na porta 3333`);
});
