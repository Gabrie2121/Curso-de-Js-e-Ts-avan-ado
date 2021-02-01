exports.paginaInicial = (req,res)=>{
    res.send(`
      <form action="/" method="POST">
      Nome do cliente: <input type="text" name="nome">
      <button>Enviar formulario</button>
      </form>
      `);
}

exports.trataPost = (req,res)=>{
  res.send(`Ei, sou sua nova rota de post e voce digitou ${req.body.nome}`)
}

// app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
//     console.log(req.params);
//     console.log(req.query);
//     console.log(req.query.nome);
//     res.send(req.query);
//   });
  
//   app.post("/", (req, res) => {
//     console.log(req.body);
//     res.send(`você escreveu: ${req.body.nome}`);
//  });