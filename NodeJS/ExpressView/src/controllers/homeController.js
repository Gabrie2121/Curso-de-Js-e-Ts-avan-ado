exports.paginaInicial = (req,res)=>{
    res.render('index')
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