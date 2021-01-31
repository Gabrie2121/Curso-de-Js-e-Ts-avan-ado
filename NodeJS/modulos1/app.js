//const mod1 = require('./mod1')
//functiona literalmente como um objeto padrão
// console.log(mod1)
// console.log(mod1.qualquerCoisa)
// mod1.falaNome()


//desestruturação do objeto
// const {nomeee, sobrenome, falaNome } = require('./mod1')
// console.log(nomeee, sobrenome)
// falaNome()
const path = require('path')
const axios = require('axios')
const { Pessoa } = require('./mod1')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => {
        console.log(response.data)
    }).catch((e) => {
        console.log(e)
    });

const p1 = new Pessoa('Gabriel')
console.log(p1)