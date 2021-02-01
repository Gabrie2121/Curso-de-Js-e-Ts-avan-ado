const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

route.get("/",homeController.paginaInicial);
//Não precisa mais da req,res aqui
//só importar o controller

route.post('/',homeController.trataPost)

//Rotas de contato
route.get('/contato',contatoController.paginaInicial)

//para cada rota é uma patern voce criar um controller para cada
//caso contrario, ficara muito bagunçado, pois cada rota pode ter muitos casos

module.exports = route