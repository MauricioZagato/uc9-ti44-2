/*
Faça uma função na biblioteca de vocês  que valida email e telefone, e reescreva o programa de agenda cadastrando nome,email e telefone validos
*/

const input = require("../input");
const { validaEmail} = require("../aula6/leo");
const { validaTel } = require("../aula6/leo");

(async () => { //iniciando a função anomima asincrona

    let agenda = []; //declara um vetor vazio chamado agenda
    //declara uma variavel chamada continuar

    for (let continuar = "sim"; agenda.length <= 5 && continuar == "sim";) {

        //inicia meu laço
        console.log("Digite um nome: ")
        let nomeE = await input()
        console.log("Digite um telefone: ")
        let telefone = await input()
        console.log("Digite seu Email: ")
        let emaiL = await input()

        if (validaEmail(emaiL) && validaTel(telefone)) {
            console.log("email Cadastrado")
            console.log("telefone Cadastrado")
            agenda.push({
                nome: nomeE,
                tel: telefone,
                email: emaiL

            });

            console.log("Deseja continuar: sim?")
            continuar = (await input()).toLowerCase();
        } else {
            console.log("Dados invalidos")


        }
    }

    console.log(agenda)


})();