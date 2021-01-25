//calculadora em factory function
//Normalmente factory function serve para objetos que se repetem
//Mais nese caso vamos usar para aprendizado
function criaCalculadora() {
    //tudo que for metodo vai pra baixo
    //não é regra mais fica um codigo mais limpos
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        inicia() {
            //sempre que quero referenciar uma chave do obj precisa do this
            this.cliqueBotoes()
            this.pressionaEnter()
        },
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    
                    this.realizaConta()
                }
            })
        },
        realizaConta() {
            //eval é perigoso ele vai avaliar a string e transformar em js
            //perigoso pq pode ser invadido facil pois executa como linhas js
            let conta = this.display.value
            try {
                conta = eval(conta)
                if (!conta) {
                    alert('Conta invalida')
                    return;
                }

                this.display.value = String(conta)
            } catch (e) {
                alert('Conta invalida')
                return;
            }
        },
        clearDisplay() {
            this.display.value = ''
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },
        cliqueBotoes() {
            //this -> calculadora
            //quem chama o metodo é o this
            document.addEventListener('click', function (e) {
                const el = e.target
                //this -> elemento (document)
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm()
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            }.bind(this))//arrow function não precisa do bind para puxar o this pai
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        }


    }
}

const calculadora = criaCalculadora();
calculadora.inicia();