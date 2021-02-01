const express = require('express');
const app = express();
const routes = require('./routes')//importando as routes
const path = require('path')

app.use(express.urlencoded({ extended: true }));

//conteudo estatico
//você aponta que ele vai pra um conteudo estatico
app.use(express.static(path.resolve(__dirname,'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))//setar a engine e o caminho
app.set('view engine', 'ejs')//tipo da engine e qual engine vai ser
//npm i ejs
app.use(routes)//falando pro meu app usar minhas routes

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log(`servidor executando na porta 3000`);
});
