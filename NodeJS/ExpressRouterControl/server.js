const express = require('express');
const app = express();
const routes = require('./routes')//importando as routes

app.use(express.urlencoded({ extended: true }));
app.use(routes)//falando pro meu app usar minhas routes

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log(`servidor executando na porta 3000`);
});
